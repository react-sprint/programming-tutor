import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  countValueSelector,
  decreaseCounterAction,
  increaseAsyncCounterAction,
  increaseCounterAction,
} from '~/modules/example/counter';
import styles from './index.scss';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(countValueSelector);

  return (
    <div>
      <p className={classNames(styles.app, styles.title)}>{value}</p>
      <button type="button" onClick={() => dispatch(increaseCounterAction())}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch(decreaseCounterAction())}>
        Decrease
      </button>
      <button type="button" onClick={() => dispatch(increaseAsyncCounterAction.index())}>
        Async increase
      </button>
    </div>
  );
};

export default Counter;
