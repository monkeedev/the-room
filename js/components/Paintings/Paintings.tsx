import React, { useState } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';

export function Paintings() {
  const [opacity, setOpacity] = useState(1);
  const [wasCorrected, setCorrection] = useState(false);

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
        <ViroNode>
          <ViroNode 
            onClick={handleClick}
            onHover={handleHover}
            opacity={ opacity } 
            position={wasCorrected ? [0, 0, 0] : [0, .5, 0] } 
            rotation={wasCorrected ? [0, 0, 0] : [10, 0, 0]}
          >
            <Viro3DObject
              source={require('../../obj/frames/FrameVert.obj')}
              resources={[require('../../obj/frames/Frame.mtl')]}
              position={[-8.5, -.6, 6]} 
              scale={[2, 2, 2]}
              rotation={[0, 90, 0]} 
              type="OBJ"
              materials={['closet']}
            /> 
          </ViroNode>
          <Viro3DObject  
            source={require('../../obj/frames/Frame.obj')}
            resources={[require('../../obj/frames/Frame.mtl')]}
            position={[-8.5, 0.4, 1]}
            scale={[1.6, 1.6, 1.6]}
            rotation={[0, 90, 0]}
            type="OBJ"
            materials={['closet']}
          />
          <Viro3DObject  
            source={require('../../obj/frames/FrameRect.obj')}
            resources={[require('../../obj/frames/Frame.mtl')]}
            position={[-8.5, -2.5, -.2]}
            scale={[.8, .8, .8]} 
            rotation={[0, 0, 0]}
            type="OBJ"
            materials={['closet']}
          />
          <Viro3DObject
            source={require('../../obj/frames/FrameRect.obj')}
            resources={[require('../../obj/frames/Frame.mtl')]}
            position={[-8.5, -2.5, 2.2]}
            scale={[.8, .8, .8]}
            rotation={[0, 0, 0]}
            type="OBJ"
            materials={['closet']}
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