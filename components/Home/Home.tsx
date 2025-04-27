import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import NewLetter from "./NewLetter/NewLetter";
//import News from "./News/News";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Destination/>
      <Hotel/>
      <WhyChoose/>
      <Review/>
      <NewLetter/>
      
    </div>
  );
};

export default Home;
