import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Legal from "./components/Legal";
import Method from "./components/Method";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Offers from "./components/Offers";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechStack from "./components/Skills";
import { normalizePath } from "./site";

const Home = () => (
  <>
    <a href="#projects" className="skip-link">
      Aller au contenu
    </a>
    <header className="relative overflow-hidden bg-slate-950">
      <Navbar />
      <Hero />
    </header>

    <main className="overflow-clip">
      <Projects />
      <Services />
      <Offers />
      <TechStack />
      <Method />
      <About />
      <ContactForm />
    </main>
  </>
);

const routes = {
  "/": Home,
  "/mentions-legales/": Legal,
};

function App({ path }) {
  const Page = routes[normalizePath(path)] ?? NotFound;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950" id="top">
      <Page />
      <Footer />
    </div>
  );
}

export default App;
