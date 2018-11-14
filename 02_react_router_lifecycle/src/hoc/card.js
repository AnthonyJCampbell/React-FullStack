import React from 'react'

const Card = (props) => {
  const styles = {
    background:"lightgrey",
    // margin:"10px 5px"
    padding:"10px 5px"
  }
  return (
    <div style={styles}> 
      {props.children}
    </div>
  )
}

export default Card