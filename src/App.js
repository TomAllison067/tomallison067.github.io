import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
import LeftColumn from './components/LeftColumn'
import routes from './data/routes'
import './App.css';




function App() {
  return (
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


  );
}

export default App;
