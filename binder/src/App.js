import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BunnyCards from './BunnyCards';
import Chats from './Chats';
import SwipeButtons
 from './SwipeButtons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/chat">
          <Header backButton="/"/>
          <Chats />
            <h1>chat page</h1>
          </Route>
          <Route path="/">
            <Header />
            <BunnyCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
