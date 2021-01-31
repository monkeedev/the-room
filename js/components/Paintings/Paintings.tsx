import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';
import { LOCATIONS } from '../../common/constants';
import { useObjectInteractions } from '../../hooks/useObjectInteractions';

const SMALL_PAINTINGS_SCALE = [.8, .8, .8]
const SMALL_PAINTINGS_ROTATION = [0, 0, 0]

export function Paintings() {
  const { camera } = useStore().getState();
  const {opacity, hoverObject, moveToObject} = useObjectInteractions(LOCATIONS.paintings);
  const [wasCorrected, setCorrection] = useState(false);

  const handleClick = () => {
    if(camera.location === LOCATIONS.paintings.name) {
      setCorrection(true)
    }
  }

  return (
        <ViroNode
          onClick={moveToObject}
          onHover={hoverObject}
          opacity={opacity}
        >
          <ViroNode 
            onClick={handleClick}
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
            scale={SMALL_PAINTINGS_SCALE} 
            rotation={SMALL_PAINTINGS_ROTATION}
            type="OBJ"
            materials={['closet']}
          />
          <Viro3DObject
            source={require('../../obj/frames/FrameRect.obj')}
            resources={[require('../../obj/frames/Frame.mtl')]}
            position={[-8.5, -2.5, 2.2]}
            scale={SMALL_PAINTINGS_SCALE}
            rotation={SMALL_PAINTINGS_ROTATION}
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