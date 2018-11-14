import React from 'react'

const userHoc = (WrappedComponent, args) => {
  return (props)=>(
    <div>
      <WrappedComponent {...props}/>
      {args}
    </div>
  )
}

export default userHoc;