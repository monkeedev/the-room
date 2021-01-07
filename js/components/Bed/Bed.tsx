import React, { useState, useEffect } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';
import { useStore, useDispatch } from 'react-redux';
import { changeCameraPosition } from '../../redux/actions';
import { LOCATIONS } from '../../common/constants';

export function Bed() {
  const [opacity, setOpacity] = useState(1);
  const {camera} = useStore().getState();
  const dispatch = useDispatch();

  const handleClick = () => {
    if(camera.location !== 'bed') {
      const o = { location: 'bed', ...LOCATIONS.bed };
      
      dispatch(changeCameraPosition(o))
    }
    
    // this.state.currentLocationPosition !== LOCATIONS[0].where ? 
    // _ => this.changeCameraView(LOCATIONS[0].name, LOCATIONS[0].where) : null
  }

  const handleHover = (isHovering) => {
    // if(camera.location === 'bed') {
    //   return null;
    // } else {
      setOpacity(isHovering ? 0.8 : 1);
    // }
  }

  return (
    <ViroNode 
      onClick={handleClick}
      onHover={handleHover}
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