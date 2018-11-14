import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/layout/layout';
import NewsArticle from './components/Articles/News/Post'
import NewsMain from './components/Articles/News/main'
import VideoMain from './components/Articles/Videos/main'
import VideosArticle from './components/Articles/Videos/Video'
import DashBoard from './components/dashboard/dashboard'
import SignIn from './components/signin/signin'
import PrivateRoutes from './components/auth/privateRoutes';
import PublicRoutes from './components/auth/publicRoutes';

class Routes extends Component {
  render () {
    return ( 
      <Layout user={this.props.user}>
        <Switch>
        <PrivateRoutes {...this.props} restricted={false} exact path="/" exact component={Home}/>
        <PrivateRoutes {...this.props} restricted={false} exact component={NewsMain}/>
        <PrivateRoutes {...this.props} restricted={false} exact component={VideoMain}/>
        <PrivateRoutes {...this.props} restricted={false} exact component={NewsArticle}/> 
        <PrivateRoutes {...this.props} restricted={false} exact component={VideosArticle}/>
        <PrivateRoutes {...this.props} restricted={true} exact component={SignIn}/>
          <PrivateRoutes {...this.props} component = {DashBoard}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes