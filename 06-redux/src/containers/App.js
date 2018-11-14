import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showList ,showDirector } from '../actions'
import { bindActionCreators } from 'redux'
import MoviesList from '../components/movies_list'

class App extends Component {
  componentWillMount() {
    this.props.showList()
    this.props.showDirector()
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <MoviesList movies={this.props.movies.movies}/>
      </div>
    )
  }
}

const mapStateToProps = (stat)=>{
  return {
    movies: stat.movies,
  }
}
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     showList:()=>{
//       dispatch(showList())
//     },
//     showDirector:()=>{
//       dispatch(showDirector())
//     }
//   }
// }

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    showDirector,
    showList
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App)