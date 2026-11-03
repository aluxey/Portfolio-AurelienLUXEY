import React from "react";

const links = [
  { label: "Mist", href: "#mist" },
  { label: "Sites clients", href: "#sites" },
  { label: "Offres", href: "#offres" },
  { label: "À propos", href: "#a-propos" },
];

const Navbar = () => (
  <nav aria-label="Navigation principale" className="flex flex-wrap items-center justify-between gap-4 py-7">
    <a href="#top" className="text-xl font-bold tracking-tight">
      Aurélien Luxey
    </a>
    <div className="flex flex-wrap gap-x-7 gap-y-2 text-base">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="underline-offset-4 hover:underline">
          {link.label}
        </a>
      ))}
      <a href="#contact" className="text-link">
        Me contacter
      </a>
    </div>
  </nav>
);

export default Navbar;
