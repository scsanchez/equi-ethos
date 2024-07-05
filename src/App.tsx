import WhatWeDo from "./components/WhatWeDo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import History from "./components/History";
import Partners from "./components/Partners";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
        <Hero />
        <History />
        <WhoWeAre />
        <WhatWeDo />
        <Projects />
        <Reviews />
        <Contact />
        <Partners />
      </main>

      <Footer />
    </>
  );
}

export default App;
