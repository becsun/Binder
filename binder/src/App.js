import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Components/Common/Home'
import Chat from './Components/Messages/Chat'
import BunnyCards from './BunnyCards';
import ChatScreen from './ChatScreen';

import './App.css';
import WantedAnimal from './Components/WantedAnimals/WantedAminal';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/" component={Home}/>  
      <div>
      <Header />
      <Route path="/BunnyCards" component={BunnyCards}/>
      <Route path="/WantedAnimals" component={WantedAnimal}/>
      <Route path="/chat/:bunnies" component={ChatScreen}/>
      <Route path="/chat" component={Chat}/>
      </div>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
