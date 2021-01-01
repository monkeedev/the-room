import React from 'react'
import { Viro3DObject, ViroMaterials } from 'react-viro';

export function Floor() {
  return (
    <Viro3DObject 
      source={require('../../obj/room/Floor.obj')}
      resources={[require('../../obj/room/Floor.mtl'),
                  require('../../obj/room/textures/floor.jpg')
                ]}
      position={[0, -8, 0]}
      materials={['floor']} 
      scale={[1, 1, 1]} 
      rotation={[0, 0, 0]}
      type="OBJ"
    />
  )
}

ViroMaterials.createMaterials({
  floor: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../obj/room/textures/floor.jpg'),
    specularTexture: require('../../obj/room/textures/floor.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
})