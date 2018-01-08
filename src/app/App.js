import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { Spinner } from './components';
import { BASE_URL } from '../Constants';
import Routes from './Routes';
import { ApiMiddleware } from './utils';
import reducers from './redux';

const middlewares = [thunk, ApiMiddleware(BASE_URL)];
const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
      <main>
        <Routes />
      </main>
    </PersistGate>
  </Provider>
);

export default App;