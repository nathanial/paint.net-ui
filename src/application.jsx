import React from 'react';
import ReactDOM from 'react-dom';
const Menu = remote.require('menu');

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
        <h1>Paint.NET UI Clone</h1>
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
