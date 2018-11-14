import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../hoc/card'
import Auth from '../hoc/auth'
const Profile = (props) => {
  const redirectUser = ()=>{
    // props.history.push('/')
  }
  return (
    <Auth>
    <Card>
      Profile
      <Link to={{
        pathname:`${props.match.url}/posts`
      }}>Take me to /profile/posts</Link>
      {redirectUser()}
    </Card></Auth>
  )
}

export default Profile