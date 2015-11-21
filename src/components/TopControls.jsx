import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';
import MenuBar from './menu/MenuBar';
import MenuItem from './menu/MenuItem';
import TabPreviews from './TabPreviews';
import remote from 'remote';

const BrowserWindow = remote.require('browser-window');
const app = remote.require('app');

class TopControls extends Component {

  constructor(){
    super(...arguments);
    this.win = BrowserWindow.getAllWindows()[0];
    this.state = {
      tabs: ['Foo', 'Bar']
    };
  }

  render(){
    return (
      <div className="top-controls" onMouseDown={this._onTitleBarMouseDown} onDoubleClick={this._onTitleBarDoubleClick}>
        <div className="upper-section">
          <div className="title-bar">
            <img className="app-icon" src="images/document_empty.png"></img>
            <span className="title">Paint.NET UI Clone</span>
          </div>
          {this._renderMenuBar()}
          {this._renderTabPreviews()}
          <div className="window-controls" ref="windowControls">
            <div className="minimize" onClick={this._onMinimize}>_</div>
            <div className="maximize" onClick={this._onMaximize}>
              <div className="square"></div>
            </div>
            <div className="exit" onClick={this._onExit}>x</div>
          </div>
        </div>
      </div>
    );
  }

  _renderMenuBar(){
    return (
      <MenuBar ref="menuBar">
        <MenuItem label="File">
          <MenuItem label="New..." icon="images/document_empty.png" shortcut="Ctrl+N"></MenuItem>
          <MenuItem label="Open..." icon="images/folder_vertical_open.png" shortcut="Ctrl+O"></MenuItem>
          <MenuItem label="Open Recent">
            <MenuItem label="File 1"></MenuItem>
            <MenuItem label="File 2"></MenuItem>
            <MenuItem label="File 3"></MenuItem>
            <MenuItem label="File 4"></MenuItem>
          </MenuItem>
          <MenuItem label="Acquire"></MenuItem>
          <MenuItem label="Close" icon="images/cancel.png" shortcut="Ctrl+W"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Save" icon="images/file_save_as.png" shortcut="Ctrl+S"></MenuItem>
          <MenuItem label="Save As..." icon="images/save_close.png" shortcut="Ctrl+Shift+S"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Print..." icon="images/printer.png" shortcut="Ctrl+P"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Exit"></MenuItem>
        </MenuItem>
        <MenuItem label="Edit">
          <MenuItem label="Undo" shortcut="Ctrl+Z" style={{width:250}}></MenuItem>
          <MenuItem label="Redo" shortcut="Ctrl+Y"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Cut" shortcut="Ctrl+X"></MenuItem>
          <MenuItem label="Copy" shortcut="Ctrl+C"></MenuItem>
          <MenuItem label="Copy Merged" shortcut="Ctrl+Shift+Y"></MenuItem>
          <MenuItem label="Paste" shortcut="Ctrl+V"></MenuItem>
          <MenuItem label="Paste into New Layer" shortcut="Ctrl+Shift+V"></MenuItem>
          <MenuItem label="Paste into New Image" shortcut="Ctrl+Alt+V"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Erase Selection" shortcut="Del"></MenuItem>
          <MenuItem label="Fill Selection" shortcut="Backspace"></MenuItem>
          <MenuItem label="Invert Selection" shortcut="Ctrl+I"></MenuItem>
          <MenuItem label="Select All" shortcut="Ctrl+A"></MenuItem>
          <MenuItem label="Deselect" shortcut="Ctrl+D"></MenuItem>
        </MenuItem>
        <MenuItem label="View">
          <MenuItem label="Zoom In" shortcut="Ctrl++" style={{width:250}}></MenuItem>
          <MenuItem label="Zoom Out" shortcut="Ctrl+-"></MenuItem>
          <MenuItem label="Zoom to Window" shortcut="Ctrl+B"></MenuItem>
          <MenuItem label="Zoom to Selection" shortcut="Ctrl+Shift+B"></MenuItem>
          <MenuItem label="Actual Size" shortcut="Ctrl+0"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Pixel grid"></MenuItem>
          <MenuItem label="Rulers"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Pixels"></MenuItem>
          <MenuItem label="Inches"></MenuItem>
          <MenuItem label="Centimeters"></MenuItem>
        </MenuItem>
        <MenuItem label="Image">
          <MenuItem label="Crop to Selection" shortcut="Ctrl+Shift+X" style={{width:250}}></MenuItem>
          <MenuItem label="Resize..." shortcut="Ctrl+R"></MenuItem>
          <MenuItem label="Canvas Size..." shortcut="Ctrl+Shift+R"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Flip Horizontal"></MenuItem>
          <MenuItem label="Flip Vertical"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Rotate 90 Clockwise" shortcut="Ctrl+H"></MenuItem>
          <MenuItem label="Rotate 90 Counter-Clockwise" shortcut="Ctrl+G"></MenuItem>
          <MenuItem label="Rotate 180" shortcut="Ctrl+J"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Flatten" shortcut="Ctrl+Shift+F"></MenuItem>
        </MenuItem>
        <MenuItem label="Layers">
          <MenuItem label="Add New Layer" shortcut="Ctrl+Shift+N" style={{width:250}}></MenuItem>
          <MenuItem label="Delete Layer" shortcut="Ctrl+Shift+Del"></MenuItem>
          <MenuItem label="Ctrl+Shift+D" shortcut="Ctrl+Shift+D"></MenuItem>
          <MenuItem label="Merge Layer Down" shortcut="Ctrl+M"></MenuItem>
          <MenuItem label="Import From File..."></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Flip Horizontal"></MenuItem>
          <MenuItem label="Flip Vertical"></MenuItem>
          <MenuItem label="Rotate / Zoom..." shortcut="Ctrl+Shift+Z"></MenuItem>
          <MenuItem separator={true}></MenuItem>
          <MenuItem label="Layer Properties..." shortcut="F4"></MenuItem>
        </MenuItem>
        <MenuItem label="Adjustments">
          <MenuItem label="Auto-Level" shortcut="Ctrl+Shift+L" style={{width:250}}></MenuItem>
          <MenuItem label="Black and White" shortcut="Ctrl+Shift+G"></MenuItem>
          <MenuItem label="Brightness / Contrast" shortcut="Ctrl+Shift+T"></MenuItem>
          <MenuItem label="Curves..." shortcut="Ctrl+Shift+M"></MenuItem>
          <MenuItem label="Hue / Saturation" shortcut="Ctrl+Shift+U"></MenuItem>
          <MenuItem label="Invert Colors" shortcut="Ctrl+Shift+I"></MenuItem>
          <MenuItem label="Levels..." shortcut="Ctrl+L"></MenuItem>
          <MenuItem label="Posterize..." shortcut="Ctrl+Shift+P"></MenuItem>
          <MenuItem label="Sepia" shortcut="Ctrl+Shift+E"></MenuItem>
        </MenuItem>
        <MenuItem label="Effects">
          <MenuItem label="Artistic"></MenuItem>
          <MenuItem label="Blurs"></MenuItem>
          <MenuItem label="Distort"></MenuItem>
          <MenuItem label="Noise"></MenuItem>
          <MenuItem label="Photo"></MenuItem>
          <MenuItem label="Render"></MenuItem>
          <MenuItem label="Stylize"></MenuItem>
        </MenuItem>
      </MenuBar>
    );
  }

  _renderTabPreviews(){
    return (
      <TabPreviews tabs={this.state.tabs}>
      </TabPreviews>
    );
  }

  _onTitleBarDoubleClick(event){
    if(this._isBackgroundEventTarget(event.target)){
      if(!this.win.isMaximized()){
        this.win.maximize();
      } else {
        this.win.restore();
      }
    }
  }

  _onTitleBarMouseDown(event){
    if(this.win.isMaximized()){
      return;
    }
    if(this._isBackgroundEventTarget(event.target)){
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

  _onMinimize(){
    this.win.minimize();
  }

  _onMaximize(){
    if(this.win.isMaximized()){
      this.win.restore()
    } else {
      this.win.maximize();
    }
  }

  _onExit(){
    app.quit();
  }

  _isBackgroundEventTarget(target){
    return (
      ReactDOM.findDOMNode(this).contains(target) &&
      !ReactDOM.findDOMNode(this.refs.menuBar).contains(target) &&
      !this.refs.windowControls.contains(target)
    );
  }
}

export default TopControls;
