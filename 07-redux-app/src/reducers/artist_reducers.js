import * as actionTypes from '../actions/action_types'
export default function reducers(state={},action){
  switch(action.type){
    case actionTypes.GET_ALL_ARTISTS:
    case actionTypes.GET_ARTISTS:
      return {...state, artists:action.payload}
    case actionTypes.GET_ARTIST_DETAIL:
      return {...state,artist_detail:action.payload}
    case actionTypes.CLEAR_ARTIST_DETAIL:
      return {...state,artist_detail:null}
    default:
      return state;
  }
}