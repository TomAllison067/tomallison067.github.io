import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LeftColumn from './components/LeftColumn'
import routes from './data/routes'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import './App.css';






function App() {
  let themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#fafafa00"
      }
    },
    typography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  });
  themeLight = responsiveFontSizes(themeLight);
  return (
    <ThemeProvider theme={themeLight}>
      <ScopedCssBaseline>
        <div className="App">
          <NavBar />
          <div className="row">
            <LeftColumn class="column left" />
            <div className="column right">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))}
              </Switch>
            </div>
          </div>
          <Footer />
        </div >
      </ScopedCssBaseline>
    </ThemeProvider>

  );
}

export default App;
