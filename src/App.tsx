import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar, Footer } from './components';
import { EnergyOnline, FaqPage, InfoCenter, LandingPage } from './pages';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/faq" component={FaqPage} />
      <Route path="/infocenter" component={InfoCenter} />
      <Route path="/energyonline" component={EnergyOnline} />
      <Route path="/" exact component={LandingPage} />
      <Footer />
    </Router>
  );
}

export default App;
