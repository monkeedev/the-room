import React from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';
import { LOCATIONS } from '../../common/constants';
import { useObjectInteractions } from '../../hooks/useObjectInteractions';

export function Table() {
  const {opacity, hoverObject, moveToObject} = useObjectInteractions(LOCATIONS.table);

  return (
    <ViroNode 
      onClick={moveToObject}
      onHover={hoverObject}
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