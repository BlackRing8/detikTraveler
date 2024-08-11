import React from "react";
import "../App.css";
import Hero from "./home_component/Hero";
import Tentang from "./home_component/Tentang";
import { Header } from "./Header";
import Footer from "./Footer";
import Berita from "./home_component/Berita";

const Home = () => {
  return (
    <>
      <Hero />
      <Tentang />
      <Berita />
    </>
  );
};

export default Home;
