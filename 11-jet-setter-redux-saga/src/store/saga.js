import { all, call, put, takeLatest } from 'redux-saga/effects';

import Api from '../lib/api';


import { updateAllItems } from '../actions/items-actions';
import { FETCH_ITEMS } from '../constants';

export default function* rootSaga(){
  yield all([fetchItemsFromAPI()]);
}

export function* fetchItemsFromAPI(){
  yield takeLatest(FETCH_ITEMS, makeApiRequest);
}

export function* makeApiRequest(){
  console.log("fetch...")
  const items = yield call(Api.getAll);
  yield put(updateAllItems(items))
}
