export function updateNumberOfPeople(number){
  return {
    action:"UPDATE_NUMBER_OF_PEOPLE",
    payload:number
  }
}

export function updateSlicesPerPerson(number){
  return {
    action:"UPDATE_SLICE_PER_PERSON",
    payload:number
  }
}