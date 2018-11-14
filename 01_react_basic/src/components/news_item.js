import React from 'react'
import classes from '../css/styles.css'

const NewsItem = ({news}) => {
  return (
    <div className={classes.news_item}>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  )
}

export default NewsItem