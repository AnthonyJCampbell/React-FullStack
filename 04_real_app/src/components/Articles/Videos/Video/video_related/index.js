import React from 'react'

import styles from '../../../styles.css'
import VideoListTemplate from '../../../../widgets/VideoList/video_template'
const VideoRelated = (props) => {
  return (
    <div className={styles.relatedWrapper}>
      <VideoListTemplate 
         data={props.data}
         teams={props.teams}/>
    </div>
  )
}

export default VideoRelated