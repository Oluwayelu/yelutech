import React from 'react';
import { 
  Paper,
  CssBaseline,
  Typography,
 } from '@material-ui/core'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

import store from './store'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
    },
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1D'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(5),
    padding: theme.spacing(10)
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper square className={classes.root}>
          <Paper square elevation={5} className={classes.paper}>
            <Typography variant="h5">
              React Starter Pack with Redux and Adsence
            </Typography>
          </Paper>
        </Paper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
