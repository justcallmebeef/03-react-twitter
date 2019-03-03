import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root', 
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );

  let persistor = persistStore(store);
  return { store, persistor };
}
