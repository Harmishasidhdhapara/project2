import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router, Routes, and Route
import Home from './Pages/Home';           // Import your page components
import About from './Pages/About';
import Blog from './Pages/Blog';
import Navbar from './Components/Navbar';
import Service from './Pages/Service';
import Portflio from './Pages/Portflio';
import Herosection from './Components/Herosection';
import Creativity from './Components/Creativity';
import Customer from './Components/Customer';
import Testimonals from './Components/Testimonals';
import Tech from './Components/Tech';
import Footer from './Components/Footer';
import Servicess from './Pages/Servicess';

const App = () => {
  return (
    <>
      
      <Router>  {/* Wrap the entire app with Router */}
    <Navbar/>
    <Herosection/>
    <Servicess/> {/* Include the Navbar component */}
    <Creativity/>
    <Customer/>
    <Testimonals/>
    <Tech/>
    <Footer/>
    
  
      <Routes> {/* Define the routes */}
        <Route path="/" element={<Home />} />       {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/services" element={<Service />} /> {/* Services page route */}
        <Route path="/portfolio" element={<Portflio />} /> {/* Portfolio page route */}
        <Route path="/blog" element={<Blog />} /> {/* Blog page route */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
