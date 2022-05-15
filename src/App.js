import React from 'react';
import Weather from './screens/Weather';
import ArMain from './screens/ArMain';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Weather />} path={'/'} />
        <Route element={<ArMain />} path={'/armain'} />
      </Routes>
    </Router>
  );
}

export default App;
