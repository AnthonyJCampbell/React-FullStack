import React, { Component } from 'react'
import { firebase, firebaseDB, googleAuth} from '../firebase'

class Login extends Component {
  state={
    status:false,
    user:null,
  }
  signin=()=>{
    firebase.auth().signInWithPopup(googleAuth)

  }
  signout=()=>{
    firebase.auth().signOut()
  }
  render () {
    return (
      <div>
      {!this.props.isLogin?
        <button onClick={this.signin}>Login</button>:
        <button onClick={this.signout}>Logout</button>}
      </div>
    )
  }
}

export default Login