import React from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader/root';
import './App.scss';

const App: React.FC = () => <div className={classNames('app', 'title')}>App.tsx</div>;

export default hot(App);
