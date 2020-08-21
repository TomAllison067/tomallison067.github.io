import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Foo from './components/Foo'

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
