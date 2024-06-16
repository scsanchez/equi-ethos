import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "./components/Projects.tsx";
import "./index.css";
import Cards from "./components/Cards.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import Contact from "./components/Contact.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Cards />
    <Projects />
    <Contact/>
    <Footer />
  </React.StrictMode>
);
