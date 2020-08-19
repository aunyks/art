import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, extend, useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const ModelLoading = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

const Card = () => {
  const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader
  const gltf = useLoader(GLTFLoader, "/assets/models/true-potential-card-v1.glb")
  return (
    <primitive object={gltf.scene} rotation={[0, Math.PI / 2, 0]} />
  )
}

export default () => {
  return (
    <div className="w-screen h-screen">
      <style jsx>{`
        html, body {
          color: black;
          background: #fab700;
        }
      `}</style>
      <p style={{ position: 'absolute', zIndex: '1', top: '40px', left: '40px', width: '50%' }}>True Potential Card v1</p>
      <a href="https://art.aunyks.com" style={{ position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
      <Canvas camera={{ position: [0, -2, 0], fov: 50 }}
        onCreated={({ camera, gl, scene }) => {
          camera.lookAt(new THREE.Vector3(0, 0, 0))
          if (window.matchMedia('(max-width: 640px)').matches) {
            camera.position.set(0, -4, 0)
          }
          scene.background = new THREE.Color(0xfab700)
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
          const OrbitControls = require('three/examples/jsm/controls/OrbitControls').OrbitControls
          const controls = new OrbitControls(camera, gl.domElement)
          controls.update()
        }}>
        <ambientLight />
        <pointLight args={[0xffffff, 0.5]} position={[5, 10, -10]} />
        <pointLight position={[1, -10, 5]} />
        <Suspense fallback={<ModelLoading />}>
          <Card />
        </Suspense>
      </Canvas>
    </div>
  )
}