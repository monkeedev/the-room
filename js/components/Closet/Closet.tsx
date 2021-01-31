import React, { useState } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';
import { LOCATIONS } from '../../common/constants';
import { useObjectInteractions } from '../../hooks/useObjectInteractions';

export function Closet() {
  const {opacity, hoverObject, moveToObject} = useObjectInteractions(LOCATIONS.closet);

  return (
    <ViroNode 
      onClick={moveToObject}
      onHover={hoverObject}
      opacity={opacity}>
      <Viro3DObject  
        source={require('../../obj/shelf/Closet.obj')}
        resources={[require('../../obj/shelf/Closet.mtl')]}
        position={[0, -8, 0]} 
        scale={[1, 1, 1]}  
        rotation={[0, 0, 0]} 
        materials={['closet']}
        type="OBJ"
      />
      <Viro3DObject  
        source={require('../../obj/shelf/ClosetHandle.obj')}
        resources={[require('../../obj/shelf/ClosetHandle.mtl')]}
        position={[0, -8, 0]} 
        scale={[1, 1, 1]}  
        rotation={[0, 0, 0]}
        type="OBJ"
      />
    </ViroNode>
  )
}

ViroMaterials.createMaterials({
  closet: {
    lightingModel: "Blinn",
    diffuseColor: '#583d36'
  }
})