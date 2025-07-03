'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <FloatingGeometry />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1vTFHWPPA0q8_TTczDZqw46QfsTb-u_zD/view?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                {/* Replace this with your actual profile image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Choun Chan Nirak
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Full-Stack Developer & Software Engineer passionate about creating 
            innovative solutions and beautiful user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform cursor-pointer"
            >
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors cursor-pointer"
            >
              Download Resume
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
