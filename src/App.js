import React from "react";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import HeroSection from "./Pages/HeroSection/HeroSection";
import Home from "./Pages/Home/Home";
import Navber from "./Pages/Navber/Navber";
import Tastomonial from "./Pages/Tastomonial/Tastomonial";

function App() {
  return (
    <div>
      <Navber />
     <Home />
     <HeroSection />
     <Tastomonial />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
