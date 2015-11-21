import _ from 'underscore';
import React from 'react';
import Component from 'react-es6-component';

class TabPreview extends Component {
  static propTypes = {
    tab: React.PropTypes.object.isRequired,
    onSelected: React.PropTypes.func.isRequired
  }

  render(){
    let classNames = "tab-preview ";
    if(this.props.tab.selected){
      classNames += "selected";
    }
    return (
      <div className={classNames} onClick={this._onClick}>
        {this._renderHighlight()}
        <div className="inner-image"></div>
        <div className="favorite-btn"></div>
        <div className="close-btn">x</div>
      </div>
    );
  }

  _renderHighlight(){
    if(!this.props.tab.selected){
      return <div className="hover-highlight"></div>;
    }
  }

  _onClick(){
    this.props.onSelected(this.props.tab);
  }
}

class TabPreviews extends Component {

  static propTypes = {
    tabs: React.PropTypes.array.isRequired,
    onSelected: React.PropTypes.func.isRequired
  }

  render(){
    const highlightStyle = this._getHighlightStyle();

    return (
      <div className="tab-previews">
        <div className="highlight" style={highlightStyle}></div>
        {this._renderTabs()}
      </div>
    );
  }

  _renderTabs(){
    return _.map(this.props.tabs, (tab) => {
      return (
        <TabPreview tab={tab} onSelected={this.props.onSelected}>
        </TabPreview>
      );
    });
  }

  _getHighlightStyle(){
    const tabIndex = this._selectedTabIndex();
    return {
      left: 74 * tabIndex
    };
  }

  _selectedTabIndex(){
    const selectedTab = _.find(this.props.tabs, (tab) => tab.selected);
    const index = this.props.tabs.indexOf(selectedTab);
    return index;
  }
}

export default TabPreviews;
