import React,{Component} from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';

import { updateSlicesPerPerson } from '../actions';


class SlicePerPerson extends Component {
  render() {
    return (
      <Input 
        label="Slices Per Person"
        type="number"
        min={0}     
        value={this.props.slicesPerPerson}
        onChange={this.props.onChange}
    />
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    slicesPerPerson: state.slicesPerPerson
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      updateSlicesPerPerson(e.target.value)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SlicePerPerson)