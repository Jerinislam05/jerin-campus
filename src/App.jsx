//components
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
