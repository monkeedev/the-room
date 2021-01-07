import React from 'react'
import { Viro3DObject, ViroMaterials } from 'react-viro';

export function Walls() {
  return (
    <Viro3DObject 
      source={require('../../obj/room/Walls.obj')}
      resources={[require('../../obj/room/Walls.mtl')]}
      position={[0, -8, 0]}
      materials={['walls']} 
      scale={[1, 1, 1]} 
      rotation={[0, 0, 0]} 
      type="OBJ"
    />
  )
}

ViroMaterials.createMaterials({
  walls: { 
    lightingModel: "Blinn",
    diffuseColor: '#df7861'
  }
})