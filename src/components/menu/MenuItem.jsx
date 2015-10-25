import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';

class MenuItem extends Component {
  static propTypes = {
    label: React.PropTypes.string,
    separator: React.PropTypes.bool,
    shortcut: React.PropTypes.string
  }

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
        <div onClick={this._onMenuClick} className={className} {...this.props}>
          <div className="icon">
            {this._renderIcon()}
          </div>
          <span className="menu-title" >{this.props.label}</span>
          <span className="menu-shortcut">{this.props.shortcut}</span>
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

  isOpen(){
    return this.state.open;
  }

  open(){
    this.setState({
      open: true
    });
  }

  close(){
    this.setState({
      open: false
    });
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
