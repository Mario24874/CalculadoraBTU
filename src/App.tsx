import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import BtuCalculator from './BtuCalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/calculator" element={<BtuCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;