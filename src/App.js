import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Container from '@material-ui/core/Container';

import routes from './data/routes'
import './App.css';




function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
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
      </Container>
    </div>
  );
}

export default App;
