import React from 'react';
import Component from 'react-es6-component';
import MenuBar from './menu/MenuBar';
import MenuItem from './menu/MenuItem';

class TopMenu extends Component {

  render(){
    return (
      <div className="top-menu">
        <MenuBar>
          <MenuItem label="File">
            <MenuItem label="New..."></MenuItem>
            <MenuItem label="Open..." icon="images/folder_vertical_open.png"></MenuItem>
            <MenuItem label="Acquire"></MenuItem>
            <MenuItem label="Close"></MenuItem>
            <MenuItem separator={true}></MenuItem>
            <MenuItem label="Save"></MenuItem>
            <MenuItem label="Save As..."></MenuItem>
            <MenuItem separator={true}></MenuItem>
            <MenuItem label="Print..."></MenuItem>
            <MenuItem separator={true}></MenuItem>
            <MenuItem label="Exit"></MenuItem>
          </MenuItem>
          <MenuItem label="Edit"></MenuItem>
          <MenuItem label="Image"></MenuItem>
          <MenuItem label="Layers"></MenuItem>
          <MenuItem label="Adjustments"></MenuItem>
          <MenuItem label="Effects"></MenuItem>
        </MenuBar>
      </div>
    );
  }

}

export default TopMenu;
