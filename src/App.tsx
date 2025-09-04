
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import UserAccount from './components/UserAccount';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/account" element={<UserAccount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
