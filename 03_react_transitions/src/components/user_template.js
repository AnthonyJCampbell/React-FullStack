import React from 'react';
import PropTypes from 'prop-types'

const UserTemplate = (props) => {
  console.log(props)
  return (
    <div>
      Template
    </div>
  );
};

UserTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  age:PropTypes.number,
  lastname: PropTypes.string,
  spanish: PropTypes.bool,
  hobbies: PropTypes.array,
  brother: function(props,propName,componentName){
    if(props[propName] !== 'Bob'){
      return new Error('not correct name for brother')
    }
  }
}

export default UserTemplate;