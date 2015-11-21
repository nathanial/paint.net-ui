import _ from 'underscore';
import React from 'react';
import Component from 'react-es6-component';

class TabPreview extends Component {
  render(){
    return <div className="tab-preview"></div>;
  }
}

class TabPreviews extends Component {
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
        <TabPreview>

        </TabPreview>
      );
    });

  }
}

export default TabPreviews;
