import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import HomePage from './Components/Pages/Home/HomePage';
import AboutPage from './Components/Pages/About/AboutPage';
import MenuPage from './Components/Pages/Menu/MenuPage';
import ContactPage from './Components/Pages/Contact/ContactPage';

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
