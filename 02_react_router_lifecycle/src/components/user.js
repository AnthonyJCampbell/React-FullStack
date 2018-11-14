import React from 'react'
import userHoc from '../hoc/user_hoc';

const User = () => {
  return (
    <div>
      User 
    </div>
  )
}

export default userHoc(User,'hello')