// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";




import Navbar from "./Components/navbar/Navbar.js";
import Home from "./Components/Home.js";
import Contact from "./Components/contact/Contact.js";
import About from "./Components/about/About.jsx";
import Client from "../src/Components/client/Client.jsx"
import Sevices from './Components/service/Sevices.jsx'
import about from './Components/about/About.jsx'
import Gallery from './Components/gallery/Gallery.jsx' 
import Policy from './Components/privacypolicy/PrivacyPolicy.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
         
         <Navbar /> 
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Sevices />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/policy" element={<Policy />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;






