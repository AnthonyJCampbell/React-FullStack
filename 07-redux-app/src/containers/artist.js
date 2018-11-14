import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions'
class Artist extends Component {
    componentWillMount() {
        this.props.artistDetail(this.props.match.params.id)
    }
    componentWillUnmount () {
        this.props.clearArtistDetail()
    }
    
    render(){
        console.log(this.props)
        if(!this.props.artist){
          return null
        }
        const artist = this.props.artist[0]
        return (
            <div className="artist_view">
                <div className="artist_background" style={{
                    background:`url(/images/${artist.cover})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{artist.name}</div>
                </div>
                <div className="artist_description">
                    <p>{artist.bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {artist.style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    { artist.albums ? 
                        artist.albums.map( item =>(
                        <div key={item.cover} className="albums">
                            <div className="cover" style={{
                                background:`url(/images/albums/${item.cover})`
                            }}>
                            </div>
                                
                        </div>
                    ))
                    :null
                }
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    artist: state.artists && state.artists.artist_detail
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Artist);