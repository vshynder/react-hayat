import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from './components';
import { EnergyOnline, InfoCenter, LandingPage } from './pages';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/infocenter" component={InfoCenter} />
      <Route path="/energyonline" component={EnergyOnline} />
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
}

export default App;
