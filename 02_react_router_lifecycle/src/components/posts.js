import React from 'react'
import {Link} from 'react-router-dom'
const Post = () => {
  return (
    <div>
      <Link to="/posts/1">Post 1</Link><br/>
      <Link to="/posts/2">Post 2</Link><br/>
      <Link to="/posts/3">Post 3</Link><br/>
    </div>
  )
}

export default Post