import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';

class MenuItem extends Component {
  static propTypes = {
    label: React.PropTypes.string,
    separator: React.PropTypes.bool,
    shortcut: React.PropTypes.string,
    onClose: React.PropTypes.func
  }

  static defaultProps = {
    onClose: function(){}
  }

  state = {
    open: false
  }

  _isOpen = false;

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
        <div onMouseEnter={this._onMouseEnter}
             onMouseLeave={this._onMouseLeave}
             onClick={this._onMenuClick}
             className={className} {...this.props}>
          <div className="icon">
            {this._renderIcon()}
          </div>
          <span className="menu-title" >{this.props.label}</span>
          <span className="menu-shortcut">{this.props.shortcut}</span>
          {this._renderExpanderArrow()}
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
    return this._isOpen;
  }

  open(){
    this._isOpen = true;
    this.setState({
      open: true
    });
  }

  close(){
    this._isOpen = false;
    this.setState({
      open: false
    });
  }

  _renderIcon(){
    if(this.props.icon){
      return <img src={this.props.icon}></img>
    }
  }

  _renderExpanderArrow(){
    if(this.props.children){
      return (
        <div className="arrow-right">
        </div>
      );
    }
  }

  _renderChildren(){
    if(this.props.children){
      const children = React.Children.map(this.props.children, (element) => {
        return React.cloneElement(element, {onClose: this._onCloseChild});
      });
      return (
        <div className="menu-children">
          {children}
        </div>
      );
    }
  }

  _onMouseEnter(){
    clearTimeout(this._menuCloseTimeout);
    this._menuItemTimeout = setTimeout(() => {
      this._hoverClick = true;
      this._isOpen = true;
      this.setState({
        open: true
      });
    }, 500);
  }

  _onMouseLeave(event){
    clearTimeout(this._menuItemTimeout);
    this._menuCloseTimeout = setTimeout(() => {
      if(this._hoverClick){
        this._hoverClick = false;
        this._isOpen = false;
        this.setState({
          open: false
        });
      }
    }, 200);
  }

  _onMenuClick(event){
    event.preventDefault();
    event.stopPropagation();

    this._hoverClick = false;
    clearTimeout(this._menuItemTimeout);
    if(this._isLeaf()){
      this._isOpen = false;
      this.setState({
        open: false
      });
      if(this.props.onClose){
        this.props.onClose();
      }
    } else {
      this._isOpen = true;
      this.setState({
        open: true
      });
    }
  }

  _addListeners(){
    $(document).on('click', this._onDocumentClick);
  }

  _removeListeners(){
    $(document).off('click', this._onDocumentClick);
  }

  _onDocumentClick(event){
    if(this.state.open && !ReactDOM.findDOMNode(this).contains(event.target)){
      this._isOpen = false;
      this.setState({
        open: false
      });
    }
  }

  _isLeaf(){
    return !this.props.children || this.props.children.length === 0;
  }

  _onCloseChild(){
    this._isOpen = false;
    this.setState({
      open: false
    });
    this.props.onClose();
  }
}

export default MenuItem;
