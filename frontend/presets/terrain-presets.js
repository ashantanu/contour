/**
 * Terrain Presets for Indian Geographic Features
 * Includes: Himalayas, Western Ghats, Eastern Ghats, Deccan Plateau, Deserts, Coastal regions
 */

export const TERRAIN_PRESETS = [
  // ==================== HIMALAYAS ====================
  {
    id: "himalaya-nanda-devi",
    name: "Nanda Devi - Himalayas",
    category: "terrain",
    region: "Uttarakhand",
    bounds: { north: 30.5, south: 30.0, east: 80.0, west: 79.5 },
    zoom: 11,
    exaggeration: 2.5,
    cameraPosition: [0, 150, 200],
    description: "Second highest peak in India (7,816m)",
    features: ["snow_peaks", "glaciers", "valleys"],
    difficulty: "advanced",
    voiceContext: "Nanda Devi is a sacred mountain and part of the Greater Himalayas"
  },
  {
    id: "himalaya-kashmir",
    name: "Kashmir Valley",
    category: "terrain",
    region: "Jammu & Kashmir",
    bounds: { north: 34.3, south: 33.8, east: 75.0, west: 74.5 },
    zoom: 11,
    exaggeration: 2.5,
    cameraPosition: [0, 120, 180],
    description: "Pir Panjal and Zanskar ranges surrounding Dal Lake",
    features: ["mountain_ranges", "valleys", "lakes"],
    difficulty: "intermediate",
    voiceContext: "Kashmir Valley is surrounded by the Pir Panjal and Great Himalayan ranges, creating one of the most beautiful valleys in the world"
  },
  {
    id: "himalaya-kanchenjunga",
    name: "Kanchenjunga Base",
    category: "terrain",
    region: "Sikkim",
    bounds: { north: 27.8, south: 27.5, east: 88.3, west: 88.0 },
    zoom: 11,
    exaggeration: 3.0,
    cameraPosition: [0, 180, 220],
    description: "Third highest mountain in the world (8,586m)",
    features: ["snow_peaks", "glaciers", "high_altitude"],
    difficulty: "advanced",
    voiceContext: "Kanchenjunga is considered sacred and is the third highest peak in the world"
  },
  {
    id: "himalaya-rohtang",
    name: "Rohtang Pass",
    category: "terrain",
    region: "Himachal Pradesh",
    bounds: { north: 32.4, south: 32.3, east: 77.3, west: 77.2 },
    zoom: 12,
    exaggeration: 2.8,
    cameraPosition: [0, 100, 150],
    description: "High mountain pass connecting Kullu Valley to Lahaul (3,978m)",
    features: ["mountain_pass", "snow_peaks", "glaciers"],
    difficulty: "intermediate",
    voiceContext: "Rohtang Pass is a critical gateway through the Himalayas, connecting Manali to Lahaul and Spiti valleys"
  },

  // ==================== WESTERN GHATS ====================
  {
    id: "western-ghats-munnar",
    name: "Munnar Tea Estates",
    category: "terrain",
    region: "Kerala",
    bounds: { north: 10.2, south: 9.8, east: 77.2, west: 76.8 },
    zoom: 12,
    exaggeration: 2.0,
    cameraPosition: [0, 80, 120],
    description: "Rolling hills covered in tea plantations",
    features: ["tea_estates", "hills", "waterfalls"],
    difficulty: "beginner",
    voiceContext: "Munnar is famous for its sprawling tea estates set among rolling hills in the Western Ghats"
  },
  {
    id: "western-ghats-coorg",
    name: "Coorg Hills",
    category: "terrain",
    region: "Karnataka",
    bounds: { north: 12.5, south: 12.2, east: 75.9, west: 75.6 },
    zoom: 12,
    exaggeration: 2.2,
    cameraPosition: [0, 70, 110],
    description: "Coffee country with lush green hills",
    features: ["coffee_plantations", "hills", "forests"],
    difficulty: "beginner",
    voiceContext: "Coorg, also known as Kodagu, is renowned for its coffee estates and misty hills"
  },
  {
    id: "western-ghats-lonavala",
    name: "Lonavala-Khandala Ghats",
    category: "terrain",
    region: "Maharashtra",
    bounds: { north: 18.8, south: 18.7, east: 73.5, west: 73.3 },
    zoom: 12,
    exaggeration: 2.5,
    cameraPosition: [0, 90, 130],
    description: "Monsoon paradise with waterfalls and plateaus",
    features: ["plateaus", "waterfalls", "ghats"],
    difficulty: "intermediate",
    voiceContext: "Lonavala and Khandala are twin hill stations known for dramatic monsoon landscapes and the scenic Mumbai-Pune expressway route"
  },
  {
    id: "western-ghats-agumbe",
    name: "Agumbe Rainforests",
    category: "terrain",
    region: "Karnataka",
    bounds: { north: 13.55, south: 13.45, east: 75.15, west: 75.05 },
    zoom: 13,
    exaggeration: 2.3,
    cameraPosition: [0, 75, 105],
    description: "Cherrapunji of South India - rainiest region",
    features: ["rainforests", "waterfalls", "biodiversity"],
    difficulty: "intermediate",
    voiceContext: "Agumbe receives the highest rainfall in South India and is home to dense evergreen rainforests"
  },

  // ==================== EASTERN GHATS ====================
  {
    id: "eastern-ghats-araku",
    name: "Araku Valley",
    category: "terrain",
    region: "Andhra Pradesh",
    bounds: { north: 18.4, south: 18.0, east: 82.9, west: 82.5 },
    zoom: 11,
    exaggeration: 1.8,
    cameraPosition: [0, 65, 100],
    description: "Tribal valley with coffee plantations",
    features: ["valleys", "coffee_plantations", "tribal_areas"],
    difficulty: "beginner",
    voiceContext: "Araku Valley is a scenic hill station in the Eastern Ghats, known for its coffee and tribal culture"
  },
  {
    id: "eastern-ghats-horseley",
    name: "Horsley Hills",
    category: "terrain",
    region: "Andhra Pradesh",
    bounds: { north: 13.7, south: 13.6, east: 78.5, west: 78.4 },
    zoom: 13,
    exaggeration: 2.0,
    cameraPosition: [0, 60, 95],
    description: "Hill station named after British collector W.D. Horsley",
    features: ["hills", "forests", "viewpoints"],
    difficulty: "beginner",
    voiceContext: "Horsley Hills offers panoramic views of the Eastern Ghats and was a popular summer retreat during British rule"
  },

  // ==================== DECCAN PLATEAU ====================
  {
    id: "deccan-mahabaleshwar",
    name: "Mahabaleshwar Plateau",
    category: "terrain",
    region: "Maharashtra",
    bounds: { north: 17.95, south: 17.85, east: 73.7, west: 73.6 },
    zoom: 12,
    exaggeration: 2.0,
    cameraPosition: [0, 85, 125],
    description: "Hill station overlooking Sahyadri ranges",
    features: ["plateaus", "viewpoints", "strawberry_farms"],
    difficulty: "beginner",
    voiceContext: "Mahabaleshwar sits atop a plateau in the Sahyadri ranges and is known for its numerous viewpoints and strawberry cultivation"
  },
  {
    id: "deccan-panchgani",
    name: "Panchgani Tablelands",
    category: "terrain",
    region: "Maharashtra",
    bounds: { north: 17.95, south: 17.90, east: 73.82, west: 73.77 },
    zoom: 13,
    exaggeration: 2.2,
    cameraPosition: [0, 75, 110],
    description: "Second longest mountain plateau in Asia",
    features: ["tablelands", "plateaus", "viewpoints"],
    difficulty: "beginner",
    voiceContext: "Panchgani's Table Land is a vast volcanic plateau offering 360-degree views of the surrounding valleys"
  },

  // ==================== DESERTS ====================
  {
    id: "thar-jaisalmer",
    name: "Thar Desert - Jaisalmer",
    category: "terrain",
    region: "Rajasthan",
    bounds: { north: 26.95, south: 26.85, east: 70.95, west: 70.85 },
    zoom: 12,
    exaggeration: 5.0, // Exaggerate dunes
    cameraPosition: [0, 50, 90],
    description: "Golden sand dunes near the Golden City",
    features: ["sand_dunes", "desert", "arid_landscape"],
    difficulty: "intermediate",
    voiceContext: "The Thar Desert near Jaisalmer features dramatic sand dunes and is known as the Great Indian Desert"
  },
  {
    id: "thar-bikaner",
    name: "Thar Desert - Bikaner",
    category: "terrain",
    region: "Rajasthan",
    bounds: { north: 28.1, south: 28.0, east: 73.4, west: 73.3 },
    zoom: 12,
    exaggeration: 5.0,
    cameraPosition: [0, 45, 85],
    description: "Desert landscape with scrub vegetation",
    features: ["sand_dunes", "desert", "scrubland"],
    difficulty: "intermediate",
    voiceContext: "Bikaner sits in the northern Thar Desert, characterized by rolling sand dunes and sparse vegetation"
  },
  {
    id: "rann-of-kutch",
    name: "Rann of Kutch",
    category: "terrain",
    region: "Gujarat",
    bounds: { north: 23.9, south: 23.7, east: 69.8, west: 69.6 },
    zoom: 11,
    exaggeration: 8.0, // Highly exaggerate the subtle terrain
    cameraPosition: [0, 40, 80],
    description: "Seasonal salt marsh - white desert",
    features: ["salt_marsh", "seasonal_wetland", "flat_terrain"],
    difficulty: "beginner",
    voiceContext: "The Rann of Kutch transforms into a vast white salt desert during dry season and becomes India's largest wetland during monsoon"
  },

  // ==================== COASTAL ====================
  {
    id: "coastal-gokarna",
    name: "Gokarna Coastline",
    category: "terrain",
    region: "Karnataka",
    bounds: { north: 14.6, south: 14.5, east: 74.35, west: 74.25 },
    zoom: 13,
    exaggeration: 3.0,
    cameraPosition: [0, 65, 105],
    description: "Dramatic cliffs meeting the Arabian Sea",
    features: ["cliffs", "beaches", "coastline"],
    difficulty: "intermediate",
    voiceContext: "Gokarna features pristine beaches nestled between dramatic rocky cliffs along the Arabian Sea"
  },
  {
    id: "coastal-varkala",
    name: "Varkala Cliffs",
    category: "terrain",
    region: "Kerala",
    bounds: { north: 8.75, south: 8.70, east: 76.75, west: 76.70 },
    zoom: 13,
    exaggeration: 3.5,
    cameraPosition: [0, 60, 100],
    description: "Red laterite cliffs along Kerala coast",
    features: ["laterite_cliffs", "beaches", "coastline"],
    difficulty: "intermediate",
    voiceContext: "Varkala is unique for its red laterite cliffs that rise dramatically from the beach, a rare geological formation"
  },
  {
    id: "coastal-andaman",
    name: "Havelock Island",
    category: "terrain",
    region: "Andaman & Nicobar",
    bounds: { north: 12.05, south: 11.95, east: 93.0, west: 92.9 },
    zoom: 13,
    exaggeration: 4.0,
    cameraPosition: [0, 55, 95],
    description: "Tropical island with coral reefs",
    features: ["islands", "coral_reefs", "tropical_forests"],
    difficulty: "beginner",
    voiceContext: "Havelock Island (now Swaraj Dweep) is part of the Andaman archipelago and features pristine beaches and coral reefs"
  },

  // ==================== VOLCANIC & UNIQUE ====================
  {
    id: "lonar-crater",
    name: "Lonar Crater Lake",
    category: "terrain",
    region: "Maharashtra",
    bounds: { north: 19.98, south: 19.96, east: 76.52, west: 76.50 },
    zoom: 15,
    exaggeration: 6.0,
    cameraPosition: [0, 45, 75],
    description: "50,000-year-old meteorite impact crater",
    features: ["crater", "saline_lake", "unique_geology"],
    difficulty: "intermediate",
    voiceContext: "Lonar Crater was created by a meteorite impact around 50,000 years ago and is the only hypervelocity meteorite crater in basaltic rock on Earth"
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    category: "terrain",
    region: "Uttarakhand",
    bounds: { north: 30.75, south: 30.70, east: 79.65, west: 79.60 },
    zoom: 14,
    exaggeration: 2.5,
    cameraPosition: [0, 90, 130],
    description: "UNESCO site with endemic alpine flowers",
    features: ["alpine_meadows", "biodiversity", "glaciers"],
    difficulty: "advanced",
    voiceContext: "The Valley of Flowers is a UNESCO World Heritage site known for its meadows of endemic alpine flowers and diverse flora"
  },

  // ==================== VINDHYA & SATPURA ====================
  {
    id: "pachmarhi",
    name: "Pachmarhi Plateau",
    category: "terrain",
    region: "Madhya Pradesh",
    bounds: { north: 22.50, south: 22.40, east: 78.50, west: 78.40 },
    zoom: 12,
    exaggeration: 2.3,
    cameraPosition: [0, 70, 110],
    description: "Hill station in Satpura range",
    features: ["plateaus", "waterfalls", "forests"],
    difficulty: "beginner",
    voiceContext: "Pachmarhi is the only hill station in Madhya Pradesh, nestled in the Satpura range with numerous waterfalls and caves"
  }
];
