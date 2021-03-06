import React, { Component } from 'react'
import Header from './header';
import styles from '../../styles.css'
import moment from 'moment'
import { firebaseDB, firebaseLoop, firebaseTeams } from '../../../../firebase'

class NewsArticles extends Component {
  state = {
    article:[],
    team:[]
  }

  componentWillMount(){

    firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
              .then(snapshot=>{
                let article = snapshot.val();
                firebaseTeams.orderByChild("id").equalTo(article.team).once('value')
                             .then(snapshot=>{
                               const team = firebaseLoop(snapshot)
                               this.setState({article,team})
                             })
              })

  }

  formatDate = (date) =>{
    return moment(date).format(" MM-DD-YYYY ")
  }
  
  render () {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={styles.articleWrapper}>
        <Header teamData={team[0]} date={this.formatDate(article.date)} author={article.author}/>
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage} style={{background:`url('/images/articles/${article.image}')`}}>
          </div>
          <div className={styles.articleText}>
            {article.body}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsArticles