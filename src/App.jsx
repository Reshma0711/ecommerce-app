import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart"; // Assuming you have a Cart component
import About from "./components/About"; // Assuming you have an About component
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/home" element={<h1>Welcome to Shopy</h1>} />
          <Route path="/shop" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<h1>Welcome to Shopy!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
