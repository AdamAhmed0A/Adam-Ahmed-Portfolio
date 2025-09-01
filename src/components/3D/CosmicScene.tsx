import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingOrb({ position, color, size = 1 }: { position: [number, number, number]; color: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} position={position} args={[size, 32, 32]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      points.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  const particlesPosition = new Float32Array(2000 * 3);
  
  for (let i = 0; i < 2000; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ffff"
        size={0.02}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function CosmicScene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#00ffff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
        
        <Stars
          radius={300}
          depth={60}
          count={1000}
          factor={7}
          saturation={0}
          fade
          speed={0.5}
        />
        
        <ParticleField />
        
        <FloatingOrb position={[-8, 4, -5]} color="#00ffff" size={0.8} />
        <FloatingOrb position={[6, -3, -3]} color="#ff00ff" size={1.2} />
        <FloatingOrb position={[-4, -6, -8]} color="#00ff88" size={0.6} />
        <FloatingOrb position={[8, 2, -6]} color="#ff0088" size={1} />
        <FloatingOrb position={[2, 8, -4]} color="#8800ff" size={0.9} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}