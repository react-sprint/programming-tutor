import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { store } from '~/modules';
import Counter from './counter';

const App: React.FC = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default hot(App);
