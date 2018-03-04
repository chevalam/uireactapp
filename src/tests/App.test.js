import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue500,orange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../index.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
  <MuiThemeProvider>
  <App />
  </MuiThemeProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
