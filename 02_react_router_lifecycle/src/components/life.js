import React, { PureComponent } from 'react';

class Life extends PureComponent {
  // 1. get default props
  // 2. set default state
  state = {
    title:'Life Cycles'
  }
  // // 3. before render
  // componentWillMount(){
  //   console.log('componentWillMount')
  // }

  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   if(nextState.title === 'evil'){
  //     return false
  //   }
  //   return true
  // }
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps')
  // }
  // componentWillUnmount(){
  //   console.log('componentWillUnmount')
  // }
  // // 4. render jsx
  render() {
    console.log('render')
    return ( 
      <div>
        <h3>{this.state.title}</h3>
        <button onClick={()=>{this.setState({title:'changed'})}}>change title</button>
        <button onClick={()=>{this.setState({title:'evil'})}}>change to evil</button>
      </div>
    );
  }
  // 5. after render

  componentDidMount(){
    console.log('componentDidMount')
    document.querySelector("h3").style.color="red"
  }
}

export default Life