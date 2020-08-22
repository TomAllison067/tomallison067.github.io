import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/ContactBar';
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
    }
  });
  themeLight = responsiveFontSizes(themeLight);
  return (
    <ThemeProvider theme={themeLight}>
      <ScopedCssBaseline>
        <div className="App">
          <NavBar />
          <div className="flex-container">
            <LeftColumn class="column left" />
            <div className="column right">
              <Switch>
                {routes.map((route, index) => {
                  if (route.used) {
                    return <Route
                      key={index}
                      path={route.path}
                      component={route.component}
                      exact={route.exact}
                    />
                  }})
                }
              </Switch>
            </div>
          </div>
        </div >
      </ScopedCssBaseline>
    </ThemeProvider>

  );
}

export default App;
