import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechStack from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950" id="top">
      <header className="relative overflow-hidden bg-slate-950">
        <Navbar />
        <Hero />
      </header>

      <main className="overflow-hidden">
        <Projects />
        <Services />
        <Offers />
        <TechStack />
        <Method />
        <About />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
