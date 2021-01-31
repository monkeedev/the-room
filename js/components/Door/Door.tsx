import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { ViroNode, Viro3DObject, ViroMaterials, ViroPolygon } from 'react-viro';
import { LOCATIONS } from '../../common/constants';
import { useObjectInteractions } from '../../hooks/useObjectInteractions';

export function Door() {
  const [isDoorClosed, toggleDoor] = useState(false);
  const {opacity, hoverObject, moveToObject} = useObjectInteractions(LOCATIONS.door);
  const { camera } = useStore().getState();
  
  const handleDoor = () => {
    if(camera.location === LOCATIONS.door.name) {
      toggleDoor(!isDoorClosed)
    }
  }

  return (
    <ViroNode
      opacity={opacity}
      onClick={moveToObject}
      onHover={hoverObject}
    >
      <ViroPolygon
        position={[-8.5, -7.5, 15]}
        scale={[4.75, 9.5, 1]}   
        rotation={[180, -90, 0]}
        vertices={[[0,0], [-1,0], [-1,-1], [0,-1]]}
        materials={['void']}
      />
      <Viro3DObject 
        source={require('../../obj/room/DoorOuter.obj')}          
        resources={[require('../../obj/room/DoorOuter.mtl')]}
        position={[-0.25, -8, 0]}
        scale={[1, 1, 1]} 
        rotation={[0, 0, 0]}
        materials={['windowsill']} 
        type="OBJ"
      />
      <Viro3DObject 
        source={require('../../obj/room/DoorInner.obj')}          
        resources={[require('../../obj/room/DoorInner.mtl')]}
        position={isDoorClosed ? [-8.5, -8, 12.5] : [-8, -8, 12.5]}
        scale={[1, 1, 1]} 
        rotation={isDoorClosed ? [0, 0, 0] : [0, -10, 0]}
        materials={['windowsill']}  
        type="OBJ"
        onClick={handleDoor} 
      />
    </ViroNode>
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
  void: {
    diffuseColor: '#000'
  }
})