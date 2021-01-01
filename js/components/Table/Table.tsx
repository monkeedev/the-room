import React, { useState } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';

export function Table() {
  const [opacity, setOpacity] = useState(1);

  const handleTableClick = () => {
    console.log('@handler');
    // this.state.currentLocationPosition !== LOCATIONS[0].where ? 
    // _ => this.changeCameraView(LOCATIONS[0].name, LOCATIONS[0].where) : null
  }

  const handleTableHover = () => {
    console.log('@handler');
    // this.state.currentLocationPosition !== LOCATIONS[0].where ? 
    // isHovering => this._onHover(isHovering, LOCATIONS[0].name) : _ => this.setState({ tableOpacity: 1 }) 
  }

  return (
    <ViroNode 
      onClick={handleTableClick}
      onHover={handleTableHover}
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