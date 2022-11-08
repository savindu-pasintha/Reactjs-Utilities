import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Router,
  Routes,
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ProductAndServices from './Components/ProductAndServices/ProductAndServices';
import Capabilities from './Components/Capabilities/Capabilities';
import Innovation from './Components/Innovation/Innovation';
import Partners from './Components/Partners/Partners';
import Carrer from './Components/Carrer/Carrer';
import NotFound from './Components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product_services" element={<ProductAndServices />} />
        <Route path="/capalilities" element={<Capabilities />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
