import { useEffect, useRef } from "react";
import * as THREE from "three";

const lineWidths = [0.78, 0.46, 0.96, 0.58, 0.68, 1.12, 0.52, 0.88, 0.64];

const HeroThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
    camera.position.set(0, 0.4, 7.6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xd7fff6, 0.8);
    const key = new THREE.DirectionalLight(0xffffff, 2.3);
    key.position.set(4, 5, 6);
    const rim = new THREE.PointLight(0xffb84d, 9, 12);
    rim.position.set(-3.5, -1.2, 3.5);
    scene.add(ambient, key, rim);

    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x35d0ba,
      transparent: true,
      opacity: 0.13,
    });
    const gridPoints = [];
    for (let i = -7; i <= 7; i += 1) {
      gridPoints.push(new THREE.Vector3(i, -3.1, -2.8), new THREE.Vector3(i, 3.1, -2.8));
      gridPoints.push(new THREE.Vector3(-7, i * 0.45, -2.8), new THREE.Vector3(7, i * 0.45, -2.8));
    }
    const grid = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(gridPoints), gridMaterial);
    grid.rotation.x = -0.18;
    scene.add(grid);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x35d0ba,
      emissive: 0x0c6b61,
      emissiveIntensity: 0.45,
      metalness: 0.35,
      roughness: 0.35,
      transparent: true,
      opacity: 0.68,
    });
    const amberRingMaterial = ringMaterial.clone();
    amberRingMaterial.color.set(0xffb84d);
    amberRingMaterial.emissive.set(0x6f3c00);

    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.012, 12, 160), ringMaterial);
    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.01, 12, 160), amberRingMaterial);
    ringOne.rotation.set(0.58, 0.2, -0.15);
    ringTwo.rotation.set(-0.72, 0.42, 0.12);
    root.add(ringOne, ringTwo);

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.78, 3.28, 0.18, 2, 2, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0x101820,
        metalness: 0.58,
        roughness: 0.24,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
      })
    );
    body.rotation.z = -0.03;
    root.add(body);

    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(1.56, 2.92, 0.04),
      new THREE.MeshStandardMaterial({
        color: 0x081116,
        emissive: 0x062822,
        emissiveIntensity: 0.38,
        roughness: 0.42,
      })
    );
    screen.position.z = 0.13;
    body.add(screen);

    const codeGroup = new THREE.Group();
    const teal = new THREE.MeshStandardMaterial({
      color: 0x35d0ba,
      emissive: 0x0b514b,
      emissiveIntensity: 0.8,
      roughness: 0.45,
    });
    const amber = new THREE.MeshStandardMaterial({
      color: 0xffb84d,
      emissive: 0x5d3200,
      emissiveIntensity: 0.72,
      roughness: 0.45,
    });
    const violet = new THREE.MeshStandardMaterial({
      color: 0x9d7cff,
      emissive: 0x261958,
      emissiveIntensity: 0.65,
      roughness: 0.45,
    });
    lineWidths.forEach((width, index) => {
      const material = index % 4 === 0 ? amber : index % 5 === 0 ? violet : teal;
      const line = new THREE.Mesh(new THREE.BoxGeometry(width, 0.045, 0.018), material);
      line.position.set(-0.42 + width / 2, 1.02 - index * 0.26, 0.17);
      codeGroup.add(line);
    });
    const chip = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.035), violet);
    chip.position.set(0.46, -1.05, 0.18);
    codeGroup.add(chip);
    body.add(codeGroup);

    const panels = new THREE.Group();
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d1b22,
      emissive: 0x071d24,
      emissiveIntensity: 0.5,
      metalness: 0.3,
      roughness: 0.36,
      transparent: true,
      opacity: 0.86,
    });
    [
      [-2.15, 0.9, 0.7, 0.8, 0.05],
      [2.2, 0.48, 0.84, 0.62, -0.07],
      [-2.05, -1.05, 0.78, 0.56, -0.03],
      [2.08, -1.18, 0.62, 0.72, 0.08],
    ].forEach(([x, y, width, height, rotate]) => {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.055), panelMaterial);
      panel.position.set(x, y, -0.12);
      panel.rotation.z = rotate;
      panels.add(panel);
    });
    root.add(panels);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 130;
    const positions = new Float32Array(particleCount * 3);
    const particleBaseX = new Float32Array(particleCount);
    const particleBaseZ = new Float32Array(particleCount);
    const particleDrift = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);
    for (let index = 0; index < particleCount; index += 1) {
      const angle = index * 2.399;
      const radius = 1.9 + (index % 9) * 0.28;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = Math.sin(angle * 0.7) * 2.25;
      positions[index * 3 + 2] = -1.8 + (index % 17) * 0.18;
      particleBaseX[index] = positions[index * 3];
      particleBaseZ[index] = positions[index * 3 + 2];
      particleDrift[index] = 0.04 + (index % 6) * 0.012;
      particleSpeeds[index] = 0.0026 + (index % 7) * 0.00058;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlePosition = particleGeometry.getAttribute("position");
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xf7fafc,
        size: 0.018,
        transparent: true,
        opacity: 0.58,
        sizeAttenuation: true,
      })
    );
    root.add(particles);

    const pointer = { x: 0, y: 0 };
    const scroll = { progress: 0 };
    const layout = {
      rootX: 0,
      rootY: 0,
      cameraZ: 7.3,
      gridX: 0,
    };

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove);

    const handleScroll = () => {
      const hero = mount.parentElement;
      const rect = hero ? hero.getBoundingClientRect() : mount.getBoundingClientRect();
      const height = Math.max(rect.height || window.innerHeight, 1);
      scroll.progress = Math.min(1, Math.max(0, -rect.top / height));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    let animationFrame;
    let previousElapsed = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      const width = Math.max(clientWidth, 1);
      const height = Math.max(clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const narrow = width < 760;
      layout.rootX = narrow ? 0 : 1.72;
      layout.rootY = narrow ? -0.72 : -0.08;
      layout.cameraZ = narrow ? 8.4 : 7.3;
      layout.gridX = narrow ? 0 : 1.05;
      root.position.set(layout.rootX, layout.rootY, 0);
      root.scale.setScalar(narrow ? 0.78 : 1);
      camera.position.z = layout.cameraZ;
      grid.position.x = layout.gridX;
      handleScroll();
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const delta = Math.min(elapsed - previousElapsed, 0.05);
      previousElapsed = elapsed;
      if (!reduceMotion) {
        const scrollDepth = scroll.progress;
        root.position.y += ((layout.rootY - scrollDepth * 0.72) - root.position.y) * 0.04;
        root.position.z += ((scrollDepth * 0.42) - root.position.z) * 0.04;
        camera.position.z += ((layout.cameraZ - scrollDepth * 0.42) - camera.position.z) * 0.035;
        grid.position.y += ((scrollDepth * 0.55) - grid.position.y) * 0.025;
        grid.position.x += ((layout.gridX - pointer.x * 0.18) - grid.position.x) * 0.025;
        root.rotation.y += ((pointer.x * 0.18 + Math.sin(elapsed * 0.18) * 0.1) - root.rotation.y) * 0.035;
        root.rotation.x += ((-pointer.y * 0.08 + Math.sin(elapsed * 0.24) * 0.04) - root.rotation.x) * 0.035;
        ringOne.rotation.z += 0.0035;
        ringTwo.rotation.z -= 0.0042;
        particles.rotation.y += 0.0017;
        for (let index = 0; index < particleCount; index += 1) {
          const xIndex = index * 3;
          const yIndex = xIndex + 1;
          const zIndex = xIndex + 2;
          const pull = 0.14 + (index % 5) * 0.018;
          positions[xIndex] =
            particleBaseX[index] +
            Math.sin(elapsed * 0.65 + index) * particleDrift[index] +
            pointer.x * pull;
          positions[yIndex] -= particleSpeeds[index] * delta * 60 * (1 + scrollDepth * 0.65);
          positions[zIndex] =
            particleBaseZ[index] +
            Math.cos(elapsed * 0.52 + index * 0.4) * 0.035 -
            scrollDepth * 0.24;

          if (positions[yIndex] < -2.75) {
            positions[yIndex] = 2.75 + (index % 10) * 0.08;
          }
        }
        particlePosition.needsUpdate = true;
        panels.children.forEach((panel, index) => {
          panel.position.z = -0.12 + Math.sin(elapsed * 1.2 + index) * 0.025;
        });
      }
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-hero-canvas" aria-hidden="true" />;
};

export default HeroThreeScene;
