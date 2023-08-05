import { React } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";

import { navLinks } from "./constant";

export default function App() {
  return (
    <div className="App">
      <Navbar navArrayLinks={navLinks} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
      </Routes>
      <Footer />
    </div>
  );
}
