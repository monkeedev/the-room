import React, { useState } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';

export function Bed() {
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