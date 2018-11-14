import React,{Component} from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';

import { updateNumberOfPeople } from '../actions';


class NumberOfPeople extends Component {
  render() {
    return (
      <Input 
      label="Number of Guests"
      type="number"
      min={0}     
      value={this.props.numberOfPeople}
      onChange={this.props.onChange}
    />
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    numberOfPeople: state.numberOfPeople
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      updateNumberOfPeople(e.target.value)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NumberOfPeople)