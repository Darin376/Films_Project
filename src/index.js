import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './Redux/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import firebase from "firebase/compat/app";
import firebaseConfig from "./FireBase/fireBaseConfig"

firebase.initializeApp(firebaseConfig);
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);