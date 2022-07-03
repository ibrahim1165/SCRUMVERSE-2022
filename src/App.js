import React from "react";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import HeroSection from "./Pages/HeroSection/HeroSection";
import Home from "./Pages/Home/Home";
import Navber from "./Pages/Navber/Navber";

function App() {
  return (
    <div>
      <Navber />
     <Home />
     <HeroSection />
     <Footer />
    </div>
  );
}

export default App;
