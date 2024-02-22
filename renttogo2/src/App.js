
import './App.css';
import React from 'react';

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Category from './Pages/Category';
import ContactMe from './Pages/ContactMe';
import Login from './Pages/Login';
import Footer from './Pages/Footer';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/contactme" element={<ContactMe/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
