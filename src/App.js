import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';
import NotFound from './components/NotFound';
import Goods from './components/Goods';



function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cart'>cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Goods />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
