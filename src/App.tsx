import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import History from "./components/History";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <History />
      <Profile />
      <Cards />
      <Projects />
      <Reviews />
      <Services />
      <Contact />
      <Logos />
      <Footer />
    </>
  );
}

export default App;
