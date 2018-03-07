import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Shelf from './components/shelf';
import Bin from './components/bin';
import Create from './components/create';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ Home } exact/>
          <Route path="/shelf/:shelfletter" component={ Shelf }/>
          <Route path="/Bin/:shelfletter/:num" component={ Bin }/>
          <Route path="/create/:shelfletter/:num" component={ Create }/>
        </Switch>
      </div>
    );
  }
}

export default App;
