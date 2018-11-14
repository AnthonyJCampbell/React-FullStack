import React, { Component } from 'react'

class Control extends Component {
  state = {
    name: "",
    lastname: ""
  };
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleLastNameChange = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  onSubmitHandler=e=>{
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form_element">
            <label>Enter Name</label>
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>

          <div className="form_element">
            <label>Enter LastName</label>
            <input
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastname}
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Control