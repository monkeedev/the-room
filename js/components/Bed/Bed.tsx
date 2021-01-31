import React from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';
import { LOCATIONS } from '../../common/constants';
import { useObjectInteractions } from '../../hooks/useObjectInteractions';

export function Bed() {
  const {opacity, hoverObject, moveToObject} = useObjectInteractions(LOCATIONS.bed);
  
  return (
    <ViroNode 
      onClick={moveToObject}
      onHover={hoverObject}
      opacity={opacity}>
      
      <Viro3DObject 
        source={require('../../obj/bed/Bed.obj')}
        resources={[require('../../obj/bed/Bed.mtl')]}
        position={[0, -8, 0]} 
        scale={[1, 1, 1]} 
        rotation={[0, 0, 0]}
        materials={['table']}
        type="OBJ"
      />
      <Viro3DObject 
        source={require('../../obj/bed/Matress.obj')}
        resources={[require('../../obj/bed/Matress.mtl')]}
        position={[0, -8, 0]}
        scale={[1, 1, 1]} 
        rotation={[0, 0, 0]}
        type="OBJ"
      />
      <Viro3DObject 
        source={require('../../obj/bed/Covering.obj')}
        resources={[require('../../obj/bed/Covering.mtl')]}
        position={[0, -8, 0]}
        scale={[1, 1, 1]} 
        rotation={[0, 0, 0]}
        materials={['pillow']}
        type="OBJ"
      />
      <Viro3DObject 
        source={require('../../obj/bed/Pillow.obj')}
        resources={[require('../../obj/bed/Pillow.mtl')]}
        position={[0, -8, 0]}
        scale={[1, 1, 1]} 
        rotation={[0, 0, 0]}
        materials={['pillow']}
        type="OBJ"
      />
    </ViroNode>
  )
}

ViroMaterials.createMaterials({
  table: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../obj/table/textures/table.jpg'),
    specularTexture: require('../../obj/table/textures/table.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
  pillow: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../res/pillow.jpg'),
    specularTexture: require('../../res/pillow.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
})