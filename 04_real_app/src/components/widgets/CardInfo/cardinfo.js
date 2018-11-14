import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './styles.css'

const CardInfo = (props) => {
  return (
    <div className={styles.cardInfo}>
      <span className={styles.temaName}>
        {props.teamName}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock-o"/>
        &nbsp;
        {props.date}
      </span>
    </div>
  )
}

export default CardInfo