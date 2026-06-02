'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = t * 0.09
    meshRef.current.rotation.y = t * 0.16
    meshRef.current.rotation.z = t * 0.04
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.15, 0.4, 300, 64, 2, 3]} />
      <meshPhysicalMaterial
        color="#c4956a"
        metalness={0.95}
        roughness={0.08}
        reflectivity={1}
        clearcoat={0.4}
        clearcoatRoughness={0.1}
      />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 44 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      className="w-full h-full bg-transparent"
    >
      <ambientLight intensity={0.25} color="#f5f0eb" />
      <directionalLight position={[4, 8, 6]} intensity={3.5} color="#fff8f2" />
      <pointLight position={[-5, -4, 3]} intensity={2.5} color="#c4956a" />
      <pointLight position={[3, -6, -4]} intensity={1.2} color="#f0ebe4" />
      <TorusKnot />
    </Canvas>
  )
}
