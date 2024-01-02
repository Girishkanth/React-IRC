import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Home from './Components/Home/home';
import Products from './Components/Products/products';
import AdminLogin from './Components/AdLogin/adminlogin';
import Dashboard from './Components/Dashboard/dashboard';
import AboutUs from './Components/AboutUs/aboutus';
import ContactUs from './Components/ContactUs/contactus';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
