import React, { useState } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';

export function Closet() {
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    console.log('@handler');
    // this.changeCameraView(LOCATIONS[1].name, LOCATIONS[1].where
  }

  const handleHover = () => {
    console.log('@handler');
    // this.state.currentLocationPosition !== LOCATIONS[0].where ? 
    // isHovering => this._onHover(isHovering, LOCATIONS[0].name) : _ => this.setState({ tableOpacity: 1 }) 
    // isHovering => this._onHover(isHovering, LOCATIONS[1].name)
  }

  return (
    <ViroNode 
      onClick={handleClick}
      onHover={handleHover}
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