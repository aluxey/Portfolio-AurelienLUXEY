import React from "react";

const footerLinks = [
  { label: "Accueil", href: "#top" },
  { label: "Projets", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          <span className="font-semibold text-slate-950">Aurélien Luxey</span> — Développeur web full-stack
        </p>
        <nav aria-label="Navigation de pied de page">
          <ul className="flex flex-wrap gap-5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {year} Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
