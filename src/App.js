import React from "react";
import { Routes, Route, } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Crouse from "./Pages/Crouse/Crouse";
import Services from "./Pages/Crouse/Services";
import Footer from "./Pages/Footer/Footer";
import HeroSection from "./Pages/HeroSection/HeroSection";
import Home from "./Pages/Home/Home";
import Navber from "./Pages/Navber/Navber";
import Tastomonial from "./Pages/Tastomonial/Tastomonial";

function App() {
  return (
    <div>
      <Navber />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<Services />}></Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
