/**
 * Building Renderer
 * Renders OSM buildings as 3D meshes in Three.js scene
 */

// THREE is loaded globally via script tag

export class BuildingRenderer {
  constructor(scene, bounds) {
    this.scene = scene;
    this.bounds = bounds;
    this.buildingGroup = new THREE.Group();
    this.buildingGroup.name = 'buildings';
    this.scene.add(this.buildingGroup);

    // LOD settings
    this.useLOD = true;
    this.lodDistances = [200, 500, 1000];

    // Material cache
    this.materials = new Map();
  }

  /**
   * Add buildings to the scene
   * @param {Array} buildings - Array of building objects from OSM parser
   */
  addBuildingsToScene(buildings) {
    console.log(`Rendering ${buildings.length} buildings...`);

    buildings.forEach(building => {
      const mesh = this.createBuildingMesh(building);
      if (mesh) {
        this.buildingGroup.add(mesh);
      }
    });

    console.log(`Rendered ${this.buildingGroup.children.length} buildings`);
  }

  /**
   * Create a 3D mesh for a single building
   * @param {Object} building - Building object
   * @returns {THREE.Mesh|THREE.LOD|null}
   */
  createBuildingMesh(building) {
    if (!building.coordinates || building.coordinates.length < 3) {
      return null;
    }

    // Convert lat/lon to local coordinates
    const shape = this.createBuildingShape(building.coordinates);
    if (!shape) return null;

    // Create geometry
    const geometry = this.extrudeBuilding(shape, building.height);

    // Get or create material
    const material = this.getBuildingMaterial(building);

    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);

    // Position at centroid
    const position = this.latLonToPosition(building.centroid.lat, building.centroid.lon);
    mesh.position.set(position.x, building.height / 2, position.z);

    // Set metadata
    mesh.userData = {
      type: 'building',
      osmId: building.id,
      height: building.height,
      buildingType: building.type,
      name: building.name
    };

    // Add LOD if enabled
    if (this.useLOD) {
      return this.createLOD(mesh, geometry, material, building);
    }

    return mesh;
  }

  /**
   * Create a THREE.Shape from building coordinates
   * @param {Array} coordinates - Array of {lat, lon} objects
   * @returns {THREE.Shape|null}
   */
  createBuildingShape(coordinates) {
    if (coordinates.length < 3) return null;

    const shape = new THREE.Shape();

    coordinates.forEach((coord, index) => {
      const pos = this.latLonToPosition(coord.lat, coord.lon);

      if (index === 0) {
        shape.moveTo(pos.x, pos.z);
      } else {
        shape.lineTo(pos.x, pos.z);
      }
    });

    shape.closePath();
    return shape;
  }

  /**
   * Extrude building shape to create 3D geometry
   * @param {THREE.Shape} shape - Building footprint
   * @param {number} height - Building height in meters
   * @returns {THREE.ExtrudeGeometry}
   */
  extrudeBuilding(shape, height) {
    const extrudeSettings = {
      depth: height,
      bevelEnabled: false
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Rotate to stand upright (extrusion is along Z, we want Y)
    geometry.rotateX(Math.PI / 2);

    return geometry;
  }

  /**
   * Get or create material for building
   * @param {Object} building - Building object
   * @returns {THREE.Material}
   */
  getBuildingMaterial(building) {
    const color = building.color || 0xcccccc;

    // Check cache
    if (this.materials.has(color)) {
      return this.materials.get(color);
    }

    // Create new material
    const material = new THREE.MeshLambertMaterial({
      color: color,
      flatShading: false,
      side: THREE.DoubleSide
    });

    this.materials.set(color, material);
    return material;
  }

  /**
   * Create LOD (Level of Detail) for building
   * @param {THREE.Mesh} highDetail - High detail mesh
   * @param {THREE.Geometry} geometry - Building geometry
   * @param {THREE.Material} material - Building material
   * @param {Object} building - Building data
   * @returns {THREE.LOD}
   */
  createLOD(highDetail, geometry, material, building) {
    const lod = new THREE.LOD();

    // Level 0: High detail (close)
    lod.addLevel(highDetail, 0);

    // Level 1: Medium detail (medium distance)
    const mediumGeometry = geometry.clone();
    const mediumMesh = new THREE.Mesh(mediumGeometry, material);
    mediumMesh.position.copy(highDetail.position);
    lod.addLevel(mediumMesh, this.lodDistances[0]);

    // Level 2: Low detail (far) - simplified box
    const boxGeometry = new THREE.BoxGeometry(10, building.height, 10);
    const lowMesh = new THREE.Mesh(boxGeometry, material);
    lowMesh.position.copy(highDetail.position);
    lod.addLevel(lowMesh, this.lodDistances[1]);

    // Level 3: Very low detail (very far) - single point
    const pointGeometry = new THREE.BoxGeometry(5, building.height * 0.5, 5);
    const veryLowMesh = new THREE.Mesh(pointGeometry, material);
    veryLowMesh.position.copy(highDetail.position);
    lod.addLevel(veryLowMesh, this.lodDistances[2]);

    return lod;
  }

  /**
   * Convert lat/lon to local XZ coordinates
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {Object} {x, z} in local space
   */
  latLonToPosition(lat, lon) {
    // Get bounds center
    const centerLat = (this.bounds.north + this.bounds.south) / 2;
    const centerLon = (this.bounds.east + this.bounds.west) / 2;

    // Calculate offset from center
    const latOffset = lat - centerLat;
    const lonOffset = lon - centerLon;

    // Convert degrees to meters (approximate)
    // 1 degree latitude ≈ 111km
    // 1 degree longitude ≈ 111km * cos(latitude)
    const metersPerDegreeLat = 111000;
    const metersPerDegreeLon = 111000 * Math.cos(centerLat * Math.PI / 180);

    const x = lonOffset * metersPerDegreeLon;
    const z = -latOffset * metersPerDegreeLat; // Negative because north is positive in lat, negative in Z

    return { x, z };
  }

  /**
   * Clear all buildings from scene
   */
  clearBuildings() {
    while (this.buildingGroup.children.length > 0) {
      const child = this.buildingGroup.children[0];

      // Dispose geometry and material
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => mat.dispose());
        } else {
          child.material.dispose();
        }
      }

      this.buildingGroup.remove(child);
    }

    console.log('Cleared all buildings');
  }

  /**
   * Update LOD based on camera position
   * @param {THREE.Camera} camera - Active camera
   */
  updateLOD(camera) {
    if (!this.useLOD) return;

    this.buildingGroup.children.forEach(child => {
      if (child instanceof THREE.LOD) {
        child.update(camera);
      }
    });
  }

  /**
   * Set building visibility
   * @param {boolean} visible - Show/hide buildings
   */
  setVisible(visible) {
    this.buildingGroup.visible = visible;
  }

  /**
   * Get building count
   * @returns {number}
   */
  getBuildingCount() {
    return this.buildingGroup.children.length;
  }

  /**
   * Highlight a specific building
   * @param {number} osmId - OSM building ID
   */
  highlightBuilding(osmId) {
    this.buildingGroup.children.forEach(child => {
      if (child.userData.osmId === osmId) {
        child.material.emissive = new THREE.Color(0xffff00);
        child.material.emissiveIntensity = 0.3;
      }
    });
  }

  /**
   * Clear all highlights
   */
  clearHighlights() {
    this.buildingGroup.children.forEach(child => {
      if (child.material && child.material.emissive) {
        child.material.emissive = new THREE.Color(0x000000);
        child.material.emissiveIntensity = 0;
      }
    });
  }

  /**
   * Dispose of all resources
   */
  dispose() {
    this.clearBuildings();
    this.materials.forEach(material => material.dispose());
    this.materials.clear();
    this.scene.remove(this.buildingGroup);
  }
}
