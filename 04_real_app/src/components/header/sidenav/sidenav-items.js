import React from 'react'
import style from './sidenav.css'
import { Link,withRouter } from 'react-router-dom'
import { firebase } from '../../../firebase'
import FontAwesome from 'react-fontawesome';

const SideNavItems = (props) => {
  const items = [
    {'text':'Home','icon':'home',link:'/',type:style.option,login:''},
    {'text':'News','icon':'file-text-o',link:'/news',type:style.option,login:''},
    {'text':'Videos','icon':'play',link:'/videos',type:style.option,login:''},
    {'text':'Dashboard','icon':'dashboard',link:'/dashboard',type:style.option,login:true},
    {'text':'Sign-In','icon':'sign-in',link:'/sign-in',type:style.option,login:false},
    {'text':'Sign-Out','icon':'sign-out',link:'/sign-out',type:style.option,login:true}
  ]
  const auth = (item,i)=>{
    console.log(item.login, props.user)
    if((item.login===true && props.user!==null) || (item.login===false && props.user===null)){

    if(item.link === '/sign-out'){
      return  (<div 
        className={item.type} 
        key={i} 
        onClick={()=>firebase.auth().signOut().then(()=>{props.history.push('/')})}>
        <Link to={item.link}>
          <FontAwesome name={item.icon}></FontAwesome>{item.text}
        </Link>
      </div>)
    }
  
    return (<div className={item.type} key={i}>
      <Link to={item.link}>
        <FontAwesome name={item.icon}></FontAwesome>{item.text}
      </Link>
    </div>)
    }
  }
  const element = ()=>{
    return items.map((item,i)=> {
      return item.login===''?(<div className={item.type} key={i}>
      <Link to={item.link}>
        <FontAwesome name={item.icon}></FontAwesome>{item.text}
      </Link>
    </div>):auth(item,i)})
  }
  return element()
}

export default withRouter(SideNavItems)