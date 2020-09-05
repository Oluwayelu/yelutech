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
<<<<<<< HEAD
        <LandingPage />
=======
        <Paper square className={classes.root}>
          <Paper square elevation={5} className={classes.paper}>
            <Typography variant="h5">
              React Starter Pack with Redux and Adsence
            </Typography>
          </Paper>
        </Paper>
>>>>>>> 53393d414461e51895f44f669181a88deaf2ae99
      </ThemeProvider>
    </Provider>
  );
}

export default App;
