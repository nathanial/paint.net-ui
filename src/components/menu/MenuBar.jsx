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
    return React.cloneElement(element, {ref: `mouseItem${i}`,onMouseOver: _.partial(this._onMouseOver, i)});
  }

  _onMouseOver(index, event){
    const mouseItem = this.refs['mouseItem' + index];
    if(this._anyIsOpen()){
      if(ReactDOM.findDOMNode(mouseItem).contains(event.target) && !mouseItem.isOpen()){
        this._closeAll();
        mouseItem.open();
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
      const menuItem = this.refs['mouseItem' + i];
      if(menuItem.isOpen()){
        return true;
      }
    }
    return false;
  }
}

export default MenuBar;
