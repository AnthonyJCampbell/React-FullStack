import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'

const Button = (props) => {
  let template = null;

  switch(props.type){
    case 'loadmore':
      template=(
        <div 
          onClick={props.click}
          className={styles.blue_btn}>
          {props.title}
        </div>
      )
      break;
    case 'linkTo':
      template=<Link to={props.linkTo} className={styles.blue_btn}>{props.title}</Link>
      break
    default:
      template=null;
  }

  return (
    <div>
      {template}
    </div>
  )
}

export default Button