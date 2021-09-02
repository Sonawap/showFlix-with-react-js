import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/grid.css';
import './assets/css/style.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
///STORE -> GLOBALIZED STORE
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store ={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);


