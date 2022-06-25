import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import RoutesPages from './components/Routes';

function App() {
  return (
    <Router>
      <div>
        <RoutesPages />
      </div>
    </Router>
  );
}

export default App;
