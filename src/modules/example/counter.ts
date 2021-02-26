import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction, createReducer, createSelector, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~/modules/rootReducer';
import { mockFetch } from '~/api/mock';

import { createAsyncAction } from '~/utils/redux';

export const increaseCounterAction = createAction('counter/increase');
export const decreaseCounterAction = createAction('counter/decrease');
export const increaseAsyncCounterAction = createAsyncAction<number | undefined, undefined, number, Error>(
  'counter/increaseAsync',
);

interface ExampleReducer {
  countValue: number;
}

const initialState: ExampleReducer = {
  countValue: 0,
};

export const counterReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(increaseCounterAction, (state) => {
      const { countValue } = state;

      return { ...state, countValue: countValue + 1 };
    })
    .addCase(decreaseCounterAction, (state) => {
      const { countValue } = state;

      return { ...state, countValue: countValue - 1 };
    })
    .addCase(increaseAsyncCounterAction.success, increaseCountByPayload),
);

function increaseCountByPayload(state: ExampleReducer, action: PayloadAction<number>): ExampleReducer {
  const { countValue } = state;
  const additionValue = action.payload || 0;

  return { ...state, countValue: countValue + additionValue };
}

export const exampleSelector = (state: RootState) => state.example;
export const countValueSelector = createSelector([exampleSelector], (exampleState) => exampleState.countValue);

export function* increaseCounterAsync() {
  try {
    yield put(increaseAsyncCounterAction.request());
    const response = yield call(mockFetch);

    yield put(increaseAsyncCounterAction.success(response));
  } catch (e) {
    yield put(increaseAsyncCounterAction.failure(e));
  }
}

export const counterSaga = [takeLatest(increaseAsyncCounterAction.index.type, increaseCounterAsync)];
