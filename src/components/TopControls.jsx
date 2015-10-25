import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';
import MenuBar from './menu/MenuBar';
import MenuItem from './menu/MenuItem';
import remote from 'remote';

const BrowserWindow = remote.require('browser-window');

class TopControls extends Component {

  constructor(){
    super(...arguments);
    this.win = BrowserWindow.getFocusedWindow();
  }

  render(){
    return (
      <div className="top-controls" onMouseDown={this._onTitleBarMouseDown}>
        <div className="upper-section">
          <div className="title-bar">
            <img className="app-icon" src="images/document_empty.png"></img>
            <span className="title">Paint.NET UI Clone</span>
          </div>
          <MenuBar ref="menuBar">
            <MenuItem label="File">
              <MenuItem label="New..." icon="images/document_empty.png"></MenuItem>
              <MenuItem label="Open..." icon="images/folder_vertical_open.png"></MenuItem>
              <MenuItem label="Acquire"></MenuItem>
              <MenuItem label="Close" icon="images/cancel.png"></MenuItem>
              <MenuItem separator={true}></MenuItem>
              <MenuItem label="Save" icon="images/file_save_as.png"></MenuItem>
              <MenuItem label="Save As..." icon="images/save_close.png"></MenuItem>
              <MenuItem separator={true}></MenuItem>
              <MenuItem label="Print..." icon="images/printer.png"></MenuItem>
              <MenuItem separator={true}></MenuItem>
              <MenuItem label="Exit"></MenuItem>
            </MenuItem>
            <MenuItem label="Edit"></MenuItem>
            <MenuItem label="Image"></MenuItem>
            <MenuItem label="Layers"></MenuItem>
            <MenuItem label="Adjustments"></MenuItem>
            <MenuItem label="Effects"></MenuItem>
          </MenuBar>
          <div className="window-controls">
            <div className="minimize"></div>
            <div className="maximize"></div>
            <div className="exit"></div>
          </div>
        </div>
      </div>
    );
  }

  _onTitleBarMouseDown(event){
    if(ReactDOM.findDOMNode(this).contains(event.target) &&
       !ReactDOM.findDOMNode(this.refs.menuBar).contains(event.target)){
      const [x,y] = this.win.getPosition();
      this.dragging = true;

      this.startDiffX = event.screenX - x;
      this.startDiffY = event.screenY - y;

      this._addDragListeners();
    }
  }

  _onDocumentMouseUp(){
    this.dragging = false;
    this._removeDragListeners();
  }

  _onDocumentMouseMove(event){
    if(this.dragging){
      this.win.setPosition(event.screenX - this.startDiffX, event.screenY - this.startDiffY);
    }
  }

  _addDragListeners(){
    $(document).on('mousemove', this._onDocumentMouseMove);
    $(document).on('mouseup', this._onDocumentMouseUp);
  }

  _removeDragListeners(){
    $(document).off('mousemove', this._onDocumentMouseMove);
    $(document).off('mouseup', this._onDocumentMouseUp);
  }
}

export default TopControls;
