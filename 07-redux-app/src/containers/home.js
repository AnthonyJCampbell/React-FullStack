import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Search from '../components/search';
import Artistlist from '../components/artistlist';
import * as actionCreators from '../actions'
class Home extends Component { 

    state = {
        artists:[]
    }

    componentWillMount() {
      this.props.artistListAll()
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key);
    }

    render(){
        return (
            <div>
                <Search keywords={this.getKeywords} />
                <Artistlist artists={this.props.artists.artists}/>
            </div>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);