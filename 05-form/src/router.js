import React, { Component } from 'react'

import { Route, Switch,Redirect} from 'react-router-dom';

import Control from './compomnents/control'
import Uncontrol from './compomnents/uncontrol'
import User from './compomnents/user'
import Login from './compomnents/login'
import Layout from './layout'
import Dashboard from './compomnents/dashboard';

const PrivateRoute = (props) =>{
  if(props.isLogin){
    return <div>{props.children}</div>
  }
  return <Redirect to="/login"/>
}
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={User}/>
          <Route path="/user" exact component={User}/>
          <Route path="/login" exact render={()=><Login isLogin={this.props.auth}/>} />
          <Route path="/control" exact component={Control}/>
          <Route path="/uncontrol" exact component={Uncontrol}/>
          <PrivateRoute isLogin={this.props.auth}><Route path="/dashboard" exact component={Dashboard}/></PrivateRoute>
        </Switch>
      </Layout>
    )
  }
}

export default Routes