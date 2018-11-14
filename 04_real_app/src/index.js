import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { firebase } from './firebase';

firebase.auth().onAuthStateChanged(user=>{
  ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})


