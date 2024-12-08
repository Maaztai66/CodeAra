import React from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import FeatureSection from "./Component/FeatureSection";
import Workflow from "./Component/workflow";
import Pricing from "./Component/pricing";
import ReviewSection from "./Component/ReviewSection";
import Footer from "./Component/footer";

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="amx-w-7xl x-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <ReviewSection/>
    <Footer/>
    </div>
    
    
    </>
  );
};

export default App;
