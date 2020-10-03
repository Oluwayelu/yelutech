import React from 'react';
import {
  CssBaseline,
} from '@material-ui/core'
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import store from './store'
import LandingPage from './views/LandingPage/LandingPage';
import AboutPage from './views/About/AboutPage';
import ContactPage from './views/Contact/ContactPage';
import ServicesPage from './views/Services/ServicesPage';
import BlogPage from './views/Blog/BlogPage';

import 'react-datetime/css/react-datetime.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
    },
  }
})

const hist = createBrowserHistory()

function App() {
  return (
    <Provider store={store} >
      <Router history={hist}>
        <div style={{ backgroundColor: "#999999" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
