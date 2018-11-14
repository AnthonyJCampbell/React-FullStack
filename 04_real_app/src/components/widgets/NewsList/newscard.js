import React from 'react'
import {Link} from 'react-router-dom'
import CardInfo from '../CardInfo/cardinfo';

import styles from './style.css'
import moment from 'moment'


const NewsCard = ({item,index,teams}) => {
  let teamName=''
  if(teams.length>0){
    for(var i=0;i<teams.length;i++){
      if(teams[i].teamId===item.team){
        teamName=teams[i]['name']
        break;
      }
    }
  }

  const formatDate = (date) =>{
    return moment(date).format(" MM-DD-YYYY ")
  }

  return (
    <div className={styles.newslist_item}>
      <Link to={`/articles/${item.id}`}>
        <CardInfo date={formatDate(item.date)} teamName={teamName}/><h2>{item.title}</h2>
      </Link>
    </div>
  )
}

export default NewsCard