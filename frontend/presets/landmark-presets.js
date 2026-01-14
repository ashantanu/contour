/**
 * Landmark Presets for Indian Monuments and Iconic Structures
 * Includes: Northern monuments, Western monuments, Southern temples, Forts, Modern landmarks
 */

export const LANDMARK_PRESETS = [
  // ==================== NORTHERN MONUMENTS ====================
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    category: "landmark",
    region: "Uttar Pradesh",
    center: { lat: 27.1751, lon: 78.0421 },
    bounds: {
      north: 27.178, south: 27.172,
      east: 78.045, west: 78.039
    },
    zoom: 18, // Very high zoom for detail
    exaggeration: 3,
    cameraPosition: [80, 40, 80],
    landmark: {
      id: "taj_mahal",
      position: { lat: 27.1751, lon: 78.0421 },
      type: "monument",
      height: 73,
      width: 56,
      depth: 56,
      style: "mogul_dome",
      modelUrl: "/models/taj_mahal.glb", // Optional
      color: 0xffffff,
      features: ["main_dome", "minarets", "gardens", "reflecting_pool"]
    },
    loadBuildings: false, // Landmark only
    description: "White marble mausoleum built by Shah Jahan (1632-1653)",
    voiceContext: "The Taj Mahal is one of the Seven Wonders of the World, a UNESCO World Heritage site built as a tomb for Mumtaz Mahal"
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    category: "landmark",
    region: "Delhi",
    center: { lat: 28.5245, lon: 77.1855 },
    bounds: {
      north: 28.527, south: 28.522,
      east: 77.188, west: 77.183
    },
    zoom: 18,
    exaggeration: 2,
    cameraPosition: [60, 35, 60],
    landmark: {
      id: "qutub_minar",
      position: { lat: 28.5245, lon: 77.1855 },
      type: "tower",
      height: 72.5,
      radius: 7.5,
      style: "minaret",
      color: 0xd4a574,
      features: ["five_storeys", "balconies", "inscriptions"]
    },
    loadBuildings: false,
    description: "World's tallest brick minaret (1192 AD)",
    voiceContext: "Built by Qutb-ud-din Aibak, this 73m tower has 379 steps and is made of red sandstone"
  },
  {
    id: "india-gate",
    name: "India Gate",
    category: "landmark",
    region: "Delhi",
    center: { lat: 28.6129, lon: 77.2295 },
    bounds: {
      north: 28.616, south: 28.610,
      east: 77.233, west: 77.226
    },
    zoom: 17,
    exaggeration: 4,
    cameraPosition: [70, 30, 70],
    landmark: {
      id: "india_gate",
      position: { lat: 28.6129, lon: 77.2295 },
      type: "arch",
      height: 42,
      width: 42,
      style: "war_memorial",
      color: 0xe6d5b8,
      features: ["arch", "eternal_flame", "names_inscription"]
    },
    loadBuildings: true, // Show Rajpath context
    description: "War memorial designed by Edwin Lutyens (1931)",
    voiceContext: "India Gate commemorates 70,000 Indian soldiers who died in World War I and is located at the heart of New Delhi"
  },
  {
    id: "red-fort",
    name: "Red Fort (Lal Qila)",
    category: "landmark",
    region: "Delhi",
    center: { lat: 28.6562, lon: 77.2410 },
    bounds: {
      north: 28.660, south: 28.653,
      east: 77.244, west: 77.238
    },
    zoom: 17,
    exaggeration: 3,
    cameraPosition: [90, 35, 90],
    landmark: {
      id: "red_fort",
      position: { lat: 28.6562, lon: 77.2410 },
      type: "fort_complex",
      height: 18,
      wallLength: 900,
      style: "mogul_fortress",
      color: 0x8B0000,
      features: ["ramparts", "diwan_i_am", "diwan_i_khas", "moti_masjid"]
    },
    loadBuildings: false,
    description: "Mogul palace fortress with red sandstone walls (1648)",
    voiceContext: "The Red Fort served as the main residence of Mughal emperors for nearly 200 years and is where India's Prime Minister addresses the nation on Independence Day"
  },
  {
    id: "humayuns-tomb",
    name: "Humayun's Tomb",
    category: "landmark",
    region: "Delhi",
    center: { lat: 28.5933, lon: 77.2507 },
    bounds: {
      north: 28.596, south: 28.590,
      east: 77.254, west: 77.247
    },
    zoom: 17,
    exaggeration: 3,
    cameraPosition: [75, 32, 75],
    landmark: {
      id: "humayuns_tomb",
      position: { lat: 28.5933, lon: 77.2507 },
      type: "tomb",
      height: 47,
      width: 91,
      depth: 91,
      style: "mogul_garden_tomb",
      color: 0xd2691e,
      features: ["double_dome", "char_bagh", "red_sandstone"]
    },
    loadBuildings: false,
    description: "First garden-tomb in Indian subcontinent (1570)",
    voiceContext: "Humayun's Tomb was commissioned by his widow and is considered a precursor to the Taj Mahal in its architectural style"
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    category: "landmark",
    region: "Delhi",
    center: { lat: 28.5535, lon: 77.2588 },
    bounds: {
      north: 28.556, south: 28.551,
      east: 77.261, west: 77.256
    },
    zoom: 18,
    exaggeration: 4,
    cameraPosition: [65, 28, 65],
    landmark: {
      id: "lotus_temple",
      position: { lat: 28.5535, lon: 77.2588 },
      type: "temple",
      height: 40,
      width: 70,
      style: "modern_expressionist",
      color: 0xffffff,
      features: ["lotus_petals", "27_petals", "pools"]
    },
    loadBuildings: true,
    description: "Bahá'í House of Worship shaped like lotus flower (1986)",
    voiceContext: "The Lotus Temple is notable for its flower-like design with 27 free-standing marble-clad petals and welcomes people of all religions"
  },
  {
    id: "akshardham",
    name: "Akshardham Temple",
    category: "landmark",
    region: "Delhi",
    center: { lat: 28.6127, lon: 77.2773 },
    bounds: {
      north: 28.616, south: 28.609,
      east: 77.281, west: 77.274
    },
    zoom: 17,
    exaggeration: 4,
    cameraPosition: [85, 33, 85],
    landmark: {
      id: "akshardham",
      position: { lat: 28.6127, lon: 77.2773 },
      type: "temple_complex",
      height: 43,
      width: 110,
      depth: 96,
      style: "traditional_hindu",
      color: 0xf5deb3,
      features: ["carved_pillars", "domes", "mandapams", "sculptures"]
    },
    loadBuildings: false,
    description: "Modern Hindu temple complex with intricate carvings (2005)",
    voiceContext: "Akshardham showcases millennia of traditional Hindu culture, spirituality, and architecture through 20,000 sculpted figures"
  },

  // ==================== WESTERN MONUMENTS ====================
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    category: "landmark",
    region: "Maharashtra",
    center: { lat: 18.9220, lon: 72.8347 },
    bounds: {
      north: 18.925, south: 18.919,
      east: 72.838, west: 72.831
    },
    zoom: 18,
    exaggeration: 5,
    cameraPosition: [55, 25, 55],
    landmark: {
      id: "gateway_of_india",
      position: { lat: 18.9220, lon: 72.8347 },
      type: "arch",
      height: 26,
      width: 25,
      depth: 15,
      style: "indo_saracenic",
      color: 0xdaa520,
      features: ["central_dome", "lattice_work", "harbor_view"]
    },
    loadBuildings: true,
    description: "Iconic basalt arch on Mumbai's waterfront (1924)",
    voiceContext: "Built to commemorate King George V's visit, now Mumbai's most famous landmark facing the Arabian Sea"
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    category: "landmark",
    region: "Rajasthan",
    center: { lat: 26.9239, lon: 75.8267 },
    bounds: {
      north: 26.927, south: 26.921,
      east: 75.830, west: 75.824
    },
    zoom: 18,
    exaggeration: 3,
    cameraPosition: [50, 20, 50],
    landmark: {
      id: "hawa_mahal",
      position: { lat: 26.9239, lon: 75.8267 },
      type: "facade",
      height: 15,
      width: 50,
      depth: 8,
      style: "rajput_honeycomb",
      color: 0xff8c69,
      windows: 953,
      features: ["jharokhas", "pink_sandstone", "honeycomb_structure"]
    },
    loadBuildings: false,
    description: "Palace of Winds with 953 windows (1799)",
    voiceContext: "Hawa Mahal was built to allow royal women to observe street festivals while remaining unseen, featuring 953 small windows called jharokhas"
  },
  {
    id: "amer-fort",
    name: "Amer Fort",
    category: "landmark",
    region: "Rajasthan",
    center: { lat: 26.9855, lon: 75.8513 },
    bounds: {
      north: 26.990, south: 26.981,
      east: 75.856, west: 75.847
    },
    zoom: 16,
    exaggeration: 3.5,
    cameraPosition: [100, 40, 100],
    landmark: {
      id: "amer_fort",
      position: { lat: 26.9855, lon: 75.8513 },
      type: "fort_palace",
      height: 30,
      wallLength: 900,
      style: "rajput_mogul",
      color: 0xf0e68c,
      features: ["sheesh_mahal", "diwan_i_am", "ramparts", "gardens"]
    },
    loadBuildings: false,
    description: "Hilltop fort-palace with mirror palace (1592)",
    voiceContext: "Amer Fort overlooks Maota Lake and is renowned for its Sheesh Mahal (Mirror Palace) adorned with thousands of mirror tiles"
  },
  {
    id: "chhatrapati-shivaji",
    name: "Chhatrapati Shivaji Terminus",
    category: "landmark",
    region: "Maharashtra",
    center: { lat: 18.9398, lon: 72.8355 },
    bounds: {
      north: 18.942, south: 18.937,
      east: 72.838, west: 72.833
    },
    zoom: 18,
    exaggeration: 6,
    cameraPosition: [60, 28, 60],
    landmark: {
      id: "csmt",
      position: { lat: 18.9398, lon: 72.8355 },
      type: "railway_station",
      height: 37,
      width: 100,
      depth: 80,
      style: "victorian_gothic",
      color: 0xcd853f,
      features: ["dome", "turrets", "gargoyles", "stained_glass"]
    },
    loadBuildings: true,
    description: "UNESCO Victorian Gothic railway station (1887)",
    voiceContext: "CST is an outstanding example of Victorian Gothic Revival architecture blended with Indian traditional elements"
  },
  {
    id: "ajanta-caves",
    name: "Ajanta Caves",
    category: "landmark",
    region: "Maharashtra",
    center: { lat: 20.5519, lon: 75.7033 },
    bounds: {
      north: 20.555, south: 20.549,
      east: 75.707, west: 75.700
    },
    zoom: 17,
    exaggeration: 3,
    cameraPosition: [70, 32, 70],
    landmark: {
      id: "ajanta_caves",
      position: { lat: 20.5519, lon: 75.7033 },
      type: "cave_complex",
      height: 25,
      wallLength: 500,
      style: "buddhist_rock_cut",
      color: 0x8b4513,
      features: ["murals", "sculptures", "30_caves", "monasteries"]
    },
    loadBuildings: false,
    description: "Ancient Buddhist cave temples with murals (2nd century BCE)",
    voiceContext: "Ajanta Caves are 30 rock-cut Buddhist cave monuments featuring ancient paintings and sculptures from 2nd century BCE to 5th century CE"
  },

  // ==================== SOUTHERN MONUMENTS ====================
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    category: "landmark",
    region: "Karnataka",
    center: { lat: 12.3052, lon: 76.6552 },
    bounds: {
      north: 12.308, south: 12.302,
      east: 76.658, west: 76.652
    },
    zoom: 17,
    exaggeration: 4,
    cameraPosition: [80, 34, 80],
    landmark: {
      id: "mysore_palace",
      position: { lat: 12.3052, lon: 76.6552 },
      type: "palace",
      height: 44,
      width: 245,
      depth: 156,
      style: "indo_saracenic",
      color: 0xffd700,
      domes: 5,
      features: ["domes", "arches", "colonnades", "durbar_hall"]
    },
    loadBuildings: false,
    description: "Royal palace with 97,000 sq ft of gold leaf (1912)",
    voiceContext: "Mysore Palace is one of India's most visited monuments, illuminated by nearly 100,000 light bulbs on Sundays and festivals"
  },
  {
    id: "charminar",
    name: "Charminar",
    category: "landmark",
    region: "Telangana",
    center: { lat: 17.3616, lon: 78.4747 },
    bounds: {
      north: 17.364, south: 17.359,
      east: 78.477, west: 78.472
    },
    zoom: 18,
    exaggeration: 5,
    cameraPosition: [50, 24, 50],
    landmark: {
      id: "charminar",
      position: { lat: 17.3616, lon: 78.4747 },
      type: "monument",
      height: 48.7,
      width: 20,
      minarets: 4,
      style: "qutb_shahi",
      color: 0xd2b48c,
      features: ["four_minarets", "mosque", "arches", "stucco"]
    },
    loadBuildings: true,
    description: "Four-minaret monument in Hyderabad (1591)",
    voiceContext: "Charminar is an iconic symbol of Hyderabad, built by Sultan Muhammad Quli Qutb Shah with four grand arches facing the cardinal directions"
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Temple",
    category: "landmark",
    region: "Tamil Nadu",
    center: { lat: 9.9195, lon: 78.1193 },
    bounds: {
      north: 9.922, south: 9.917,
      east: 78.122, west: 78.117
    },
    zoom: 17,
    exaggeration: 4,
    cameraPosition: [75, 30, 75],
    landmark: {
      id: "meenakshi_temple",
      position: { lat: 9.9195, lon: 78.1193 },
      type: "temple_complex",
      height: 52,
      gopurams: 14,
      style: "dravidian",
      color: 0xff6347,
      features: ["gopurams", "sculptures", "thousand_pillar_hall", "sacred_pond"]
    },
    loadBuildings: false,
    description: "14 towering gopurams with colorful sculptures (1623)",
    voiceContext: "Meenakshi Temple is dedicated to Goddess Meenakshi and features 14 magnificent gopurams covered in thousands of colorful sculptures"
  },
  {
    id: "brihadeeswarar",
    name: "Brihadeeswarar Temple",
    category: "landmark",
    region: "Tamil Nadu",
    center: { lat: 10.7825, lon: 79.1312 },
    bounds: {
      north: 10.785, south: 10.780,
      east: 79.134, west: 79.128
    },
    zoom: 17,
    exaggeration: 4,
    cameraPosition: [70, 31, 70],
    landmark: {
      id: "brihadeeswarar",
      position: { lat: 10.7825, lon: 79.1312 },
      type: "temple",
      height: 66,
      width: 30,
      style: "chola_dravidian",
      color: 0xb8860b,
      features: ["vimana", "nandi_statue", "frescoes", "granite_construction"]
    },
    loadBuildings: false,
    description: "UNESCO Chola temple with 66m vimana (1010 AD)",
    voiceContext: "Built by Raja Raja Chola I, this temple features a massive 25-ton granite capstone and is an architectural marvel of the Chola period"
  },
  {
    id: "virupaksha-temple",
    name: "Virupaksha Temple, Hampi",
    category: "landmark",
    region: "Karnataka",
    center: { lat: 15.3350, lon: 76.4620 },
    bounds: {
      north: 15.338, south: 15.332,
      east: 76.465, west: 76.459
    },
    zoom: 17,
    exaggeration: 3,
    cameraPosition: [65, 29, 65],
    landmark: {
      id: "virupaksha_hampi",
      position: { lat: 15.3350, lon: 76.4620 },
      type: "temple",
      height: 50,
      width: 40,
      style: "vijayanagara",
      color: 0xd2691e,
      features: ["gopuram", "pillared_hall", "frescoes", "courtyard"]
    },
    loadBuildings: false,
    description: "Ancient temple in Hampi ruins (7th century)",
    voiceContext: "Virupaksha Temple is part of the UNESCO World Heritage site of Hampi and has been in continuous worship since the 7th century"
  },

  // ==================== TEMPLES & RELIGIOUS ====================
  {
    id: "golden-temple",
    name: "Golden Temple",
    category: "landmark",
    region: "Punjab",
    center: { lat: 31.6200, lon: 74.8765 },
    bounds: {
      north: 31.623, south: 31.617,
      east: 74.879, west: 74.874
    },
    zoom: 18,
    exaggeration: 3,
    cameraPosition: [55, 26, 55],
    landmark: {
      id: "golden_temple",
      position: { lat: 31.6200, lon: 74.8765 },
      type: "temple",
      height: 40,
      width: 40.5,
      style: "sikh_gurdwara",
      color: 0xffd700,
      features: ["sarovar", "causeway", "gold_plating", "amrit_sarovar"]
    },
    loadBuildings: false,
    description: "Holiest Sikh shrine with gold-plated exterior (1604)",
    voiceContext: "The Golden Temple, or Harmandir Sahib, is the spiritual center of Sikhism, surrounded by the Amrit Sarovar (Pool of Nectar) and welcomes visitors of all faiths"
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    category: "landmark",
    region: "Odisha",
    center: { lat: 19.8876, lon: 86.0945 },
    bounds: {
      north: 19.890, south: 19.885,
      east: 86.097, west: 86.092
    },
    zoom: 17,
    exaggeration: 3,
    cameraPosition: [60, 28, 60],
    landmark: {
      id: "konark_sun_temple",
      position: { lat: 19.8876, lon: 86.0945 },
      type: "temple",
      height: 30,
      width: 70,
      style: "kalinga_architecture",
      color: 0xb8860b,
      features: ["chariot_wheels", "horses", "erotic_sculptures", "stone_chariot"]
    },
    loadBuildings: false,
    description: "13th century sun temple shaped as chariot",
    voiceContext: "Konark Sun Temple is designed as a colossal chariot with 24 wheels pulled by seven horses, representing the sun god Surya's chariot"
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temples",
    category: "landmark",
    region: "Madhya Pradesh",
    center: { lat: 24.8318, lon: 79.9199 },
    bounds: {
      north: 24.835, south: 24.829,
      east: 79.923, west: 79.917
    },
    zoom: 17,
    exaggeration: 3,
    cameraPosition: [70, 30, 70],
    landmark: {
      id: "khajuraho",
      position: { lat: 24.8318, lon: 79.9199 },
      type: "temple_complex",
      height: 31,
      width: 60,
      style: "chandela_architecture",
      color: 0xdaa520,
      features: ["erotic_sculptures", "intricate_carvings", "shikhara", "25_temples"]
    },
    loadBuildings: false,
    description: "UNESCO temples with intricate sculptures (950-1050 AD)",
    voiceContext: "Khajuraho temples are famous for their nagara-style architecture and erotic sculptures, representing various aspects of life including love and spirituality"
  },

  // ==================== MODERN LANDMARKS ====================
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    category: "landmark",
    region: "Gujarat",
    center: { lat: 21.8380, lon: 73.7191 },
    bounds: {
      north: 21.841, south: 21.835,
      east: 73.722, west: 73.716
    },
    zoom: 17,
    exaggeration: 5,
    cameraPosition: [90, 100, 90],
    landmark: {
      id: "statue_of_unity",
      position: { lat: 21.8380, lon: 73.7191 },
      type: "statue",
      height: 182, // World's tallest statue
      width: 58,
      style: "modern_monument",
      color: 0xcd853f,
      features: ["observation_deck", "museum", "valley_of_flowers"]
    },
    loadBuildings: false,
    description: "World's tallest statue at 182m (2018)",
    voiceContext: "The Statue of Unity depicts Sardar Vallabhbhai Patel, India's first Deputy Prime Minister, and is the world's tallest statue at 182 meters"
  },
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    category: "landmark",
    region: "West Bengal",
    center: { lat: 22.5448, lon: 88.3426 },
    bounds: {
      north: 22.547, south: 22.542,
      east: 88.345, west: 88.340
    },
    zoom: 17,
    exaggeration: 4,
    cameraPosition: [75, 32, 75],
    landmark: {
      id: "victoria_memorial",
      position: { lat: 22.5448, lon: 88.3426 },
      type: "memorial",
      height: 56,
      width: 103,
      depth: 69,
      style: "indo_saracenic",
      color: 0xffffff,
      features: ["central_dome", "gardens", "museum", "bronze_angel"]
    },
    loadBuildings: true,
    description: "White marble memorial to Queen Victoria (1921)",
    voiceContext: "Victoria Memorial in Kolkata combines British and Mughal architecture, built with white marble from Rajasthan and houses a museum of colonial history"
  }
];
