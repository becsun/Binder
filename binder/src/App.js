import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BunnyCards from './BunnyCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <BunnyCards />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
