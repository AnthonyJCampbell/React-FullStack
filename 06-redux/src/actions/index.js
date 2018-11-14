export function showList(){
  return {
    type: 'MOVIES_LIST',
    payload:["abc","test","hello"]
  }
}

export function showDirector(){
  return {
    type: 'DIRECTORS_LIST',
    payload:["Mike","Alice"]
  }
}