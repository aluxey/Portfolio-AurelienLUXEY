import About from "./components/About";
import ContactForm from "./components/Contact";
import Timeline from "./components/Evolution";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/Skills";

function App() {
  return (
    <div className="relative overflow-hidden" id="top">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
      >
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/50 via-purple-500/40 to-pink-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-emerald-400/40 via-cyan-500/30 to-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 left-[-15%] h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-rose-500/40 via-orange-500/25 to-yellow-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-32 md:gap-40">
        <Navbar />
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Timeline />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
