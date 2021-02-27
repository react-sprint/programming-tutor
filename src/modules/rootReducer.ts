import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '~/modules/example/counter';

const rootReducer = combineReducers({
  example: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
