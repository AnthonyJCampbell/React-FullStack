export default function movieReducers(state={},action){
  switch(action.type){
    case 'MOVIES_LIST':
    return { ...state, movies:action.payload}
    case 'DIRECTORS_LIST':
    console.log(action)
    return {...state,directors:action.payload}
    default:
    return state
  }
}
