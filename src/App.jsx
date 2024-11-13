import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Navbar and Hero section */}
        <div className="bg-hero-pattern bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main content sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
     

        {/* Resume Route */}
  

        {/* Contact section with StarsCanvas */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
   
    </BrowserRouter>

    
  );
};

export default App;
