import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import GloalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <GloalStyle />
    </>
  </Provider>
);

export default App;
