import React, { useState, useEffect } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';
import { useStore, useDispatch } from 'react-redux';
import { changeCameraPosition } from '../../redux/actions';
import { LOCATIONS } from '../../common/constants';

export function Table() {
  const [opacity, setOpacity] = useState(1);
  const {camera} = useStore().getState();
  const dispatch = useDispatch();

  const handleClick = () => {
    if(camera.location !== 'table') {
      const o = { location: 'table', ...LOCATIONS.table };
      
      dispatch(changeCameraPosition(o))
    }

    // this.state.currentLocationPosition !== LOCATIONS[0].where ? 
    // _ => this.changeCameraView(LOCATIONS[0].name, LOCATIONS[0].where) : null
  }

  const handleHover = (isHovering) => {
    // if(camera.location === 'table') {
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
        source={require('../../obj/table/Table.obj')}
        resources={[require('../../obj/table/Table.mtl')]}
        position={[0, -8, 0]}
        scale={[1, 1, 1]} 
        rotation={[0, 0, 0]}
        materials={['table']}
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
})