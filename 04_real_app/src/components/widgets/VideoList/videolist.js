import React, { Component } from 'react'
import Button from '../Buttons/button'
import VideoTemplate from './video_template'
import styles from './styles.css'

import { firebaseTeams, firebaseVideos, firebaseLoop } from '../../../firebase'

class VideoList extends Component {
  state = {
    teams:[],
    videos:[],
    start:this.props.start,
    end: this.props.start + this.props.amount
  }
  componentWillMount(){
    this.request(this.state.start,this.state.end)
  }
  renderTitle =(title)=>{
    return title ? <h3><strong>NBA </strong>Videos</h3>:''
  }
  request = (start,end) =>{
    if(this.state.teams.length<1){
      firebaseTeams.once("value").then((snapshot)=>{
        const teams = firebaseLoop(snapshot)
        this.setState({teams:teams})
      })
    }

    firebaseVideos.orderByChild("id").startAt(start).endAt(end).once('value')
    .then(snapshot=>{
      const videos = firebaseLoop(snapshot)
      this.setState({
            videos:[...this.state.videos,...videos],
            start:end+1,
            end:end+this.props.amount
          })
    }).catch(e=>console.error(e))


  }
  loadmore=()=>{
    this.request(this.state.start,this.state.end)
  }
  renderButton=()=>{
    return this.props.loadMore?(
      <Button 
      type="loadmore"
      title="Load More Videos"
      click={()=>{this.loadmore()}}/>
    ):(
      <Button type="linkTo" title="More Videos" linkTo="/videos"/>
    );
  }

  renderVideos = (type) =>{
    let template = null;
    switch(type){
      case('card'):
        template = <VideoTemplate data = {this.state.videos} teams ={this.state.teams} /> 
        break;
      default:
        template=''

    }
    return template
  }

  render () {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle(true)}
        {this.renderVideos(this.props.type)}
        {this.renderButton() }
      </div>
    )
  }
}

export default VideoList