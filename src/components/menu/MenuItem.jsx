import React from 'react';
import Component from 'react-es6-component';

class MenuItem extends Component {
  state = {
    open: false
  }

  render(){
    if(this.props.separator){
      return (
        <div className="menu-item-separator"></div>
      );
    } else {
      let className = "menu-item";
      if(this.state.open){
        className += " open";
      }
      return (
        <div onClick={this._onMenuClick} className={className}>
          <div className="icon">
            {this._renderIcon()}
          </div>
          <span >{this.props.label}</span>
          {this._renderChildren()}
        </div>
      );
    }
  }

  _renderIcon(){
    if(this.props.icon){
      return <img src={this.props.icon}></img>
    }
  }

  _renderChildren(){
    if(this.props.children){
      return (
        <div className="menu-children">
          {this.props.children}
        </div>
      );
    }
  }

  _onMenuClick(){
    this.setState({
      open: true
    });
  }
}

export default MenuItem;
