import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  );
};

export default App;
