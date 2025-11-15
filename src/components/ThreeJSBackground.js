"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, PointLight } from '@react-three/drei';
import * as THREE from 'three';

function Planet() {
  const mesh = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.001;
      if (mesh.current) {
        mesh.current.rotation.y = rotation;
        mesh.current.rotation.x = rotation * 0.5;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Sphere ref={mesh} args={[1, 32, 32]}>
      <meshStandardMaterial color="royalblue" />
    </Sphere>
  );
}

export default function ThreeJSBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.2} />
        <PointLight position={[10, 10, 10]} />
        <Planet />
      </Canvas>
    </div>
  );
}
