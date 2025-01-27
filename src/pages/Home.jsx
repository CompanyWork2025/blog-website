import React from "react";
import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Why from "../components/Home/Why";
import Slider from "../components/Home/Slider";
import FAQ from "../components/Home/FAQ";
import Subscribe from "../components/Home/Subscribe";

const Home = () => {
    return (
        <>
          <Hero />
          <Intro />
          <About />
          <Why />
          <Slider />
          <FAQ />
          <Subscribe />
        </>
    )
} 
export default Home;