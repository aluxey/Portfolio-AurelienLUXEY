import React from "react";

const NotFound = () => (
  <main className="section-shell flex min-h-[70vh] items-center">
    <div className="section-container text-center">
      <p className="section-label">ERREUR 404</p>
      <h1 className="section-heading">Cette page n’existe pas</h1>
      <p className="section-description">Elle a peut-être été déplacée ou supprimée.</p>
      <a href="/" className="mt-8 inline-flex rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
        Retour à l’accueil
      </a>
    </div>
  </main>
);

export default NotFound;
