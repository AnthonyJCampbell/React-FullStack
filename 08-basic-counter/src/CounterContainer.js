// Intentionally left blank.
import React, { Component } from 'react';
import Counter from './Counter'
export default class CounterContainer extends Component {
  state={
    counter:0
  }
  handleIncrement =()=>{
    this.setState((state)=>{
      return {
        counter: state.counter+1
      }
    })
    this.setState((state)=>{
      return {
        counter: state.counter+1
      }
    })
    this.setState((state)=>{
      return {
        counter: state.counter+1
      }
    })

    console.log(this.state.counter)
  }
  handleDecrement =()=>{
    this.setState({
      counter: this.state.counter-1
    })
  }
  
  handleReset =()=>{
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
      <Counter 
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset = {this.handleReset}
        counter={this.state.counter}
      />
    );
  }
}
