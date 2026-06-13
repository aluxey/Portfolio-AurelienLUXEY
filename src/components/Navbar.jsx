import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Accueil", href: "#top" },
  { label: "Projets", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Offres", href: "#offers" },
  { label: "À propos", href: "#about" },
  { label: "Méthode", href: "#method" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-slate-950/85 shadow-lg shadow-slate-950/20 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950 shadow-lg shadow-violet-500/20">
            AL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-white transition group-hover:text-violet-100">
              Aurélien Luxey
            </span>
            <span className="text-xs font-medium text-slate-400">Développeur Web</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-1 py-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 lg:inline-flex">
          Discutons de votre projet
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
