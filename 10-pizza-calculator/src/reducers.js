import { combineReducers } from 'redux'

function pizzaReducer(state={},action){
  switch(action.type){
    case 'UPDATE_NUMBER_OF_PEOPLE':
    return {...state,numberOfPeople:action.payload};
    case 'UPDATE_SLICE_PER_PERSON':
    return {...state,slicesPerPerson:action.payload};
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  pizza:pizzaReducer
})

export default rootReducer;