import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './firebase';



firebase.auth().onAuthStateChanged(user=>{
  console.log(user)
  ReactDOM.render(<App auth={user}/>, document.getElementById('root'));
})