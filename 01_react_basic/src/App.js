import React,{Component} from 'react'
import {Header, NewsList} from './components'
import db from './db.json'
class App extends Component{
  state={
    filtered:db
  }
  keywordsHandler=(e)=>{
    console.log(e.target.value)
    const k = e.target.value
    if(k!==""){
      let temp = db.filter(item=>{
        return item.title.indexOf(k)!==-1
      })
      console.log(temp)
      this.setState({filtered:temp})
    }else{
      this.setState({filtered:db})
    }
  }
  render(){
    return (
      <div>
        <Header keywordsHandler={this.keywordsHandler}/>
        <NewsList db={this.state.filtered}>
          Enjoy coding!
        </NewsList>
      </div>
    )
  }
}

export default App