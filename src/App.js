import React from 'react';
import {
  CssBaseline,
} from '@material-ui/core'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
//import { createBrowserHistory } from 'history'

import store from './store'
import LandingPage from './views/LandingPage/LandingPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
    },
  }
})

//const hist = createBrowserHistory()

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
