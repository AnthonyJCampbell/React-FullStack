import React from 'react'

const Conditional = (props) => {
  const show = props.show
  console.log(props)
  return (
    <div>
    {show===true?<div>Hello it's me</div>:null}
    </div>
  )
}

export default Conditional