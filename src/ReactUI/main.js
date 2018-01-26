/*
* @Author: yuey9507
* @Date:   2018-01-22 18:06:04
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-01-26 16:57:22
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './SemanticUIReactApp.js';

const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      		<App />
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

if (module.hot) {
  module.hot.accept();
}