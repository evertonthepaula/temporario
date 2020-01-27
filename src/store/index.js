import { createStore } from 'redux';

import reducers from './modules/rootReducers';

const store = createStore(reducers);

export default store;
