/**
 * Combined Presets - Cities with Landmarks
 * Shows urban areas together with their iconic monuments
 */

export const COMBINED_PRESETS = [
  // ==================== AGRA ====================
  {
    id: "agra-city-taj",
    name: "Agra with Taj Mahal",
    category: "combined",
    region: "Uttar Pradesh",
    bounds: {
      north: 27.20, south: 27.15,
      east: 78.06, west: 78.00
    },
    zoom: 16,
    exaggeration: 5,
    cameraPosition: [0, 100, 160],
    loadBuildings: true,
    landmarks: [
      {
        id: "taj_mahal",
        position: { lat: 27.1751, lon: 78.0421 },
        type: "monument",
        height: 73,
        width: 56,
        depth: 56,
        style: "mogul_dome",
        color: 0xffffff,
        priority: "high"
      },
      {
        id: "agra_fort",
        position: { lat: 27.1795, lon: 78.0211 },
        type: "fort",
        height: 21,
        width: 94,
        style: "mogul_fortress",
        color: 0x8B0000,
        priority: "medium"
      }
    ],
    description: "Agra cityscape featuring the Taj Mahal and Agra Fort",
    voiceContext: "Agra showcases Mughal grandeur with the Taj Mahal on the Yamuna riverbank and the nearby Agra Fort, both UNESCO World Heritage sites"
  },

  // ==================== DELHI ====================
  {
    id: "delhi-monuments",
    name: "Delhi - Historic Monuments",
    category: "combined",
    region: "Delhi",
    bounds: {
      north: 28.66, south: 28.52,
      east: 77.25, west: 77.18
    },
    zoom: 14,
    exaggeration: 6,
    cameraPosition: [0, 130, 200],
    loadBuildings: true,
    landmarks: [
      {
        id: "red_fort",
        position: { lat: 28.6562, lon: 77.2410 },
        type: "fort_complex",
        height: 18,
        wallLength: 900,
        style: "mogul_fortress",
        color: 0x8B0000,
        priority: "high"
      },
      {
        id: "qutub_minar",
        position: { lat: 28.5245, lon: 77.1855 },
        type: "tower",
        height: 72.5,
        radius: 7.5,
        style: "minaret",
        color: 0xd4a574,
        priority: "high"
      },
      {
        id: "india_gate",
        position: { lat: 28.6129, lon: 77.2295 },
        type: "arch",
        height: 42,
        width: 42,
        style: "war_memorial",
        color: 0xe6d5b8,
        priority: "high"
      },
      {
        id: "lotus_temple",
        position: { lat: 28.5535, lon: 77.2588 },
        type: "temple",
        height: 40,
        width: 70,
        style: "modern_expressionist",
        color: 0xffffff,
        priority: "medium"
      }
    ],
    description: "Old and New Delhi with major monuments",
    voiceContext: "Delhi's historic monuments span from medieval Islamic architecture at Qutub Minar and Red Fort to modern landmarks like India Gate and the Lotus Temple"
  },
  {
    id: "delhi-lutyens-monuments",
    name: "Lutyens' Delhi with Monuments",
    category: "combined",
    region: "Delhi",
    bounds: {
      north: 28.62, south: 28.58,
      east: 77.25, west: 77.19
    },
    zoom: 15,
    exaggeration: 8,
    cameraPosition: [0, 90, 145],
    loadBuildings: true,
    landmarks: [
      {
        id: "india_gate",
        position: { lat: 28.6129, lon: 77.2295 },
        type: "arch",
        height: 42,
        width: 42,
        style: "war_memorial",
        color: 0xe6d5b8,
        priority: "high"
      },
      {
        id: "rashtrapati_bhavan",
        position: { lat: 28.6143, lon: 77.1991 },
        type: "palace",
        height: 37,
        width: 190,
        depth: 156,
        style: "indo_saracenic",
        color: 0xd2b48c,
        priority: "high"
      },
      {
        id: "parliament_house",
        position: { lat: 28.6174, lon: 77.2087 },
        type: "government_building",
        height: 21,
        diameter: 170,
        style: "colonial_circular",
        color: 0xdaa520,
        priority: "medium"
      }
    ],
    description: "Central Delhi's planned administrative area with government landmarks",
    voiceContext: "Lutyens' Delhi showcases British imperial architecture including Rashtrapati Bhavan, Parliament House, and India Gate along the ceremonial Rajpath boulevard"
  },

  // ==================== MUMBAI ====================
  {
    id: "mumbai-heritage",
    name: "Mumbai - Heritage Zone",
    category: "combined",
    region: "Maharashtra",
    bounds: {
      north: 18.93, south: 18.90,
      east: 72.84, west: 72.81
    },
    zoom: 16,
    exaggeration: 8,
    cameraPosition: [0, 85, 135],
    loadBuildings: true,
    landmarks: [
      {
        id: "gateway_of_india",
        position: { lat: 18.9220, lon: 72.8347 },
        type: "arch",
        height: 26,
        width: 25,
        depth: 15,
        style: "indo_saracenic",
        color: 0xdaa520,
        priority: "high"
      },
      {
        id: "taj_hotel",
        position: { lat: 18.9217, lon: 72.8331 },
        type: "hotel",
        height: 73,
        width: 90,
        style: "heritage_hotel",
        color: 0xdeb887,
        priority: "high"
      },
      {
        id: "csmt",
        position: { lat: 18.9398, lon: 72.8355 },
        type: "railway_station",
        height: 37,
        width: 100,
        depth: 80,
        style: "victorian_gothic",
        color: 0xcd853f,
        priority: "medium"
      }
    ],
    description: "Colonial Mumbai with Gateway and CST station",
    voiceContext: "South Mumbai's heritage zone includes the Gateway of India facing the Arabian Sea, the historic Taj Mahal Palace hotel, and the Gothic Revival CST railway station"
  },

  // ==================== JAIPUR ====================
  {
    id: "jaipur-pink-city",
    name: "Jaipur - Pink City",
    category: "combined",
    region: "Rajasthan",
    bounds: {
      north: 26.93, south: 26.90,
      east: 75.84, west: 75.80
    },
    zoom: 15,
    exaggeration: 5,
    cameraPosition: [0, 80, 130],
    loadBuildings: true,
    landmarks: [
      {
        id: "hawa_mahal",
        position: { lat: 26.9239, lon: 75.8267 },
        type: "facade",
        height: 15,
        width: 50,
        depth: 8,
        style: "rajput_honeycomb",
        color: 0xff8c69,
        priority: "high"
      },
      {
        id: "city_palace",
        position: { lat: 26.9258, lon: 75.8237 },
        type: "palace_complex",
        height: 30,
        width: 100,
        style: "rajput_mogul",
        color: 0xf0e68c,
        priority: "high"
      },
      {
        id: "jantar_mantar",
        position: { lat: 26.9247, lon: 75.8247 },
        type: "observatory",
        height: 27,
        width: 60,
        style: "astronomical",
        color: 0xf5deb3,
        priority: "medium"
      }
    ],
    description: "Walled city with royal palaces and observatory",
    voiceContext: "Jaipur's Pink City features the ornate Hawa Mahal, sprawling City Palace complex, and Jantar Mantar astronomical observatory within its planned grid layout"
  },

  // ==================== HYDERABAD ====================
  {
    id: "hyderabad-charminar",
    name: "Hyderabad - Old City with Charminar",
    category: "combined",
    region: "Telangana",
    bounds: {
      north: 17.38, south: 17.34,
      east: 78.50, west: 78.45
    },
    zoom: 15,
    exaggeration: 7,
    cameraPosition: [0, 75, 120],
    loadBuildings: true,
    landmarks: [
      {
        id: "charminar",
        position: { lat: 17.3616, lon: 78.4747 },
        type: "monument",
        height: 48.7,
        width: 20,
        minarets: 4,
        style: "qutb_shahi",
        color: 0xd2b48c,
        priority: "high"
      },
      {
        id: "mecca_masjid",
        position: { lat: 17.3614, lon: 78.4735 },
        type: "mosque",
        height: 23,
        width: 67,
        depth: 54,
        style: "qutb_shahi",
        color: 0xdaa520,
        priority: "medium"
      },
      {
        id: "laad_bazaar",
        position: { lat: 17.3620, lon: 78.4743 },
        type: "bazaar_area",
        height: 8,
        length: 200,
        style: "traditional_market",
        color: 0xff8c69,
        priority: "low"
      }
    ],
    description: "Old city centered around Charminar monument",
    voiceContext: "Hyderabad's old city features the iconic Charminar surrounded by historic bazaars and the grand Mecca Masjid, showcasing Qutb Shahi architecture"
  },

  // ==================== KOLKATA ====================
  {
    id: "kolkata-colonial",
    name: "Kolkata - Colonial Heritage",
    category: "combined",
    region: "West Bengal",
    bounds: {
      north: 22.58, south: 22.54,
      east: 88.36, west: 88.32
    },
    zoom: 15,
    exaggeration: 9,
    cameraPosition: [0, 85, 140],
    loadBuildings: true,
    landmarks: [
      {
        id: "victoria_memorial",
        position: { lat: 22.5448, lon: 88.3426 },
        type: "memorial",
        height: 56,
        width: 103,
        depth: 69,
        style: "indo_saracenic",
        color: 0xffffff,
        priority: "high"
      },
      {
        id: "howrah_bridge",
        position: { lat: 22.5852, lon: 88.3468 },
        type: "bridge",
        height: 82,
        length: 705,
        style: "cantilever",
        color: 0x708090,
        priority: "high"
      },
      {
        id: "raj_bhavan",
        position: { lat: 22.5560, lon: 88.3513 },
        type: "government_building",
        height: 25,
        width: 120,
        style: "colonial",
        color: 0xf5deb3,
        priority: "medium"
      }
    ],
    description: "Colonial Kolkata with Victoria Memorial and Howrah Bridge",
    voiceContext: "Kolkata's colonial heritage includes the marble Victoria Memorial, iconic Howrah Bridge spanning the Hooghly River, and grand British-era government buildings"
  },

  // ==================== CHENNAI ====================
  {
    id: "chennai-heritage",
    name: "Chennai - Marina to Fort St. George",
    category: "combined",
    region: "Tamil Nadu",
    bounds: {
      north: 13.10, south: 13.06,
      east: 80.30, west: 80.26
    },
    zoom: 15,
    exaggeration: 10,
    cameraPosition: [0, 80, 130],
    loadBuildings: true,
    landmarks: [
      {
        id: "fort_st_george",
        position: { lat: 13.0798, lon: 80.2885 },
        type: "fort",
        height: 15,
        wallLength: 400,
        style: "british_colonial",
        color: 0xf5deb3,
        priority: "high"
      },
      {
        id: "chennai_central",
        position: { lat: 13.0827, lon: 80.2755 },
        type: "railway_station",
        height: 18,
        width: 85,
        style: "indo_saracenic",
        color: 0xcd853f,
        priority: "medium"
      },
      {
        id: "kapaleeshwarar",
        position: { lat: 13.0339, lon: 80.2707 },
        type: "temple",
        height: 40,
        gopurams: 4,
        style: "dravidian",
        color: 0xff6347,
        priority: "medium"
      }
    ],
    description: "Chennai's colonial and temple architecture",
    voiceContext: "Chennai showcases Fort St. George (first British settlement in India), Indo-Saracenic railway stations, and the ancient Kapaleeshwarar Temple"
  },

  // ==================== AMRITSAR ====================
  {
    id: "amritsar-golden-temple",
    name: "Amritsar - Golden Temple Complex",
    category: "combined",
    region: "Punjab",
    bounds: {
      north: 31.625, south: 31.615,
      east: 74.880, west: 74.870
    },
    zoom: 17,
    exaggeration: 6,
    cameraPosition: [0, 65, 110],
    loadBuildings: true,
    landmarks: [
      {
        id: "golden_temple",
        position: { lat: 31.6200, lon: 74.8765 },
        type: "temple",
        height: 40,
        width: 40.5,
        style: "sikh_gurdwara",
        color: 0xffd700,
        priority: "high"
      },
      {
        id: "akal_takht",
        position: { lat: 31.6202, lon: 74.8762 },
        type: "building",
        height: 35,
        width: 30,
        style: "sikh_religious",
        color: 0xdaa520,
        priority: "medium"
      },
      {
        id: "clock_tower",
        position: { lat: 31.6210, lon: 74.8755 },
        type: "tower",
        height: 25,
        width: 10,
        style: "sikh_heritage",
        color: 0xf5deb3,
        priority: "low"
      }
    ],
    description: "Golden Temple complex with surrounding old city",
    voiceContext: "The Golden Temple complex includes the gold-plated Harmandir Sahib, Akal Takht seat of Sikh authority, and surrounding traditional bazaars"
  },

  // ==================== MYSORE ====================
  {
    id: "mysore-palace-city",
    name: "Mysore - Royal City",
    category: "combined",
    region: "Karnataka",
    bounds: {
      north: 12.32, south: 12.29,
      east: 76.67, west: 76.64
    },
    zoom: 15,
    exaggeration: 5,
    cameraPosition: [0, 75, 125],
    loadBuildings: true,
    landmarks: [
      {
        id: "mysore_palace",
        position: { lat: 12.3052, lon: 76.6552 },
        type: "palace",
        height: 44,
        width: 245,
        depth: 156,
        style: "indo_saracenic",
        color: 0xffd700,
        priority: "high"
      },
      {
        id: "chamundi_hills",
        position: { lat: 12.2725, lon: 76.6730 },
        type: "temple_hill",
        height: 90,
        style: "dravidian_temple",
        color: 0xff6347,
        priority: "medium"
      },
      {
        id: "devaraja_market",
        position: { lat: 12.3055, lon: 76.6542 },
        type: "market",
        height: 6,
        length: 150,
        style: "traditional",
        color: 0xf0e68c,
        priority: "low"
      }
    ],
    description: "Mysore city with palace and Chamundi Hills",
    voiceContext: "Mysore showcases its magnificent palace in the city center with Chamundi Hills temple rising in the background"
  },

  // ==================== UDAIPUR ====================
  {
    id: "udaipur-lakes",
    name: "Udaipur - City of Lakes",
    category: "combined",
    region: "Rajasthan",
    bounds: {
      north: 24.60, south: 24.56,
      east: 73.71, west: 73.66
    },
    zoom: 15,
    exaggeration: 6,
    cameraPosition: [0, 90, 145],
    loadBuildings: true,
    landmarks: [
      {
        id: "city_palace_udaipur",
        position: { lat: 24.5761, lon: 73.6833 },
        type: "palace_complex",
        height: 30,
        width: 244,
        style: "rajput",
        color: 0xf0e68c,
        priority: "high"
      },
      {
        id: "lake_palace",
        position: { lat: 24.5714, lon: 73.6784 },
        type: "palace",
        height: 15,
        width: 85,
        style: "rajput_island",
        color: 0xffffff,
        priority: "high"
      },
      {
        id: "jag_mandir",
        position: { lat: 24.5693, lon: 73.6805 },
        type: "palace",
        height: 20,
        width: 65,
        style: "rajput_island",
        color: 0xf5deb3,
        priority: "medium"
      }
    ],
    description: "Lake palaces and City Palace on Pichola Lake",
    voiceContext: "Udaipur's City Palace rises from Lake Pichola's shore, with the Lake Palace and Jag Mandir island palaces creating a romantic waterfront cityscape"
  },

  // ==================== VARANASI ====================
  {
    id: "varanasi-ghats-temples",
    name: "Varanasi - Ghats and Temples",
    category: "combined",
    region: "Uttar Pradesh",
    bounds: {
      north: 25.32, south: 25.28,
      east: 83.02, west: 82.98
    },
    zoom: 15,
    exaggeration: 7,
    cameraPosition: [0, 70, 115],
    loadBuildings: true,
    landmarks: [
      {
        id: "kashi_vishwanath",
        position: { lat: 25.3109, lon: 83.0107 },
        type: "temple",
        height: 50,
        shikhara: true,
        style: "north_indian",
        color: 0xffd700,
        priority: "high"
      },
      {
        id: "dashashwamedh_ghat",
        position: { lat: 25.3067, lon: 83.0130 },
        type: "ghat",
        height: 15,
        length: 200,
        style: "stone_steps",
        color: 0xd2b48c,
        priority: "high"
      },
      {
        id: "manikarnika_ghat",
        position: { lat: 25.3094, lon: 83.0134 },
        type: "ghat",
        height: 12,
        length: 150,
        style: "stone_steps",
        color: 0xd2b48c,
        priority: "medium"
      }
    ],
    description: "Ancient city with temples and riverside ghats",
    voiceContext: "Varanasi's ghats line the Ganges with the golden Kashi Vishwanath Temple rising above the ancient cityscape, creating one of Hinduism's holiest sites"
  }
];
