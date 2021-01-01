import React, { useState } from 'react';
import { ViroNode, Viro3DObject, ViroMaterials } from 'react-viro';

export function Shelf() {
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
    <ViroNode
      onClick={handleClick}
      onHover={handleHover}
      opacity={opacity}
    >
      <Viro3DObject  
        source={require('../../obj/shelf/Bookshelf.obj')}
        resources={[require('../../obj/shelf/Bookshelf.mtl')]}
        position={[0, -8, 0]} 
        scale={[1, 1, 1]}  
        rotation={[0, 0, 0]} 
        materials={['table']}
        type="OBJ"
      />

      {/* BOOKS */}
        {/* <ViroNode position={[12, -1.75, -.5]} rotation={[0, 90, 0]}>
          <BooksRow books={this.state.books[0]} /> 
        </ViroNode>

        <ViroNode position={[12, -3.5, -.5]}  rotation={[0, 90, 0]}>
          <BooksRow books={this.state.books[1]} />
        </ViroNode> 


        <ViroNode position={[12, -5, -.5]}  rotation={[0, 90, 0]}>
          <BooksRow books={this.state.books[2]} />
        </ViroNode>
      </ViroNode> */}
    </ViroNode>
  )
}

// TODO: refactor to functional component
// class BooksRow extends Component {
//   state = {
//     books: this.props.books,
//     shouldUpdate: false,
//   } 

//   shouldComponentUpdate() {
//     return this.state.shouldUpdate;
//   }

//   // render books row from state 
//   createBooksRow(array) {
//     let source = null,
//         resource = null,
//         img = null,
//         sizeCounter = 0;
      
//     return new Array(array.count).fill(0).map((i, k) => {
//       sizeCounter += .35;

//       switch(array.colors[k]) {
//         case 1:
//           source = require('./obj/book/Book1.obj');
//           resource = require(`./obj/book/Book1.mtl`);
//           img = require('./obj/book/texture/1.jpg');
//           break;
//         case 2:
//           source = require('./obj/book/Book2.obj');
//           resource = require(`./obj/book/Book2.mtl`);
//           img = require('./obj/book/texture/2.jpg');
//           break;
//         case 3:
//           source = require('./obj/book/Book3.obj');
//           resource = require(`./obj/book/Book3.mtl`);
//           img = require('./obj/book/texture/3.jpg');
//           break;
//         case 4:
//           source = require('./obj/book/Book4.obj');
//           resource = require(`./obj/book/Book4.mtl`);
//           img = require('./obj/book/texture/4.jpg');
//           break;
//         case 5:
//           source = require('./obj/book/Book5.obj');
//           resource = require(`./obj/book/Book5.mtl`);
//           img = require('./obj/book/texture/5.jpg');
//           break;
//       }

//       if(source == null) return;
//       else {
//         return(
//           <Viro3DObject 
//             key={Math.random()}
//             source={source}
//             resources={[resource, img]}
//             position={[sizeCounter, 0, -5]} 
//             scale={[1, 1 - array.heights[k], 1 - array.sizes[k]]} 
//             rotation={[0, 90, 0]} 
//             type="OBJ"
//           /> 
//         )
//       }
//     })
//   }
  
//   render() {
//     return(
//       <ViroNode>
//         {this.createBooksRow(this.state.books)}
//       </ViroNode>
//     )
//   }
// }

ViroMaterials.createMaterials({
  table: {
    lightingModel: "Blinn",
    diffuseTexture: require('../../obj/table/textures/table.jpg'),
    specularTexture: require('../../obj/table/textures/table.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
})