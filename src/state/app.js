import _ from 'underscore';
import {combineReducers, createStore} from 'redux';
import fs from 'fs';
import toastr from 'toastr';

function getInitialState(){
  const text = localStorage.getItem('paint-store') || "{}";
  const storeJSON = JSON.parse(text);
  return storeJSON;
}

const saveState = _.debounce(() => {
  const state = store.getState();
  localStorage.setItem('paint-store', JSON.stringify(state));
}, 200);

export const paintApp = combineReducers({
  ui: function (){}
});

export const store = createStore(paintApp, getInitialState());

store.subscribe(saveState);
