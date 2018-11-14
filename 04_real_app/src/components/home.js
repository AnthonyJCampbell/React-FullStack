import React from 'react';
import NewsSlider from './widgets/NewsSlider/slider';
import NewsList from './widgets/NewsList/newslist';
import VideoList from './widgets/VideoList/videolist'
const Home = () => {
  return (
    <div> 
      <NewsSlider 
        type="featured"
        start={0}
        amount={3}
        setting={{
          dots:false
        }}
      />
      <NewsList type="card" 
                loadmore={true} 
                start={3} 
                amount={3}/>
      <VideoList type="card" 
                loadmore={false} 
                start={3} 
                amount={3}/>
    </div>
  );
};

export default Home;  