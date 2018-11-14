import React from 'react'

const MoviesList = (props) => {
  return (   
    <div>
      {props.movies?props.movies.map(m=><div>Movies: {m}</div>):null}
    </div>
  )
}

export default MoviesList