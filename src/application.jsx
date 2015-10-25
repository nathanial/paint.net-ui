import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import Component from 'react-es6-component';
import {connect} from 'react-redux';
import {store} from './state/app';
import toastr from 'toastr';
import TopMenu from './components/TopMenu';

window.onerror = function(errorMsg){
  if(errorMsg === "Uncaught TypeError: Cannot read property 'firstChild' of undefined"){
    console.error(errorMsg);
    return false;
  } else {
    console.dir(_.clone(errorMsg));
    toastr.error(errorMsg);
    return false;
  }
};

class Application extends Component {

  static propTypes = {
  }

  render(){
    return (
      <div>
        <TopMenu></TopMenu>
      </div>
    );
  }
}

function select(state){
  return {};
}

$(() => {
  const ConnectedApp = connect(select)(Application);
  ReactDOM.render(<ConnectedApp store={store}></ConnectedApp>, $(".app-container")[0]);
});
