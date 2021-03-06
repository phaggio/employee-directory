import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>


      <div>
        <Navbar />
        <Route exact path="/" component={Home} />

      </div>
    </Router>
  );
}

export default App;
