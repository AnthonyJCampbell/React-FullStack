import React from 'react'

const Auth = (props) =>{
  const user = 'mike'
  if (user === 'mike'){
    return <h3> Not Authorized</h3>
  }
  return props.children
}

export default Auth