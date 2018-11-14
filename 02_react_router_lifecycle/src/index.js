import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route, NavLink,Switch} from 'react-router-dom'
import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import PostItem from './components/post_item'
import Life from './components/life'

import Conditinal from './components/conditional'
import User from './components/user';
const App = () =>{
  return (
    <BrowserRouter>
      <div>
        <header>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/posts">Posts</NavLink><br/>
            <NavLink to="/life">Life</NavLink><br/>
            <NavLink to="/user">User</NavLink><br/>
            <NavLink to="/conditinal">Conditinal</NavLink><br/>
            <NavLink to={{
              pathname:"/profile",
              search:"?profile=true"
            }}>Profile</NavLink>
        </header>  
        <hr/>
        <Switch>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/posts"  component={Posts}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/user" component={User}/>  
          <Route path="/life" component={Life}/>
          <Route path="/conditinal" render={()=><Conditinal show={true}/>}/>
          <Route path="/" exact component={Home} />
          <Route render={()=>(<h3>404 page not found</h3>)}/>
        </Switch> 
      </div> 
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))