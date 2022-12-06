import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
  document.querySelector('#counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   return dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);


document.querySelector('#dec').addEventListener('click', inc)
document.querySelector('#inc').addEventListener('click', dec)
document.querySelector('#rnd').addEventListener('click', ()=> {
  const value =  Math.floor(Math.random() * 10 + 1);
  rnd(value);
})










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  </>
);



