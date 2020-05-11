'use strict';

import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import {
  ViroScene,
  ViroDirectionalLight,
  ViroAmbientLight,
  ViroCamera,
  Viro360Image,
  ViroNode,
  Viro3DObject,
  ViroMaterials,
  ViroButton,
  ViroText
} from 'react-viro';

const LOCATIONS = [
  {
    name: 'table',
    where: [3, 0, -7]
  },
  {
    name: 'bed',
    where: [0, 0, -7]
  }, 
  {
    name: 'wall',
    where: [-5, 0, 3.5] 
  },
  {
    name: 'closet',     
    where: [4.5, 0, 9]
  },
  {
    name: 'bookshelf',     
    where: [4, 0, -3] 
  },
  {
    name: 'door',     
    where: [-5, 0, 11] 
  }
];

export default class Game extends Component {
  constructor() {
    super();
    
    this.state = {
      currentLocationPosition: [3, 0, 0],
      currentLocationName: undefined,
      books: [this.generateBooks(14), this.generateBooks(14), this.generateBooks(14)],
      // TODO: refactor
      tableOpacity: 1,
      bedOpacity: 1,
      closetOpacity: 1,
      pictureOpacity: 1,
      sortPriority: undefined,
      isDoorOpen: true,
      isPictureCorrected: false
    }


    this.changeCameraView = this.changeCameraView.bind(this);
    this.generateBooks = this.generateBooks.bind(this);
    this.sortBooks = this.sortBooks.bind(this);
    this.closeDoor = this.closeDoor.bind(this);
    this.correctPictureAngle = this.correctPictureAngle.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
 }

  // objects visibility
  setLight() {
    return(
      <ViroNode>
        <ViroAmbientLight color="#ffffff" intensity={250}/>
        <ViroDirectionalLight color="#ffffff" direction={[-0.5, -1,  -0.5]}/>
      </ViroNode>
    )
  }

  // user movement
  changeCameraView(name, position) {
    this.setState({
      currentLocationName: name,
      currentLocationPosition: position
    });
  }

  // TODO: refactor
  _onHover(isHovering, location) {
    if(isHovering) {
      switch(location) {
        case 'table': 
          this.setState({ tableOpacity: .8 })
          break;  
        case 'bed':
          this.setState({ bedOpacity: .8 })
          break; 
        case 'closet':
          this.setState({ closetOpacity: .8 })
          break; 
        case 'bookshelf':
          this.setState({ bookshelfOpacity: .8 }) 
          break;  
        case 'wall':
          this.setState({ pictureOpacity: .8 }) 
          break;  
      }
    } else {
      switch(location) {
        case 'table':
          this.setState({ tableOpacity: 1 })
          break;
        case 'bed':
          this.setState({ bedOpacity: 1 })
          break; 
        case 'closet':
          this.setState({ closetOpacity: 1 })
          break; 
        case 'bookshelf':
          this.setState({ bookshelfOpacity: 1 })
          break; 
        case 'wall':
          this.setState({ pictureOpacity: 1 }) 
          break;  
      }
    }
  }

  // generate colors and sizes
  generateBooks(count, priority) {
    let colors  = [...Array(count)].map( _ => Math.round(1 + Math.random() * 5) ),
        sizes   = [...Array(count)].map( _ => Math.round(1 + Math.random() * 5) / 10 ),
        heights = [...Array(count)].map( _ => Math.round(1 + Math.random() * 5) / 40 );

    if(priority === 'color') colors.sort( (a, b) => a - b);

    return { colors, sizes, heights, count }; 
  }

  // TODO: multiple sort
  sortBooks() {
    this.setState({
      sortPriority: 'color'
    })
  }

  closeDoor() {
    this.setState({
      isDoorOpen: false
    })
  }

  correctPictureAngle() {
    this.setState({
      isPictureCorrected: true
    })
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image isHdr={true} source={require("./res/background.hdr") } /> 
        <ViroCamera position={this.state.currentLocationPosition} rotation={[0, 0, 0]} active={true}/>
          
        {/* LIGHT */}
        <ViroAmbientLight color="#ffffff" intensity={250}/>
        <ViroDirectionalLight color="#ffffff" direction={[-0.5, -1,  -0.5]}/>

        {/* ROOM */}
        <ViroNode>
          <Viro3DObject 
            source={require('./obj/room/Walls.obj')}
            resources={[require('./obj/room/Walls.mtl')]}
            position={[0, -8, 0]}
            materials={['walls']} 
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]} 
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/room/Floor.obj')}
            resources={[require('./obj/room/Floor.mtl'),
                        require('./obj/room/textures/floor.jpg')
                      ]}
            position={[0, -8, 0]}
            materials={['floor']} 
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/room/DoorOuter.obj')}          
            resources={[require('./obj/room/DoorOuter.mtl')]}
            position={[-0.25, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            materials={['windowsill']} 
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/room/DoorInner.obj')}          
            resources={[require('./obj/room/DoorInner.mtl')]}
            position={this.state.isDoorOpen ? [-8, -8, 12.5] : [-8.5, -8, 12.5]}
            scale={[1, 1, 1]} 
            rotation={this.state.isDoorOpen ? [0, -10, 0] : [0, 0, 0]}
            materials={['windowsill']}  
            type="OBJ"
            onClick={ 
              this.state.currentLocationPosition !== LOCATIONS[5].where ? 
                _ => this.changeCameraView(LOCATIONS[5].name, LOCATIONS[5].where) : _ => this.closeDoor()
            } 
          />
          <Viro3DObject 
            source={require('./obj/room/Windowsills.obj')}
            resources={[require('./obj/room/Windowsills.mtl')]}
            position={[0, -8, 0]}
            materials={['windowsill']} 
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/room/Carpet.obj')}
            position={[0, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/room/Ceiling.obj')}
            position={[0, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            type="OBJ"
          />
        </ViroNode> 

        {/* TABLE */}
        <ViroNode 
          onClick={
            this.state.currentLocationPosition !== LOCATIONS[0].where ? 
              _ => this.changeCameraView(LOCATIONS[0].name, LOCATIONS[0].where) : null
            }
          onHover={
            this.state.currentLocationPosition !== LOCATIONS[0].where ? 
              isHovering => this._onHover(isHovering, LOCATIONS[0].name) : _ => this.setState({ tableOpacity: 1 }) 
            }
          opacity={this.state.tableOpacity}>

          <Viro3DObject 
            source={require('./obj/table/Table.obj')}
            resources={[require('./obj/table/Table.mtl')]}
            position={[0, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            materials={['table']}
            type="OBJ"
          />
        </ViroNode>

        {/* BED */}
        <ViroNode 
          onClick={_ => this.changeCameraView(LOCATIONS[1].name, LOCATIONS[1].where)}
          onHover={isHovering => this._onHover(isHovering, LOCATIONS[1].name)}
          opacity={this.state.bedOpacity}>
          
          <Viro3DObject 
            source={require('./obj/bed/Bed.obj')}
            resources={[require('./obj/bed/Bed.mtl')]}
            position={[0, -8, 0]} 
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            materials={['table']}
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/bed/Matress.obj')}
            resources={[require('./obj/bed/Matress.mtl')]}
            position={[0, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/bed/Covering.obj')}
            resources={[require('./obj/bed/Covering.mtl')]}
            position={[0, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            materials={['pillow']}
            type="OBJ"
          />
          <Viro3DObject 
            source={require('./obj/bed/Pillow.obj')}
            resources={[require('./obj/bed/Pillow.mtl')]}
            position={[0, -8, 0]}
            scale={[1, 1, 1]} 
            rotation={[0, 0, 0]}
            materials={['pillow']}
            type="OBJ"
          />
        </ViroNode>
        
        {/* BOOKSHELF */}
        <ViroNode
          onClick={ 
            this.state.currentLocationPosition !== LOCATIONS[4].where ? 
              _ => this.changeCameraView(LOCATIONS[4].name, LOCATIONS[4].where) : _ => this.sortBooks()
            }
          onHover={ 
            this.state.currentLocationPosition !== LOCATIONS[4].where ? 
              isHovering => this._onHover(isHovering, LOCATIONS[4].name) : _ => this.setState({ bookshelfOpacity: 1 }) 
            }
          opacity={ this.state.bookshelfOpacity }
        >
          <Viro3DObject  
            source={require('./obj/shelf/Bookshelf.obj')}
            resources={[require('./obj/shelf/Bookshelf.mtl')]}
            position={[0, -8, 0]} 
            scale={[1, 1, 1]}  
            rotation={[0, 0, 0]} 
            materials={['table']}
            type="OBJ"
          />

          {/* BOOKS */}
          <ViroNode position={[12, -1.75, -.5]} rotation={[0, 90, 0]}>
            <BooksRow books={this.state.books[0]} /> 
          </ViroNode>

          <ViroNode position={[12, -3.5, -.5]}  rotation={[0, 90, 0]}>
            <BooksRow books={this.state.books[1]} />
          </ViroNode> 


          <ViroNode position={[12, -5, -.5]}  rotation={[0, 90, 0]}>
            <BooksRow books={this.state.books[2]} />
          </ViroNode>
        </ViroNode>
 
        {/* CLOSET */}
        <ViroNode 
          onClick={_ => this.changeCameraView(LOCATIONS[3].name, LOCATIONS[3].where)}
          onHover={isHovering => this._onHover(isHovering, LOCATIONS[3].name)}
          opacity={this.state.closetOpacity}>

          <Viro3DObject  
            source={require('./obj/shelf/Closet.obj')}
            resources={[require('./obj/shelf/Closet.mtl')]}
            position={[0, -8, 0]} 
            scale={[1, 1, 1]}  
            rotation={[0, 0, 0]} 
            materials={['closet']}
            type="OBJ"
          />
          <Viro3DObject  
            source={require('./obj/shelf/ClosetHandle.obj')}
            resources={[require('./obj/shelf/ClosetHandle.mtl')]}
            position={[0, -8, 0]} 
            scale={[1, 1, 1]}  
            rotation={[0, 0, 0]}
            type="OBJ"
          />
        </ViroNode>

        {/* FRAMES */}
        <ViroNode>
          <ViroNode 
            onClick={ 
              this.state.currentLocationPosition !== LOCATIONS[2].where ? 
                _ => this.changeCameraView(LOCATIONS[2].name, LOCATIONS[2].where) : this.correctPictureAngle
              }
            onHover={ 
              this.state.currentLocationPosition !== LOCATIONS[2].where ? 
                isHovering => this._onHover(isHovering, LOCATIONS[2].name) : _ => this.setState({ pictureOpacity: 1 }) 
              }
            opacity={ this.state.pictureOpacity } 
            position={this.state.isPictureCorrected ? [0, 0, 0] : [0, .5, 0] } 
            rotation={this.state.isPictureCorrected ? [0, 0, 0] : [10, 0, 0]}
            // onClick={this.correctPictureAngle}
          >
            <Viro3DObject
              source={require('./obj/frames/FrameVert.obj')}
              resources={[require('./obj/frames/Frame.mtl')]}
              position={[-8.5, -.6, 6]} 
              scale={[2, 2, 2]}
              rotation={[0, 90, 0]} 
              type="OBJ"
              materials={['closet']}
            /> 
          </ViroNode>
          <Viro3DObject  
            source={require('./obj/frames/Frame.obj')}
            resources={[require('./obj/frames/Frame.mtl')]}
            position={[-8.5, 0.4, 1]}
            scale={[1.6, 1.6, 1.6]}
            rotation={[0, 90, 0]}
            type="OBJ"
            materials={['closet']}
          />
          <Viro3DObject  
            source={require('./obj/frames/FrameRect.obj')}
            resources={[require('./obj/frames/Frame.mtl')]}
            position={[-8.5, -2.5, -.2]}
            scale={[.8, .8, .8]} 
            rotation={[0, 0, 0]}
            type="OBJ"
            materials={['closet']}
          />
          <Viro3DObject
            source={require('./obj/frames/FrameRect.obj')}
            resources={[require('./obj/frames/Frame.mtl')]}
            position={[-8.5, -2.5, 2.2]}
            scale={[.8, .8, .8]}
            rotation={[0, 0, 0]}
            type="OBJ"
            materials={['closet']}
          />
        </ViroNode>
      </ViroScene>
    ); 
  }
} 

class BooksRow extends Component {
  state = {
    books: this.props.books,
    shouldUpdate: false,
  } 

  shouldComponentUpdate() {
    return this.state.shouldUpdate;
  }

  // render books row from state 
  createBooksRow(array) {
    let source = null,
        resource = null,
        img = null,
        sizeCounter = 0;
      
    return new Array(array.count).fill(0).map((i, k) => {
      sizeCounter += .35;

      switch(array.colors[k]) {
        case 1:
          source = require('./obj/book/Book1.obj');
          resource = require(`./obj/book/Book1.mtl`);
          img = require('./obj/book/texture/1.jpg');
          break;
        case 2:
          source = require('./obj/book/Book2.obj');
          resource = require(`./obj/book/Book2.mtl`);
          img = require('./obj/book/texture/2.jpg');
          break;
        case 3:
          source = require('./obj/book/Book3.obj');
          resource = require(`./obj/book/Book3.mtl`);
          img = require('./obj/book/texture/3.jpg');
          break;
        case 4:
          source = require('./obj/book/Book4.obj');
          resource = require(`./obj/book/Book4.mtl`);
          img = require('./obj/book/texture/4.jpg');
          break;
        case 5:
          source = require('./obj/book/Book5.obj');
          resource = require(`./obj/book/Book5.mtl`);
          img = require('./obj/book/texture/5.jpg');
          break;
      }

      if(source == null) return;
      else {
        return(
          <Viro3DObject 
            key={Math.random()}
            source={source}
            resources={[resource, img]}
            position={[sizeCounter, 0, -5]} 
            scale={[1, 1 - array.heights[k], 1 - array.sizes[k]]} 
            rotation={[0, 90, 0]} 
            type="OBJ"
          /> 
        )
      }
    })
  }
  
  render() {
    return(
      <ViroNode>
        {this.createBooksRow(this.state.books)}
      </ViroNode>
    )
  }
}

// colors of objects
ViroMaterials.createMaterials({ 
  pillow: {
    lightingModel: "Blinn",
    diffuseTexture: require('./res/pillow.jpg'),
    specularTexture: require('./res/pillow.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
  walls: { 
    lightingModel: "Blinn",
    diffuseColor: '#df7861'
  },
  floor: {
    lightingModel: "Blinn",
    diffuseTexture: require('./obj/room/textures/floor.jpg'),
    specularTexture: require('./obj/room/textures/floor.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
  windowsill: {
    lightingModel: "Blinn",
    diffuseTexture: require('./obj/room/textures/whitewood.jpg'),
    specularTexture: require('./obj/room/textures/whitewood.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
  table: {
    lightingModel: "Blinn",
    diffuseTexture: require('./obj/table/textures/table.jpg'),
    specularTexture: require('./obj/table/textures/table.jpg'),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true, 
  },
  closet: {
    lightingModel: "Blinn",
    diffuseColor: '#583d36'
  }
});

module.exports = Game;
 