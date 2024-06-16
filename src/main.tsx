import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "./components/Projects.tsx";
import "./index.css";
import Cards from "./components/Cards.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import Contact from "./components/Contact.tsx";
import Profile from "./components/Profile.tsx";
import Reviews from "./components/Reviews.tsx";
import History from "./components/History.tsx";
import Logos from "./components/Logos.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <History />
    <Profile />
    <Cards />
    <Projects />
    <Reviews />
    <Contact />
    <Logos/>
    <Footer />
  </React.StrictMode>
);
