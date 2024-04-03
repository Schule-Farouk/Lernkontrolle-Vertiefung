import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Aufgabe1 from './Aufgabe1/Aufgabe1';
import Aufgabe2 from './Aufgabe2/Aufgabe2';
import Aufgabe3 from './Aufgabe3/Aufgabe3';
import Aufgabe4 from './Aufgabe4/Aufgabe4';

function App() {
  return (
    <Router>
      <div className="app">
  <Header />
  <Routes>
    <Route path="/aufgabe1" element={<Aufgabe1 />} />
    <Route path="/aufgabe2" element={<Aufgabe2 />} />
    <Route path="/aufgabe3" element={<Aufgabe3 />} />
    <Route path="/aufgabe4" element={<Aufgabe4 />} />
  </Routes>
</div>
    </Router>
  );
}

export default App;