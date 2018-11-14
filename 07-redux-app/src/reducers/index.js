import {combineReducers} from 'redux'
import artists from './artist_reducers';

const rootReducers = combineReducers({
  artists
})

export default rootReducers;