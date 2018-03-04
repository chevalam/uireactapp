import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue500,orange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const muiTheme = getMuiTheme({
    palette: {
        primary: blue500,
        secondary: orange500,
        error: red500,
    },
});

ReactDOM.render(
  <BrowserRouter>
  <MuiThemeProvider muiTheme={muiTheme}>
  <App />
  </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
