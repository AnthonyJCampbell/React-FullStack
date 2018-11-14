import React, { Component } from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import NewsCard from './newscard'
import Button from '../Buttons/button'
import styles from './style.css'


import { firebaseTeams, firebaseLoop, firebaseArticles } from '../../../firebase'

class NewsList extends Component {
  state = {
    items:[],
    teams:[],
    start:this.props.start,
    end: this.props.start + this.props.amount
  }
  
  componentWillMount(){
    this.request(this.state.start,this.state.end)
  }

  request = (start,end) =>{
    if(this.state.teams.length<1){
      firebaseTeams.once("value").then((snapshot)=>{
        const teams = firebaseLoop(snapshot)
        this.setState({teams:teams})
      })
    }
    firebaseArticles.orderByChild("id").startAt(start).endAt(end).once('value')
    .then(snapshot=>{
      const articles = firebaseLoop(snapshot)
      this.setState({
            items:[...this.state.items,...articles],
            start:end+1,
            end:end+this.props.amount
          })
    }).catch(e=>console.error(e))

  }

  loadmore=()=>{
    this.request(this.state.start,this.state.end)
  }

  renderNews(type){
    let template = null;
    switch(type){
      case('card'):
        template = this.state.items.map( (item,i) => (
        <CSSTransition 
          classNames={{
            enter:styles["fade-enter"],
            enterActive:styles["fade-enter-active"]
          }}
          key={i} 
          timeout={500}>
          <NewsCard item={item} teams={this.state.teams}/>
        </CSSTransition>
        ))
        break;
      case("cardMain"):
        template = this.state.items.map( (item,i) => (
          <CSSTransition 
            classNames={{
              enter:styles["fade-enter"],
              enterActive:styles["fade-enter-active"]
            }}
            key={i} 
            timeout={500}>
              <div className={styles.flex_wrapper}>
                <div className={styles.left} style={{background:`url("/images/articles/${item.image}")`}}>
                  <div></div>
                </div>
                <div className={styles.right}>
                  <NewsCard item={item} teams={this.state.teams}/>
                </div>
              </div>
          </CSSTransition>
          ))
        break;
      default:
        template=null;
    }
    return template
  }

  
  render () {
    return (
      <div>
        <TransitionGroup className="news_list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button 
          type="loadmore"
          title="Load More News"
          click={()=>{this.loadmore()}}
        >
        </Button>
      </div>
    )
  }
}

export default NewsList