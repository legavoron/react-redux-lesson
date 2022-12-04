import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';


const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC': 
      return {
        ...state, 
        value: state.value + 1
      }
    case 'DEC': 
    return {
      ...state, 
      value: state.value - 1
    }
    case 'RND':
      return {
        ...state, 
        value: state.value * action.payload
      }
    default: 
      return state;
  }

}

const store = createStore(reducer);

const update = () => {
  document.querySelector('#counter').textContent = store.getState().value;
}

store.subscribe(update);


const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.querySelector('#dec').addEventListener('click', ()=> {
  store.dispatch(inc());
})
document.querySelector('#inc').addEventListener('click', ()=> {
  store.dispatch(dec());
})
document.querySelector('#rnd').addEventListener('click', ()=> {
  const value =  Math.floor(Math.random() * 10 + 1);
  store.dispatch(rnd(value));
})










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  </>
);



