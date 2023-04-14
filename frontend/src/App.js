import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Quests from './components/pages/Quests';
import Items from './components/pages/Items';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/quests" component={Quests} />
          <Route exact path="/items" component={Items} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
