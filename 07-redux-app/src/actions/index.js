import axios from 'axios'
import * as actionTypes from './action_types';

const URL = "http://localhost:3004"

export function artistListAll(){
  const request = axios.get(`${URL}/artists?_limit=6`)
                       .then(response=>response.data)

  return {
    type: actionTypes.GET_ALL_ARTISTS,
    payload: request
  }
}

export function artistList(keyword){
  const request = axios.get(`${URL}/artists?q=${keyword}`)
                       .then(response=>response.data)
  
  return {
    type: actionTypes.GET_ARTISTS,
    payload: request
  }
}

export function artistDetail(id){
  const request = axios.get(`${URL}/artists?id=${id}`)
       .then(response => response.data)
  return {
    type: actionTypes.GET_ARTIST_DETAIL,
    payload: request
  }
}

export function clearArtistDetail(){
  return {
    type: actionTypes.CLEAR_ARTIST_DETAIL
  }
}