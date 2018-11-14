import React, { Component } from 'react'
import UserTemplate from './user_template';



class User extends Component {
  state = {
    name:"mike",
    lastName:"zhang",
    age:25,
    hobbies:['run','jump'],
    spanish:false,
    brother: 'Bob'
  }
  changeColor =()=>{
    this.refs.name.style.color="blue"
  }
  render () {
    const styles = {
      "color":"red"
    }
    return (
      <div>
        <h4 style={styles} ref="name">{this.state.name}</h4>
        <div>
          <button onClick={()=>this.changeColor()}>ChangeColor</button>
        </div>
        <UserTemplate {...this.state}/>    
      </div>
    )
  }
}

export default User