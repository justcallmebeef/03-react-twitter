import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            {routes}
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
