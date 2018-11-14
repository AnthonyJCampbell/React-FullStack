import React from 'react'
import NewsItem from './news_item'

const NewsList = ({db,children}) => {
  return (
    <div>
      {db.map(news=><NewsItem news={news} key={news.id}/>)}
      <p>{children}</p>
    </div>
  )
}

export default NewsList