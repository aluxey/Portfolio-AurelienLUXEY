import About from "./components/About";
import ContactForm from "./components/Contact";
import Timeline from "./components/Evolution";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import TechStack from "./components/Skills"; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Timeline />
      <ContactForm />
    </div>
  );
}

export default App;
