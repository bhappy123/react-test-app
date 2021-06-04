import React from "react";
import Card from "./Cards/Card";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";

import "./Home.css";
import ServiceDetails from "./ServiceDetails.js/ServiceDetails";
import Theme from "./Themes/Theme";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Contact />
      <Theme />
      <ServiceDetails />
    </>
  );
};

export default Home;
