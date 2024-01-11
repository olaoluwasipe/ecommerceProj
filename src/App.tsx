import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { CartProvider } from './Context/CartContext';
import './App.css';
import Home from './Home';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
