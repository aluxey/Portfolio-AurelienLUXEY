import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Legal from "./components/Legal";
import Mist from "./components/Mist";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Offers from "./components/Offers";
import Projects from "./components/Projects";
import { normalizePath } from "./site";

const Home = () => (
  <>
    <a href="#mist" className="skip-link">
      Aller au contenu
    </a>
    <div className="page">
      <Navbar />
      <Hero />
      <main>
        <Mist />
        <Projects />
        <Offers />
        <About />
        <ContactForm />
      </main>
    </div>
  </>
);

const routes = {
  "/": Home,
  "/mentions-legales/": Legal,
};

function App({ path }) {
  const Page = routes[normalizePath(path)] ?? NotFound;

  return (
    <div className="min-h-screen" id="top">
      <Page />
      <Footer />
    </div>
  );
}

export default App;
