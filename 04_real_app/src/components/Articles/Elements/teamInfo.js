import React from 'react'
import styles from '../styles.css'
const TeamInfo = (props) => {
  return (
    <div className={styles.articleTeamHeader}>
      <div className={styles.left} style={{background:`url('/images/teams/${props.team.logo}')`}}>

      </div>
      <div className={styles.right}>
        <div>
          <span>{props.team.city} {props.team.name}</span>
        </div>
        <div>
          Win:<span>{props.team.stats[0].wins}  Lost: {props.team.stats[0].defeats}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo