import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const handleMobileClick = () => setNavOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 via-sky-400 to-emerald-400 shadow-[0_0_20px_rgba(56,189,248,0.45)]" />
          Aurélien Luxey
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative">
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-sky-300"
              >
                {link.label}
              </a>
              <span className="pointer-events-none absolute inset-x-0 -bottom-3 block h-px scale-x-0 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent transition duration-300 group-hover:scale-x-100" />
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-2 text-xs uppercase tracking-widest text-sky-200 transition duration-300 hover:bg-sky-500/20 hover:text-white"
            >
              Let’s talk
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={toggleNav}
          className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 ${
          navOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-4 mb-6 space-y-4 rounded-2xl border border-white/10 bg-slate-950/90 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Navigation
            </p>
            <button
              type="button"
              onClick={toggleNav}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20"
              aria-label="Close navigation menu"
            >
              <AiOutlineClose size={16} />
            </button>
          </div>
          <ul className="space-y-3 text-lg text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleMobileClick}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-sky-400/60 hover:bg-sky-500/10"
                >
                  {link.label}
                  <span className="text-xs uppercase tracking-[0.3em] text-sky-200">
                    go
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleMobileClick}
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em]"
              >
                Let’s talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
