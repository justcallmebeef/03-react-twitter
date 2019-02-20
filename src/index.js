/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import configureStore from './configureStore';
import { loadMessages } from './actions/messageActions';

const { persistor, store } = configureStore();
store.dispatch(loadMessages());

const AppContainer = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <PersistGate loading={ null } persistor={ persistor }>
        <BrowserRouter>
          <div>
            {routes}
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
