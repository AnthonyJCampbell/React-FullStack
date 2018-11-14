import React from 'react'
import { Link } from 'react-router-dom'
import Slick from 'react-slick';

import style from './slider.css';


const SlideTemplates = (props) => {
  const settings = {
    dots:true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    ...props.setting
  }
  let template = null;
  console.log(settings)
  switch(props.type){
    
    case ('featured'):
      template = props.data.map( (item,i) => {
        if(i>2){
          return null;
        }
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div className={style.featured_image}
                   style={{background:`url(../images/articles/${item.image})`}}
               >
              <Link to={`/articles/${item.id}`}></Link>
                <div className={style.featured_caption}>
                  {item.title}  
                </div>
              </div>
            </div>
          </div>
        )
      });
      break;
    default:
      template=null;
  }
    return (
      <Slick {...settings}>
        {template}
      </Slick>
    )
}

export default SlideTemplates