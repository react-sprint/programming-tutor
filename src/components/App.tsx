import React from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader/root';
import styles from './App.scss';

const App: React.FC = () => <div className={classNames(styles.app, styles.title)}>App.tsx</div>;

export default hot(App);
