import React from 'react'
import { Viro3DObject } from 'react-viro';

export function Carpet() {
  return (
    <Viro3DObject 
      source={require('../../obj/room/Carpet.obj')}
      position={[0, -8, 0]}
      scale={[1, 1, 1]} 
      rotation={[0, 0, 0]}
      type="OBJ"
    />
  )
}