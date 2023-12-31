/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/TV/Television_01_1k.gltf -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/TV/Television_01_1k.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Television_01.geometry} material={materials.Television_01} />
    </group>
  )
}

useGLTF.preload('/TV/Television_01_1k.gltf')
