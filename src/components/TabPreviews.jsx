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
        <div className="inner-image"></div>
      </div>
    );
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
    return (
      <div className="tab-previews">
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
}

export default TabPreviews;
