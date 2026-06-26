import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Articals from "./components/articals/Articals";

const App = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Leadrship", path: "/leadrship" },
    { name: "Gallery", path: "/gallery" },
    { name: "Donation", path: "/donation" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <div className="">
      <Navbar logo="/Aimim-logo.png" links={navLinks} />
      <Hero />
      <Articals />
    </div>
  );
};

export default App;
