/**
 * OSM Building Fetcher
 * Fetches building data from OpenStreetMap Overpass API
 */

export class OSMBuildingFetcher {
  constructor() {
    this.overpassUrl = 'https://overpass-api.de/api/interpreter';
    this.cache = new Map();
  }

  /**
   * Fetch building data from OSM for given bounds
   * @param {Object} bounds - {north, south, east, west}
   * @returns {Promise<Object>} OSM data
   */
  async fetchBuildings(bounds) {
    const { north, south, east, west } = bounds;

    // Create cache key
    const cacheKey = `${north}_${south}_${east}_${west}`;

    // Check cache first
    if (this.cache.has(cacheKey)) {
      console.log('Using cached building data');
      return this.cache.get(cacheKey);
    }

    // Overpass QL query to get buildings with height data
    const query = `
      [out:json][timeout:25];
      (
        way["building"](${south},${west},${north},${east});
        relation["building"](${south},${west},${north},${east});
      );
      out body;
      >;
      out skel qt;
    `;

    try {
      const response = await fetch(this.overpassUrl, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(query),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (!response.ok) {
        throw new Error(`Overpass API error: ${response.status}`);
      }

      const data = await response.json();

      // Cache the result
      this.cache.set(cacheKey, data);

      return data;
    } catch (error) {
      console.error('Error fetching OSM buildings:', error);
      return { elements: [] };
    }
  }

  /**
   * Parse OSM data into building objects
   * @param {Object} osmData - Raw OSM data from Overpass API
   * @returns {Array} Array of building objects
   */
  parseBuildings(osmData) {
    const buildings = [];
    const nodes = new Map();

    // First pass: collect all nodes
    osmData.elements.forEach(element => {
      if (element.type === 'node') {
        nodes.set(element.id, { lat: element.lat, lon: element.lon });
      }
    });

    // Second pass: process ways (buildings)
    osmData.elements.forEach(element => {
      if (element.type === 'way' && element.tags && element.tags.building) {
        const building = this.processBuildingWay(element, nodes);
        if (building) {
          buildings.push(building);
        }
      }
    });

    console.log(`Parsed ${buildings.length} buildings from OSM data`);
    return buildings;
  }

  /**
   * Process a single building way from OSM
   * @param {Object} way - OSM way element
   * @param {Map} nodes - Map of node IDs to coordinates
   * @returns {Object|null} Building object or null
   */
  processBuildingWay(way, nodes) {
    if (!way.nodes || way.nodes.length < 3) {
      return null;
    }

    // Get coordinates for all nodes
    const coordinates = way.nodes
      .map(nodeId => nodes.get(nodeId))
      .filter(coord => coord !== undefined);

    if (coordinates.length < 3) {
      return null;
    }

    // Extract building properties
    const tags = way.tags || {};

    // Calculate height
    let height = this.estimateBuildingHeight(tags);

    // Calculate centroid
    const centroid = this.calculateCentroid(coordinates);

    return {
      id: way.id,
      coordinates: coordinates,
      centroid: centroid,
      height: height,
      levels: tags['building:levels'] ? parseInt(tags['building:levels']) : null,
      type: tags.building,
      name: tags.name || null,
      amenity: tags.amenity || null,
      color: this.getBuildingColor(tags)
    };
  }

  /**
   * Estimate building height from OSM tags
   * @param {Object} tags - OSM tags
   * @returns {number} Height in meters
   */
  estimateBuildingHeight(tags) {
    // Explicit height tag
    if (tags.height) {
      const height = parseFloat(tags.height);
      if (!isNaN(height)) return height;
    }

    // Height from levels
    if (tags['building:levels']) {
      const levels = parseInt(tags['building:levels']);
      if (!isNaN(levels)) return levels * 3.5; // 3.5m per level
    }

    // Estimate by building type
    const type = tags.building;
    const estimates = {
      'apartments': 15,
      'house': 6,
      'residential': 10,
      'commercial': 12,
      'retail': 8,
      'industrial': 10,
      'office': 20,
      'hotel': 25,
      'hospital': 15,
      'school': 10,
      'university': 15,
      'cathedral': 30,
      'church': 15,
      'mosque': 20,
      'temple': 12,
      'stadium': 25,
      'yes': 8
    };

    return estimates[type] || 8; // Default 8m
  }

  /**
   * Calculate centroid of coordinates
   * @param {Array} coordinates - Array of {lat, lon} objects
   * @returns {Object} {lat, lon}
   */
  calculateCentroid(coordinates) {
    let sumLat = 0, sumLon = 0;
    coordinates.forEach(coord => {
      sumLat += coord.lat;
      sumLon += coord.lon;
    });
    return {
      lat: sumLat / coordinates.length,
      lon: sumLon / coordinates.length
    };
  }

  /**
   * Get color for building based on type
   * @param {Object} tags - OSM tags
   * @returns {number} Hex color code
   */
  getBuildingColor(tags) {
    const type = tags.building;
    const colors = {
      'apartments': 0xd3d3d3,
      'house': 0xffeaa7,
      'residential': 0xfab1a0,
      'commercial': 0x74b9ff,
      'retail': 0x55efc4,
      'industrial': 0xb2bec3,
      'office': 0x6c5ce7,
      'hotel': 0xfd79a8,
      'hospital': 0xff7675,
      'school': 0xfdcb6e,
      'university': 0xe17055,
      'cathedral': 0xdfe6e9,
      'church': 0xdfe6e9,
      'mosque': 0x00b894,
      'temple': 0xffeaa7,
      'stadium': 0x0984e3,
      'yes': 0xcccccc
    };

    return colors[type] || 0xcccccc; // Default grey
  }

  /**
   * Clear the cache
   */
  clearCache() {
    this.cache.clear();
  }
}
