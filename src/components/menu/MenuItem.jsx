import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';

class MenuItem extends Component {
  state = {
    open: false
  }

  render(){
    if(this.props.separator){
      return (
        <div className="menu-item-separator">
          <div className="sep"></div>
        </div>
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

  componentDidMount(){
    this._addListeners();
  }

  componentWillUnmount(){
    this._removeListeners();
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

  _addListeners(){
    $(document).on('click', this._onDocumentClick);
  }

  _removeListeners(){
    $(document).off('click', this._onDocumentClick);
  }

  _onDocumentClick(event){
    if(this.state.open && !ReactDOM.findDOMNode(this).contains(event.target)){
      this.setState({
        open: false
      });
    }
  }
}

export default MenuItem;
