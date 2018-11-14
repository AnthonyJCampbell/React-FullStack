import React from 'react';
import VideoList from '../../../widgets/VideoList/videolist'

const VideoMain = () => {
  return (
    <div>
      <VideoList type="card" title={false} loadMore={true} start={0} amount={10}/>
    </div>
  );
};

export default VideoMain;