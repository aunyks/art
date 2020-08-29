import DefaultHead from 'components/DefaultHead'
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

const Orb = () => {
  const mesh = useRef()
  const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader
  const gltf = useLoader(GLTFLoader, "/assets/models/orb-baked.glb")
  useFrame(() => {
    mesh.current.rotation.x += 0.005
    mesh.current.rotation.z += 0.01
  })
  return (
    <primitive ref={mesh} object={gltf.scene} />
  )
}

export default () => {
  return (
    <>
      <DefaultHead
        title="Orb"
        description="Don't look for long. The trance is dizzying."
      />
      <div className="w-screen h-screen" style={{ overflow: 'hidden', color: 'white' }}>
        <p style={{ position: 'absolute', zIndex: '1', top: '40px', left: '40px', width: '50%' }}>
          Orb
        <br />
        Don't look for long. The trance is dizzying.
      </p>
        <a href="https://art.aunyks.com" style={{ color: 'white', position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
        <Canvas camera={{ position: [0, -4, 0], fov: 50 }}
          onCreated={({ camera, gl, scene }) => {
            camera.lookAt(new THREE.Vector3(0, 0, 0))
            if (window.matchMedia('(max-width: 640px)').matches) {
              camera.position.set(0, -6, 0)
            }
            scene.background = new THREE.Color(0x000000)
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}>
          <ambientLight intensity={2} />
          <pointLight args={[0xffffff, 1]} position={[5, 10, -10]} />
          <pointLight args={[0xffffff, 1]} position={[-3, -7, 5]} />
          <Suspense fallback={<ModelLoading />}>
            <Orb />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}