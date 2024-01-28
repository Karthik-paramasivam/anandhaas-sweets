import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Sweets from './Sweets';
import Milksweets from './Milksweets';
import Kajusweets from './Kajusweets';
import Savouries from './Savouries';
import Mixture from './Mixture'; 
import Muruku from './Muruku'; 
import BabyMilkCake from './Babymilkcake';
import Gifting from './Gifting';
import About from './About';
import Blog from './Blog';
import News from './News';
import Contact from './Contact';
import CartPage from './CartPage';
import ProfilePage from './ProfilePage';
import Checkout from './Checkout'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sweets" element={<Sweets />} />
          <Route path="sweets/*" element={<Milksweets />} /> 
          <Route path="sweets/milksweets/babymilkcake" element={<BabyMilkCake />} />
          <Route path="sweets/kajusweets" element={<Kajusweets />} />
          <Route path="savouries" element={<Savouries />} />
          <Route path="savouries/*" element={<Mixture />} /> 
          <Route path="savouries/muruku" element={<Muruku />} /> 
          <Route path="gifting" element={<Gifting />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

