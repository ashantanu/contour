/**
 * Landmark Loader
 * Creates 3D representations of famous landmarks and monuments
 */

// THREE and GLTFLoader are loaded globally via script tags

export class LandmarkLoader {
  constructor(scene, bounds) {
    this.scene = scene;
    this.bounds = bounds;
    this.landmarkGroup = new THREE.Group();
    this.landmarkGroup.name = 'landmarks';
    this.scene.add(this.landmarkGroup);

    // GLTF loader for 3D models
    this.gltfLoader = new THREE.GLTFLoader();

    // Cache for loaded models
    this.modelCache = new Map();
  }

  /**
   * Load a landmark into the scene
   * @param {Object} landmarkData - Landmark configuration object
   * @returns {Promise<THREE.Object3D>}
   */
  async loadLandmark(landmarkData) {
    console.log(`Loading landmark: ${landmarkData.id}`);

    // Try to load 3D model first if URL is provided
    if (landmarkData.modelUrl) {
      try {
        const model = await this.loadGLTFModel(landmarkData.modelUrl);
        const mesh = this.setupModelLandmark(model, landmarkData);
        this.landmarkGroup.add(mesh);
        return mesh;
      } catch (error) {
        console.warn(`Failed to load model for ${landmarkData.id}, using procedural geometry:`, error);
      }
    }

    // Fall back to procedural geometry
    const mesh = this.createProceduralLandmark(landmarkData);
    this.landmarkGroup.add(mesh);
    return mesh;
  }

  /**
   * Load GLTF/GLB 3D model
   * @param {string} url - Model URL
   * @returns {Promise<THREE.Group>}
   */
  loadGLTFModel(url) {
    // Check cache
    if (this.modelCache.has(url)) {
      return Promise.resolve(this.modelCache.get(url).clone());
    }

    return new Promise((resolve, reject) => {
      this.gltfLoader.load(
        url,
        (gltf) => {
          this.modelCache.set(url, gltf.scene);
          resolve(gltf.scene.clone());
        },
        (progress) => {
          console.log(`Loading ${url}: ${(progress.loaded / progress.total * 100).toFixed(2)}%`);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  /**
   * Setup a loaded 3D model as a landmark
   * @param {THREE.Group} model - Loaded GLTF model
   * @param {Object} landmarkData - Landmark configuration
   * @returns {THREE.Group}
   */
  setupModelLandmark(model, landmarkData) {
    // Position the model
    const position = this.latLonToPosition(
      landmarkData.position.lat,
      landmarkData.position.lon
    );

    model.position.set(position.x, 0, position.z);

    // Scale to match desired height
    const bbox = new THREE.Box3().setFromObject(model);
    const modelHeight = bbox.max.y - bbox.min.y;
    const scale = landmarkData.height / modelHeight;
    model.scale.set(scale, scale, scale);

    // Metadata
    model.userData = {
      type: 'landmark',
      id: landmarkData.id,
      name: landmarkData.id,
      height: landmarkData.height,
      landmarkType: landmarkData.type
    };

    return model;
  }

  /**
   * Create a procedural landmark based on type
   * @param {Object} landmarkData - Landmark configuration
   * @returns {THREE.Group}
   */
  createProceduralLandmark(landmarkData) {
    const group = new THREE.Group();
    group.name = landmarkData.id;

    // Create geometry based on type
    let geometry;
    switch (landmarkData.type) {
      case 'monument':
      case 'tomb':
        geometry = this.createDomeStructure(landmarkData);
        break;
      case 'tower':
      case 'minaret':
        geometry = this.createTower(landmarkData);
        break;
      case 'arch':
        geometry = this.createArch(landmarkData);
        break;
      case 'temple':
      case 'temple_complex':
        geometry = this.createTemple(landmarkData);
        break;
      case 'fort':
      case 'fort_complex':
      case 'fort_palace':
        geometry = this.createFort(landmarkData);
        break;
      case 'palace':
      case 'palace_complex':
        geometry = this.createPalace(landmarkData);
        break;
      case 'statue':
        geometry = this.createStatue(landmarkData);
        break;
      default:
        geometry = this.createGenericLandmark(landmarkData);
    }

    group.add(geometry);

    // Position
    const position = this.latLonToPosition(
      landmarkData.position.lat,
      landmarkData.position.lon
    );
    group.position.set(position.x, 0, position.z);

    // Metadata
    group.userData = {
      type: 'landmark',
      id: landmarkData.id,
      name: landmarkData.id,
      height: landmarkData.height,
      landmarkType: landmarkData.type
    };

    return group;
  }

  /**
   * Create a dome structure (e.g., Taj Mahal)
   * @param {Object} data - Landmark data
   * @returns {THREE.Group}
   */
  createDomeStructure(data) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xffffff,
      metalness: 0.1,
      roughness: 0.3
    });

    // Base structure
    const baseGeometry = new THREE.BoxGeometry(
      data.width || 50,
      data.height * 0.6,
      data.depth || data.width || 50
    );
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = data.height * 0.3;
    group.add(base);

    // Main dome
    const domeGeometry = new THREE.SphereGeometry(
      data.width * 0.4,
      32,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2
    );
    const dome = new THREE.Mesh(domeGeometry, material);
    dome.position.y = data.height * 0.7;
    group.add(dome);

    // Spire
    const spireGeometry = new THREE.ConeGeometry(5, data.height * 0.2, 8);
    const spire = new THREE.Mesh(spireGeometry, material);
    spire.position.y = data.height * 0.9;
    group.add(spire);

    // Add minarets if specified
    if (data.features && data.features.includes('minarets')) {
      this.addMinarets(group, data, material);
    }

    return group;
  }

  /**
   * Create a tower structure (e.g., Qutub Minar)
   * @param {Object} data - Landmark data
   * @returns {THREE.Mesh}
   */
  createTower(data) {
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xd4a574,
      metalness: 0.1,
      roughness: 0.7
    });

    // Tapered cylinder
    const geometry = new THREE.CylinderGeometry(
      data.radius * 0.6 || 5,  // top radius
      data.radius || 7.5,       // bottom radius
      data.height,
      16,
      5
    );

    const tower = new THREE.Mesh(geometry, material);
    tower.position.y = data.height / 2;

    return tower;
  }

  /**
   * Create an arch structure (e.g., Gateway of India)
   * @param {Object} data - Landmark data
   * @returns {THREE.Group}
   */
  createArch(data) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xdaa520,
      metalness: 0.2,
      roughness: 0.6
    });

    // Create arch using box geometries
    const pillarWidth = data.width * 0.2;
    const archThickness = data.depth || 15;

    // Left pillar
    const leftPillar = new THREE.Mesh(
      new THREE.BoxGeometry(pillarWidth, data.height, archThickness),
      material
    );
    leftPillar.position.set(-data.width * 0.4, data.height / 2, 0);
    group.add(leftPillar);

    // Right pillar
    const rightPillar = new THREE.Mesh(
      new THREE.BoxGeometry(pillarWidth, data.height, archThickness),
      material
    );
    rightPillar.position.set(data.width * 0.4, data.height / 2, 0);
    group.add(rightPillar);

    // Top arch
    const topArch = new THREE.Mesh(
      new THREE.BoxGeometry(data.width, data.height * 0.2, archThickness),
      material
    );
    topArch.position.set(0, data.height * 0.9, 0);
    group.add(topArch);

    // Central dome (if Indo-Saracenic style)
    if (data.style && data.style.includes('indo_saracenic')) {
      const domeGeometry = new THREE.SphereGeometry(
        data.width * 0.15,
        16,
        16,
        0,
        Math.PI * 2,
        0,
        Math.PI / 2
      );
      const dome = new THREE.Mesh(domeGeometry, material);
      dome.position.set(0, data.height, 0);
      group.add(dome);
    }

    return group;
  }

  /**
   * Create a temple structure
   * @param {Object} data - Landmark data
   * @returns {THREE.Group}
   */
  createTemple(data) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xff6347,
      metalness: 0.2,
      roughness: 0.7
    });

    // Add gopurams if Dravidian style
    if (data.gopurams) {
      const gopuramCount = Math.min(data.gopurams, 4);
      for (let i = 0; i < gopuramCount; i++) {
        const gopuram = this.createGopuram(data, material);
        const angle = (i / gopuramCount) * Math.PI * 2;
        const distance = data.width || 30;
        gopuram.position.set(
          Math.cos(angle) * distance,
          0,
          Math.sin(angle) * distance
        );
        group.add(gopuram);
      }
    } else {
      // Generic temple - pyramidal structure
      const baseSize = data.width || 30;
      const levels = 5;

      for (let i = 0; i < levels; i++) {
        const scale = 1 - (i * 0.15);
        const levelHeight = data.height / levels;
        const geometry = new THREE.BoxGeometry(
          baseSize * scale,
          levelHeight,
          baseSize * scale
        );
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = i * levelHeight + levelHeight / 2;
        group.add(mesh);
      }
    }

    return group;
  }

  /**
   * Create a gopuram (temple tower)
   * @param {Object} data - Temple data
   * @param {THREE.Material} material - Material
   * @returns {THREE.Mesh}
   */
  createGopuram(data, material) {
    // Tapered rectangular tower
    const geometry = new THREE.CylinderGeometry(
      5, 8, data.height || 50, 4
    );
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Create a fort structure
   * @param {Object} data - Landmark data
   * @returns {THREE.Group}
   */
  createFort(data) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0x8B0000,
      metalness: 0.1,
      roughness: 0.8
    });

    // Main walls
    const wallLength = data.wallLength || 200;
    const wallGeometry = new THREE.BoxGeometry(wallLength, data.height, 5);

    // Four walls
    const positions = [
      [0, 0, wallLength / 2],
      [0, 0, -wallLength / 2],
      [wallLength / 2, 0, 0],
      [-wallLength / 2, 0, 0]
    ];

    positions.forEach((pos, i) => {
      const wall = new THREE.Mesh(wallGeometry, material);
      wall.position.set(pos[0], data.height / 2, pos[2]);
      if (i >= 2) wall.rotation.y = Math.PI / 2;
      group.add(wall);
    });

    // Corner towers
    const towerGeometry = new THREE.CylinderGeometry(8, 10, data.height * 1.2, 8);
    const corners = [
      [wallLength / 2, wallLength / 2],
      [wallLength / 2, -wallLength / 2],
      [-wallLength / 2, wallLength / 2],
      [-wallLength / 2, -wallLength / 2]
    ];

    corners.forEach(corner => {
      const tower = new THREE.Mesh(towerGeometry, material);
      tower.position.set(corner[0], data.height * 0.6, corner[1]);
      group.add(tower);
    });

    return group;
  }

  /**
   * Create a palace structure
   * @param {Object} data - Landmark data
   * @returns {THREE.Group}
   */
  createPalace(data) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xffd700,
      metalness: 0.3,
      roughness: 0.4
    });

    // Main building
    const mainBuilding = new THREE.Mesh(
      new THREE.BoxGeometry(data.width, data.height, data.depth || data.width * 0.6),
      material
    );
    mainBuilding.position.y = data.height / 2;
    group.add(mainBuilding);

    // Add domes if specified
    if (data.domes) {
      for (let i = 0; i < data.domes; i++) {
        const domeGeometry = new THREE.SphereGeometry(
          data.width * 0.1,
          16,
          16,
          0,
          Math.PI * 2,
          0,
          Math.PI / 2
        );
        const dome = new THREE.Mesh(domeGeometry, material);
        const offset = (i - (data.domes - 1) / 2) * (data.width / data.domes);
        dome.position.set(offset, data.height, 0);
        group.add(dome);
      }
    }

    return group;
  }

  /**
   * Create a statue
   * @param {Object} data - Landmark data
   * @returns {THREE.Mesh}
   */
  createStatue(data) {
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xcd853f,
      metalness: 0.4,
      roughness: 0.5
    });

    // Simple humanoid shape
    const geometry = new THREE.CapsuleGeometry(
      data.width / 2 || 25,
      data.height * 0.8,
      8,
      16
    );

    const statue = new THREE.Mesh(geometry, material);
    statue.position.y = data.height / 2;

    return statue;
  }

  /**
   * Create generic landmark
   * @param {Object} data - Landmark data
   * @returns {THREE.Mesh}
   */
  createGenericLandmark(data) {
    const material = new THREE.MeshStandardMaterial({
      color: data.color || 0xcccccc,
      metalness: 0.2,
      roughness: 0.6
    });

    const geometry = new THREE.BoxGeometry(
      data.width || 30,
      data.height,
      data.depth || data.width || 30
    );

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = data.height / 2;

    return mesh;
  }

  /**
   * Add minarets to a structure
   * @param {THREE.Group} group - Parent group
   * @param {Object} data - Landmark data
   * @param {THREE.Material} material - Material
   */
  addMinarets(group, data, material) {
    const minaretHeight = data.height * 1.1;
    const minaretRadius = 3;
    const minaretGeometry = new THREE.CylinderGeometry(
      minaretRadius * 0.8,
      minaretRadius,
      minaretHeight,
      12
    );

    // Four corner minarets
    const offset = data.width * 0.45;
    const positions = [
      [offset, offset],
      [offset, -offset],
      [-offset, offset],
      [-offset, -offset]
    ];

    positions.forEach(pos => {
      const minaret = new THREE.Mesh(minaretGeometry, material);
      minaret.position.set(pos[0], minaretHeight / 2, pos[1]);
      group.add(minaret);
    });
  }

  /**
   * Convert lat/lon to local position (same as BuildingRenderer)
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {Object} {x, z}
   */
  latLonToPosition(lat, lon) {
    const centerLat = (this.bounds.north + this.bounds.south) / 2;
    const centerLon = (this.bounds.east + this.bounds.west) / 2;

    const latOffset = lat - centerLat;
    const lonOffset = lon - centerLon;

    const metersPerDegreeLat = 111000;
    const metersPerDegreeLon = 111000 * Math.cos(centerLat * Math.PI / 180);

    const x = lonOffset * metersPerDegreeLon;
    const z = -latOffset * metersPerDegreeLat;

    return { x, z };
  }

  /**
   * Clear all landmarks
   */
  clearLandmarks() {
    while (this.landmarkGroup.children.length > 0) {
      const child = this.landmarkGroup.children[0];
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
      this.landmarkGroup.remove(child);
    }
  }

  /**
   * Get landmark count
   * @returns {number}
   */
  getLandmarkCount() {
    return this.landmarkGroup.children.length;
  }

  /**
   * Dispose resources
   */
  dispose() {
    this.clearLandmarks();
    this.modelCache.clear();
    this.scene.remove(this.landmarkGroup);
  }
}
