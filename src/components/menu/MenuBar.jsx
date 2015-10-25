import React from 'react';
import Component from 'react-es6-component';

class MenuBar extends Component {
  render(){
    return (
      <div className="menu-bar">
        {this.props.children}
      </div>
    );
  }
}

export default MenuBar;
