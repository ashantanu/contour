#!/usr/bin/env python3
"""
Contour - Entry point
Run with: python run.py
"""

import uvicorn

if __name__ == "__main__":
    print("\n🏔️  Contour - 2D Maps to 3D Terrain")
    print("=" * 40)
    print("Open http://localhost:8000 in your browser")
    print("=" * 40 + "\n")
    
    uvicorn.run(
        "backend.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
