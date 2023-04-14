import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';
import Quests from './components/pages/Quests';
import Items from './components/pages/Items';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/quests" component={Quests} />
          <Route path="/items" component={Items} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
