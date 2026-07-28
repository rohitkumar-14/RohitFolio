"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Text } from "@react-three/drei";
import * as THREE from "three";

// Predefined set of code and frontend symbols to display
const CODE_TAGS = [
  { text: "<div />", size: 0.5, speed: 0.15, depth: -3 },
  { text: "const [data, setData] = useState()", size: 0.28, speed: 0.1, depth: -4 },
  { text: "useEffect(() => { ... })", size: 0.3, speed: 0.08, depth: -5 },
  { text: "import { motion } from 'framer-motion'", size: 0.25, speed: 0.12, depth: -3.5 },
  { text: "npm run dev", size: 0.4, speed: 0.2, depth: -2 },
  { text: "git push origin main", size: 0.35, speed: 0.15, depth: -4.5 },
  { text: "export default function Hero()", size: 0.32, speed: 0.07, depth: -5 },
  { text: "className=\"grid grid-cols-12\"", size: 0.24, speed: 0.14, depth: -3 },
  { text: "<h3>Hello World</h3>", size: 0.35, speed: 0.18, depth: -2.5 },
  { text: "{...props}", size: 0.45, speed: 0.13, depth: -4 },
  { text: "=>", size: 0.6, speed: 0.22, depth: -2 },
  { text: "next/image", size: 0.3, speed: 0.11, depth: -4.5 },
  { text: "interface Props { ... }", size: 0.26, speed: 0.09, depth: -5.5 },
  { text: "console.log('Operational')", size: 0.28, speed: 0.16, depth: -3.8 },
  { text: "document.documentElement", size: 0.26, speed: 0.1, depth: -4.2 },
  { text: "<Canvas camera={{ fov: 45 }}>", size: 0.28, speed: 0.09, depth: -4.8 }
];

// Layout components representing wireframes (mocking a page structure)
const WIREFRAME_LAYOUTS = [
  { name: "<header>", size: [3.5, 0.6, 0.4] as [number, number, number], pos: [-3, 2, -4] as [number, number, number], rotSpeed: 0.05 },
  { name: "<sidebar>", size: [0.8, 3.0, 0.4] as [number, number, number], pos: [-4, -0.5, -4.5] as [number, number, number], rotSpeed: 0.03 },
  { name: "<main>", size: [3.2, 2.2, 0.4] as [number, number, number], pos: [2.5, -0.8, -5] as [number, number, number], rotSpeed: -0.04 },
  { name: "<footer>", size: [4.0, 0.5, 0.4] as [number, number, number], pos: [0.5, -2.6, -3.5] as [number, number, number], rotSpeed: 0.06 }
];

function FloatingCodeTag({ text, size, speed, depth, index, color }: { text: string; size: number; speed: number; depth: number; index: number; color: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Distribute the elements horizontally and vertically across the canvas
  const [posX, posY, offsetPhase] = useMemo(() => {
    const cols = 4;
    const colIdx = index % cols;
    const rowIdx = Math.floor(index / cols);
    
    const x = -5.5 + colIdx * 3.6 + (Math.random() - 0.5) * 1.2;
    const y = 3.2 - rowIdx * 1.8 + (Math.random() - 0.5) * 0.8;
    const phase = Math.random() * Math.PI * 2;
    
    return [x, y, phase];
  }, [index]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const elapsed = clock.getElapsedTime();
    // Floating movement
    meshRef.current.position.y = posY + Math.sin(elapsed * speed * 2 + offsetPhase) * 0.3;
    meshRef.current.position.x = posX + Math.cos(elapsed * speed + offsetPhase) * 0.25;
    // Slow rotational drift
    meshRef.current.rotation.z = Math.sin(elapsed * 0.1 + offsetPhase) * 0.08;
    meshRef.current.rotation.y = Math.cos(elapsed * 0.05 + offsetPhase) * 0.15;
  });

  return (
    <group ref={meshRef} position={[posX, posY, depth]}>
      <Text
        font="https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff"
        fontSize={size}
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={8}
        lineHeight={1}
        textAlign="center"
        fillOpacity={0.4}
      >
        {text}
      </Text>
    </group>
  );
}

function FloatingWireframeBox({ name, size, pos, rotSpeed, color }: { name: string; size: [number, number, number]; pos: [number, number, number]; rotSpeed: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const elapsed = clock.getElapsedTime();
    
    // Slow rotation
    meshRef.current.rotation.x = elapsed * rotSpeed * 0.5;
    meshRef.current.rotation.y = elapsed * rotSpeed;
    meshRef.current.rotation.z = elapsed * rotSpeed * 0.2;
    
    // Tiny floating movement
    meshRef.current.position.y = pos[1] + Math.sin(elapsed * 0.5 + phase) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={pos}>
      <boxGeometry args={size} />
      <meshBasicMaterial wireframe color={color} transparent opacity={0.12} />
      <Text
        font="https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff"
        fontSize={0.2}
        color={color}
        position={[0, 0, size[2] / 2 + 0.05]}
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.6}
      >
        {name}
      </Text>
    </mesh>
  );
}

function DeveloperGrid({ color }: { color: string }) {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame(({ clock }) => {
    if (!gridRef.current) return;
    const elapsed = clock.getElapsedTime();
    // Subtle scrolling/rotating effect
    gridRef.current.rotation.y = elapsed * 0.015;
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[45, 45, color, "#151515"]}
      position={[0, -3.2, -6]}
      rotation={[0.35, 0, 0]}
    />
  );
}

function AnimatedScene() {
  const [primaryColor, setPrimaryColor] = useState("#CCFF00");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const containerGroupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const updateColors = () => {
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue('--theme-primary').trim() || "#CCFF00";
      const secondary = style.getPropertyValue('--theme-secondary').trim() || "#FFFFFF";
      setPrimaryColor(primary);
      setSecondaryColor(secondary);
    };

    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useFrame((state) => {
    if (!containerGroupRef.current) return;
    const { x, y } = state.mouse;
    
    // Parallax mouse follow effect: lerp rotation and position
    containerGroupRef.current.rotation.y += (x * 0.12 - containerGroupRef.current.rotation.y) * 0.05;
    containerGroupRef.current.rotation.x += (-y * 0.08 - containerGroupRef.current.rotation.x) * 0.05;
    containerGroupRef.current.position.x += (x * 0.4 - containerGroupRef.current.position.x) * 0.05;
    containerGroupRef.current.position.y += (y * 0.2 - containerGroupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={containerGroupRef}>
      {/* Code Text elements */}
      {CODE_TAGS.map((tag, idx) => (
        <FloatingCodeTag
          key={idx}
          index={idx}
          text={tag.text}
          size={tag.size}
          speed={tag.speed}
          depth={tag.depth}
          color={idx % 2 === 0 ? primaryColor : secondaryColor}
        />
      ))}

      {/* Layout wireframe boundaries */}
      {WIREFRAME_LAYOUTS.map((layout, idx) => (
        <FloatingWireframeBox
          key={idx}
          name={layout.name}
          size={layout.size}
          pos={layout.pos}
          rotSpeed={layout.rotSpeed}
          color={idx % 2 === 0 ? primaryColor : secondaryColor}
        />
      ))}

      {/* Grid Floor */}
      <DeveloperGrid color={primaryColor} />
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--color-background)]">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>

      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 3]} intensity={0.8} />
        <AnimatedScene />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
