import { all } from 'redux-saga/effects';

import { counterSaga } from './example/counter';

export default function* rootSaga() {
  yield all([...counterSaga]);
}
