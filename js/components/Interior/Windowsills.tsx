import React from 'react'
import { Viro3DObject, ViroMaterials } from 'react-viro';

export function Windowsills() {
  return (
    <Viro3DObject 
      source={require('../../obj/room/Windowsills.obj')}
      resources={[require('../../obj/room/Windowsills.mtl')]}
      position={[0, -8, 0]}
      materials={['windowsill']} 
      scale={[1, 1, 1]} 
      rotation={[0, 0, 0]}
      type="OBJ"
    />
  )
}

ViroMaterials.createMaterials({
  windowsill: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../obj/room/textures/whitewood.jpg'),
    specularTexture: require('../../obj/room/textures/whitewood.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
})