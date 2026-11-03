import React from "react";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="page flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-8 text-base text-muted">
      <p suppressHydrationWarning>© {new Date().getFullYear()} Aurélien Luxey</p>
      <a className="underline-offset-4 hover:underline" href="/mentions-legales/">
        Mentions légales
      </a>
    </div>
  </footer>
);

export default Footer;
