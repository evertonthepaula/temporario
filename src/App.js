import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';
import Routes from './routes/routes';
import GloalStyle from './styles/global';

export default () => (
  <Provider store={store}>
    <>
      <Routes />
      <GloalStyle />
    </>
  </Provider>
);
