/*
 * @Author: Cao.Hongzhi 
 * @Date: 2019-04-22 16:15:26 
 * @Last Modified by: Cao.Hongzhi
 * @Last Modified time: 2019-04-22 20:58:34
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './views/ControlPanel';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ControlPanel/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
