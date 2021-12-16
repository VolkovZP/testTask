import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Goods from './components/Goods';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Goods />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
