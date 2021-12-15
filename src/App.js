import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';
import NotFound from './components/NotFound';
import Goods from './components/Goods';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Goods />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
