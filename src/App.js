import React from "react";
import Destinations from "./components/destinations/Destinations";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import Footer from "./components/footer/Footer";
import ScrollButton from "./components/scrollButton/ScrollButton";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
