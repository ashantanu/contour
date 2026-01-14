/**
 * City Presets for Urban Areas in India
 * Focus on cities with distinct skylines, building density, and urban terrain
 */

export const CITY_PRESETS = [
  // ==================== METRO CITIES ====================
  {
    id: "mumbai-south",
    name: "South Mumbai",
    category: "city",
    region: "Maharashtra",
    bounds: {
      north: 18.95, south: 18.88,
      east: 72.86, west: 72.79
    },
    zoom: 15,
    exaggeration: 10,
    cameraPosition: [0, 120, 180],
    loadBuildings: true,
    buildingDensity: "very_high",
    features: ["financial_district", "colonial_architecture", "skyscrapers", "harbor"],
    description: "Financial district: Nariman Point to Colaba",
    voiceContext: "South Mumbai includes the financial hub of Nariman Point, historic Fort area, and colonial architecture along the Arabian Sea waterfront"
  },
  {
    id: "mumbai-bandra-worli",
    name: "Mumbai - Bandra to Worli",
    category: "city",
    region: "Maharashtra",
    bounds: {
      north: 19.08, south: 19.00,
      east: 72.85, west: 72.80
    },
    zoom: 15,
    exaggeration: 12,
    cameraPosition: [0, 140, 200],
    loadBuildings: true,
    buildingDensity: "very_high",
    features: ["sea_link", "high_rises", "coastal_road"],
    description: "Modern Mumbai with Bandra-Worli Sea Link",
    voiceContext: "This area showcases modern Mumbai including the iconic Bandra-Worli Sea Link bridge and luxury high-rise developments"
  },
  {
    id: "delhi-lutyens",
    name: "Lutyens' Delhi",
    category: "city",
    region: "Delhi",
    bounds: {
      north: 28.62, south: 28.58,
      east: 77.23, west: 77.19
    },
    zoom: 15,
    exaggeration: 12,
    cameraPosition: [0, 100, 160],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["government_quarter", "wide_boulevards", "planned_layout", "roundabouts"],
    description: "Government quarter with wide boulevards",
    voiceContext: "Lutyens' Delhi is the planned administrative area designed by British architect Edwin Lutyens, featuring wide tree-lined avenues and government buildings"
  },
  {
    id: "delhi-connaught-place",
    name: "Delhi - Connaught Place",
    category: "city",
    region: "Delhi",
    bounds: {
      north: 28.64, south: 28.62,
      east: 77.23, west: 77.21
    },
    zoom: 16,
    exaggeration: 15,
    cameraPosition: [0, 90, 140],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["circular_layout", "colonial_architecture", "commercial_hub"],
    description: "Circular commercial hub of Central Delhi",
    voiceContext: "Connaught Place is one of the largest commercial and financial centers in New Delhi, known for its distinctive Georgian-style architecture in a circular layout"
  },
  {
    id: "bangalore-ec",
    name: "Bangalore - Electronic City",
    category: "city",
    region: "Karnataka",
    bounds: {
      north: 12.85, south: 12.80,
      east: 77.70, west: 77.63
    },
    zoom: 15,
    exaggeration: 8,
    cameraPosition: [0, 95, 150],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["tech_parks", "modern_infrastructure", "IT_campuses"],
    description: "Tech hub with modern infrastructure",
    voiceContext: "Electronic City is Bangalore's premier IT hub, home to major technology companies and modern glass-facade office complexes"
  },
  {
    id: "bangalore-mg-road",
    name: "Bangalore - MG Road",
    category: "city",
    region: "Karnataka",
    bounds: {
      north: 12.98, south: 12.95,
      east: 77.62, west: 77.58
    },
    zoom: 16,
    exaggeration: 10,
    cameraPosition: [0, 85, 135],
    loadBuildings: true,
    buildingDensity: "very_high",
    features: ["commercial_center", "metro_line", "shopping_district"],
    description: "Commercial heart of Bangalore",
    voiceContext: "MG Road (Mahatma Gandhi Road) is the commercial center of Bangalore, lined with shopping malls, restaurants, and corporate offices"
  },
  {
    id: "chennai-marina",
    name: "Chennai - Marina Beach Area",
    category: "city",
    region: "Tamil Nadu",
    bounds: {
      north: 13.08, south: 13.03,
      east: 80.29, west: 80.24
    },
    zoom: 15,
    exaggeration: 10,
    cameraPosition: [0, 80, 130],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["beachfront", "colonial_architecture", "memorials"],
    description: "Beachfront with colonial architecture",
    voiceContext: "Marina Beach area features India's longest urban beach alongside colonial-era buildings and important memorials"
  },
  {
    id: "kolkata-bbd-bagh",
    name: "Kolkata - BBD Bagh",
    category: "city",
    region: "West Bengal",
    bounds: {
      north: 22.58, south: 22.55,
      east: 88.36, west: 88.33
    },
    zoom: 15,
    exaggeration: 12,
    cameraPosition: [0, 90, 145],
    loadBuildings: true,
    buildingDensity: "very_high",
    features: ["colonial_architecture", "government_offices", "historic_buildings"],
    description: "Colonial heart of Kolkata (formerly Dalhousie Square)",
    voiceContext: "BBD Bagh (formerly Dalhousie Square) is the administrative and financial hub of Kolkata, featuring grand colonial-era buildings"
  },
  {
    id: "hyderabad-hitech-city",
    name: "Hyderabad - HITEC City",
    category: "city",
    region: "Telangana",
    bounds: {
      north: 17.45, south: 17.42,
      east: 78.40, west: 78.35
    },
    zoom: 15,
    exaggeration: 9,
    cameraPosition: [0, 100, 155],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["tech_parks", "modern_towers", "IT_hub"],
    description: "Hyderabad's IT corridor",
    voiceContext: "HITEC City (Hyderabad Information Technology and Engineering Consultancy City) is a major IT hub with glass-clad corporate towers and tech parks"
  },
  {
    id: "pune-koregaon-park",
    name: "Pune - Koregaon Park",
    category: "city",
    region: "Maharashtra",
    bounds: {
      north: 18.55, south: 18.51,
      east: 73.90, west: 73.86
    },
    zoom: 15,
    exaggeration: 8,
    cameraPosition: [0, 75, 120],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["upscale_residential", "restaurants", "boutiques"],
    description: "Upscale neighborhood with cafes and boutiques",
    voiceContext: "Koregaon Park is Pune's upscale neighborhood known for its tree-lined streets, international restaurants, and the Osho Ashram"
  },

  // ==================== HERITAGE CITIES ====================
  {
    id: "jaipur-old-city",
    name: "Jaipur - Pink City Walled Area",
    category: "city",
    region: "Rajasthan",
    bounds: {
      north: 26.93, south: 26.90,
      east: 75.84, west: 75.80
    },
    zoom: 15,
    exaggeration: 5,
    cameraPosition: [0, 70, 115],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["walled_city", "pink_buildings", "royal_architecture"],
    description: "UNESCO-listed walled Pink City",
    voiceContext: "The walled old city of Jaipur is known for its pink-painted buildings, planned grid layout, and royal Rajput architecture"
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi - Ghats Along Ganges",
    category: "city",
    region: "Uttar Pradesh",
    bounds: {
      north: 25.32, south: 25.28,
      east: 83.02, west: 82.98
    },
    zoom: 15,
    exaggeration: 7,
    cameraPosition: [0, 65, 110],
    loadBuildings: true,
    buildingDensity: "very_high",
    features: ["ghats", "temples", "narrow_lanes", "riverfront"],
    description: "Ancient city with riverside ghats",
    voiceContext: "Varanasi's ghats are stone steps leading to the Ganges River, lined with ancient temples and historic buildings in one of the world's oldest continuously inhabited cities"
  },
  {
    id: "udaipur-city-palace",
    name: "Udaipur - City Palace Area",
    category: "city",
    region: "Rajasthan",
    bounds: {
      north: 24.58, south: 24.56,
      east: 73.69, west: 73.66
    },
    zoom: 16,
    exaggeration: 6,
    cameraPosition: [0, 75, 120],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["lakeside", "palaces", "havelis"],
    description: "Lake city with palaces on Pichola lakefront",
    voiceContext: "Udaipur's City Palace complex rises from the shores of Lake Pichola, creating a stunning waterfront cityscape of royal Rajput architecture"
  },
  {
    id: "amritsar-old-city",
    name: "Amritsar - Old City",
    category: "city",
    region: "Punjab",
    bounds: {
      north: 31.64, south: 31.61,
      east: 74.89, west: 74.85
    },
    zoom: 15,
    exaggeration: 7,
    cameraPosition: [0, 70, 115],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["historic_center", "bazaars", "narrow_lanes"],
    description: "Historic city around Golden Temple",
    voiceContext: "Amritsar's old city centers around the Golden Temple with traditional bazaars, narrow lanes, and Sikh heritage architecture"
  },

  // ==================== COASTAL CITIES ====================
  {
    id: "kochi-fort-kochi",
    name: "Kochi - Fort Kochi",
    category: "city",
    region: "Kerala",
    bounds: {
      north: 9.97, south: 9.95,
      east: 76.25, west: 76.22
    },
    zoom: 16,
    exaggeration: 8,
    cameraPosition: [0, 60, 105],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["colonial_architecture", "chinese_fishing_nets", "waterfront"],
    description: "Historic port with colonial heritage",
    voiceContext: "Fort Kochi showcases a unique blend of Dutch, Portuguese, and British colonial architecture along Kerala's historic spice trade port"
  },
  {
    id: "goa-panjim",
    name: "Goa - Panjim (Panaji)",
    category: "city",
    region: "Goa",
    bounds: {
      north: 15.50, south: 15.47,
      east: 73.85, west: 73.81
    },
    zoom: 16,
    exaggeration: 9,
    cameraPosition: [0, 65, 110],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["portuguese_architecture", "colorful_houses", "riverfront"],
    description: "Portuguese-influenced capital city",
    voiceContext: "Panjim features colorful Portuguese colonial architecture, red-tiled roofs, and the historic Fontainhas Latin Quarter"
  },
  {
    id: "visakhapatnam-beach",
    name: "Visakhapatnam - Beach Road",
    category: "city",
    region: "Andhra Pradesh",
    bounds: {
      north: 17.74, south: 17.68,
      east: 83.34, west: 83.28
    },
    zoom: 14,
    exaggeration: 8,
    cameraPosition: [0, 80, 130],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["beachfront", "port_city", "coastal_hills"],
    description: "Port city with scenic beach road",
    voiceContext: "Visakhapatnam's Beach Road stretches along the Bay of Bengal with hills on one side and beaches on the other, creating a unique coastal cityscape"
  },

  // ==================== PLANNED CITIES ====================
  {
    id: "chandigarh-sector17",
    name: "Chandigarh - Sector 17",
    category: "city",
    region: "Chandigarh",
    bounds: {
      north: 30.75, south: 30.73,
      east: 76.79, west: 76.76
    },
    zoom: 16,
    exaggeration: 10,
    cameraPosition: [0, 75, 120],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["modernist_architecture", "planned_layout", "wide_roads"],
    description: "Le Corbusier's modernist planned city",
    voiceContext: "Chandigarh was designed by Le Corbusier as India's first planned city post-independence, featuring modernist architecture and geometric sector layout"
  },
  {
    id: "gandhinagar",
    name: "Gandhinagar - Administrative City",
    category: "city",
    region: "Gujarat",
    bounds: {
      north: 23.24, south: 23.20,
      east: 72.68, west: 72.63
    },
    zoom: 15,
    exaggeration: 7,
    cameraPosition: [0, 70, 115],
    loadBuildings: true,
    buildingDensity: "low",
    features: ["planned_layout", "greenery", "government_buildings"],
    description: "Gujarat's green capital city",
    voiceContext: "Gandhinagar is a planned city serving as Gujarat's capital, known for its wide roads, organized sectors, and abundant greenery"
  },

  // ==================== HILL STATIONS (URBAN) ====================
  {
    id: "shimla-ridge",
    name: "Shimla - The Ridge & Mall Road",
    category: "city",
    region: "Himachal Pradesh",
    bounds: {
      north: 31.11, south: 31.09,
      east: 77.18, west: 77.15
    },
    zoom: 16,
    exaggeration: 5,
    cameraPosition: [0, 80, 125],
    loadBuildings: true,
    buildingDensity: "medium",
    features: ["colonial_architecture", "ridge", "mall_road", "mountain_setting"],
    description: "Former British summer capital on hillside",
    voiceContext: "Shimla's Ridge and Mall Road area showcases Victorian-era architecture cascading down Himalayan slopes, once serving as British India's summer capital"
  },
  {
    id: "darjeeling-town",
    name: "Darjeeling - Town Center",
    category: "city",
    region: "West Bengal",
    bounds: {
      north: 27.05, south: 27.03,
      east: 88.28, west: 88.25
    },
    zoom: 16,
    exaggeration: 4,
    cameraPosition: [0, 75, 120],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["himalayan_setting", "tea_plantations", "toy_train", "colonial_buildings"],
    description: "Tea town with Himalayan backdrop",
    voiceContext: "Darjeeling town is built on steep Himalayan slopes with colonial-era buildings, tea estates, and views of Kanchenjunga"
  },

  // ==================== EMERGING TECH HUBS ====================
  {
    id: "noida-sector62",
    name: "Noida - Sector 62 IT Hub",
    category: "city",
    region: "Uttar Pradesh",
    bounds: {
      north: 28.63, south: 28.60,
      east: 77.38, west: 77.34
    },
    zoom: 15,
    exaggeration: 11,
    cameraPosition: [0, 95, 150],
    loadBuildings: true,
    buildingDensity: "high",
    features: ["tech_parks", "modern_architecture", "IT_offices"],
    description: "NCR's IT and corporate hub",
    voiceContext: "Noida Sector 62 is a major IT hub in the National Capital Region with modern corporate campuses and tech parks"
  },
  {
    id: "gurgaon-cyber-city",
    name: "Gurgaon - Cyber City",
    category: "city",
    region: "Haryana",
    bounds: {
      north: 28.50, south: 28.47,
      east: 77.10, west: 77.06
    },
    zoom: 15,
    exaggeration: 13,
    cameraPosition: [0, 110, 170],
    loadBuildings: true,
    buildingDensity: "very_high",
    features: ["skyscrapers", "corporate_towers", "malls"],
    description: "NCR's corporate and financial district",
    voiceContext: "Cyber City in Gurgaon (now Gurugram) is a dense cluster of glass-facade skyscrapers housing multinational corporations and is India's second largest IT hub"
  }
];
