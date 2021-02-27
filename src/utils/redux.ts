import { createAction } from '@reduxjs/toolkit';

export function createAsyncAction<I, R, S, F>(actionType: string) {
  return {
    index: createAction<I>(`${actionType}/index`),
    request: createAction<R>(`${actionType}/request`),
    success: createAction<S>(`${actionType}/success`),
    failure: createAction<F>(`${actionType}/failure`),
  };
}
