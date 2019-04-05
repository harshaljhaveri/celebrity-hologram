import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fireBaseConfig from './config'
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase})),
    reactReduxFirebase(fireBaseConfig, {attachAuthIsReady: true}) // redux binding for firebase
  )
)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  serviceWorker.unregister();
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
