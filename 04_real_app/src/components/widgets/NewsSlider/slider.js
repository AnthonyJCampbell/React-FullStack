import React, { Component } from 'react'
import SlideTemplates from './slider_template';
import { firebaseArticles , firebaseLoop } from '../../../firebase';

class NewsSlider extends Component {
  state = {
    news:[]
  } 
  componentWillMount(){ 
    firebaseArticles.limitToFirst(3).once('value').then(snapshot=>{
      const news=firebaseLoop(snapshot);
      this.setState({news})
    })
  }
  render() {
    return (
      <div>
        <SlideTemplates data={this.state.news} setting={this.props.setting} type={this.props.type}/>
      </div>
    )
  }
}

export default NewsSlider