'use strict'

import React, { useEffect } from 'react'
import { 
  ViroScene, 
  Viro360Image, 
  ViroAmbientLight, 
  ViroDirectionalLight, 
  ViroCamera
} from 'react-viro'
import { Interior } from './components/Interior/Interior';
import { Door } from './components/Door/Door';
import { Table } from './components/Table/Table';
import { Bed } from './components/Bed/Bed';
import { Closet } from './components/Closet/Closet';
import { Paintings } from './components/Paintings/Paintings';
import { Shelf } from './components/Bookshelf/Shelf';
import { useStore, connect } from 'react-redux';

const cameraProps = state => ({ ...state, camera: state.camera })

export default function Room() {
  const store = useStore();

  const Camera = connect(cameraProps)(() => {
    const { position, rotation } = store.getState().camera;

    useEffect(() => {
      console.log('@camera', store.getState().camera )
     });
     
    return (
      <ViroCamera position={position} rotation={rotation} active={true} />
    )
  });

  return (
      <ViroScene>
        <Viro360Image isHdr={true} source={require("./res/background.hdr") } /> 
        <ViroAmbientLight color="#ffffff" intensity={250}/>
        <ViroDirectionalLight color="#ffffff" direction={[-0.5, -1,  -0.5]}/>
        
        {/* Camera */}
        <Camera />
        
        {/* Room */}
        <Interior/>
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

module.exports = Room;