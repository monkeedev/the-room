import React from 'react'

import { ViroNode } from 'react-viro';
import { Walls } from './Walls';
import { Floor } from './Floor';
import { Windowsills } from './Windowsills';
// import { Carpet } from './Carpet';
import { Ceiling } from './Ceiling';

export const Room = () => {
  return (
    <ViroNode>
      <Ceiling />
      <Walls />
      <Windowsills />
      <Floor />
    </ViroNode> 
  )
}