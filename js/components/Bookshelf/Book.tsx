import React, { useState } from 'react';
import { Viro3DObject, ViroMaterials } from 'react-viro';

export function Shelf(source, resource, img, sizeCounter, array) {
  return (
    <Viro3DObject 
      key={Math.random()}
      source={source}
      resources={[resource, img]}
      position={[sizeCounter, 0, -5]} 
      scale={[1, 1 - array.heights[k], 1 - array.sizes[k]]} 
      rotation={[0, 90, 0]} 
      type="OBJ"
    /> 
  )
}