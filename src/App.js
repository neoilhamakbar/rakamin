import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';


function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
        <Header/>   
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          </Routes>
        <Footer/>    
          
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
