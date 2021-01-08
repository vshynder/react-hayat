import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './app.scss';

import { NavBar } from './components';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
