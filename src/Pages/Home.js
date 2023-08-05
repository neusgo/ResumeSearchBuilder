import "../App.css";
import * as React from "react";

import Header from "../Components/Header";

import Search from "../Components/Search";

import Testimonial from "../Components/Testimonial";

import Stats from "../Components/Stats";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Testimonial />
      <Stats />
    </div>
  );
};

export default Home;