import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';

class MenuBar extends Component {

  render(){
    const children = React.Children.map(this.props.children, this._listenToMenuItem);
    return (
      <div className="menu-bar">
        {children}
      </div>
    );
  }

  _listenToMenuItem(element, i){
    const name = `menuItem${i}`;
    return React.cloneElement(element, {
      ref: name,
      onClose: _.partial(this._onMenuClose, name),
      onMouseOver: _.partial(this._onMouseOver, i)
    });
  }

  _onMouseOver(index, event){
    const menuItem = this.refs['menuItem' + index];
    if(this._anyIsOpen()){
      if(ReactDOM.findDOMNode(menuItem).contains(event.target) && !menuItem.isOpen()){
        this._closeAll();
        console.log("BAM");
        menuItem.open();
      }
    }
  }

  _closeAll(){
    for(let i = 0; i < this.props.children.length; i++){
      const menuItem = this.refs['mouseItem' + i];
      if(menuItem.isOpen()){
        menuItem.close();
      }
    }
  }

  _anyIsOpen(){
    for(let i = 0; i < this.props.children.length; i++){
      const menuItem = this.refs['menuItem' + i];
      if(menuItem.isOpen()){
        return true;
      }
    }
    return false;
  }

  _onMenuClose(name){
    const menuItem = this.refs[name];
    menuItem.close();
  }
}

export default MenuBar;
