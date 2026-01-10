"""
FAL Nano Banana Pro Integration
Stylize topographic maps with hypsometric tinting
"""

import os
import base64
from pathlib import Path
from io import BytesIO
from PIL import Image
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Check for FAL API key
HAS_FAL = "FAL_KEY" in os.environ

# Hypsometric tinting prompt from test/test_fal.py
PROMPT = """Enhance this topographic map with vivid hypsometric tinting:

- Apply elevation-based coloring ONLY to the land terrain areas:
  - Coastal lowlands and beaches: pale cream, soft mint greens
  - Low elevations: light greens, yellow-greens
  - Mid elevations: golden yellows, warm ochres, tans
  - High elevations: deep rusty browns, burnt sienna, terra cotta reds
  - Highest peaks: dark reddish-brown (#8B4513), with snow-capped areas in white

- Ocean: deep rich blue with subtle depth gradient (darker = deeper)
- Shallow water/reefs: lighter turquoise blue

- KEEP EXACTLY AS-IS:
  - All text labels and place names
  - Map borders and margins
  - Legend and scale bar
  - Grid lines and coordinates

- Do NOT add shadows or 3D hillshading
- Maintain exact same dimensions and layout

Style reference: vintage raised relief map with rich, saturated terrain colors"""


def stylize_texture(image_path: str) -> str:
    """
    Stylize a texture using FAL Nano Banana Pro.

    Args:
        image_path: Absolute path to uploaded file (TIF, JPG, PNG, etc.)

    Returns:
        Public URL to stylized image (FAL CDN)

    Raises:
        RuntimeError: If FAL_KEY not configured
        ValueError: If image format unsupported
        Exception: If FAL API call fails
    """
    if not HAS_FAL:
        raise RuntimeError("FAL_KEY not configured in environment")

    # Import here to avoid import errors if fal_client not installed
    import fal_client

    # Detect file extension
    ext = Path(image_path).suffix.lower()

    # Open and resize image to stay under FAL's 10MB limit
    try:
        img = Image.open(image_path)

        # Convert to RGB if needed
        if img.mode != "RGB":
            img = img.convert("RGB")

        # Resize to max 2048px (same as terrain.py upload processing)
        max_size = 2048
        if img.width > max_size or img.height > max_size:
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)

        # Encode based on original format
        buffer = BytesIO()
        if ext in {".tif", ".tiff"}:
            # TIF → PNG
            img.save(buffer, format="PNG", optimize=True)
            mime = "image/png"
        elif ext == ".png":
            # PNG → PNG
            img.save(buffer, format="PNG", optimize=True)
            mime = "image/png"
        else:
            # JPG/JPEG/WEBP → JPEG with quality optimization
            img.save(buffer, format="JPEG", quality=85, optimize=True)
            mime = "image/jpeg"

        image_data = base64.b64encode(buffer.getvalue()).decode("utf-8")

    except Exception as e:
        raise ValueError(f"Failed to process image: {str(e)}")

    # Create data URI
    data_uri = f"data:{mime};base64,{image_data}"

    # Call FAL API
    try:
        result = fal_client.subscribe(
            "fal-ai/nano-banana-pro/edit",
            arguments={
                "prompt": PROMPT,
                "image_urls": [data_uri],
                "num_images": 1,
                "aspect_ratio": "auto",
                "output_format": "png",
                "resolution": "2K"
            },
            with_logs=False
        )

        # Extract result URL
        stylized_url = result['images'][0]['url']
        return stylized_url

    except Exception as e:
        raise Exception(f"FAL API error: {str(e)}")
