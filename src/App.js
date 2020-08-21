import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home'
import Foo from './components/Foo'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/foo" component={Foo} />
      </Switch>
    </div>
  );
}

export default App;
