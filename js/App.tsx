'use strict'

import React from 'react'
import { ViroScene, Viro360Image, ViroAmbientLight, ViroDirectionalLight, ViroCamera, ViroNode } from 'react-viro'
import { Room } from './components/Room/Room';
import { Door } from './components/Door/Door';
import { Table } from './components/Table/Table';
import { Bed } from './components/Bed/Bed';
import { Closet } from './components/Closet/Closet';
import { Paintings } from './components/Paintings/Paintings';
import { Shelf } from './components/Bookshelf/Shelf';

export default function App() {
  return (
    <ViroScene>
      <Viro360Image isHdr={true} source={require("./res/background.hdr") } /> 
      <ViroAmbientLight color="#ffffff" intensity={250}/>
      <ViroDirectionalLight color="#ffffff" direction={[-0.5, -1,  -0.5]}/>
      {/* <ViroCamera position={[-5, 0, 11]} rotation={[0, 90, 0]} active={true}/> */}
      
      {/* Room */}
      <Room/>
      <Door />
      
      {/* Table */}
      <Table />

      {/* Bed */}
      <Bed />

      {/* Closet */}
      <Closet />

      {/* Paintings */}
      <Paintings />

      {/* Shelf */}
      <Shelf />
    </ViroScene>
  )
}

module.exports = App;