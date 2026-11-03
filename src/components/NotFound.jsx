import React from "react";

const NotFound = () => (
  <main className="page flex min-h-[70vh] flex-col items-start justify-center py-16">
    <p className="eyebrow mb-4">Erreur 404</p>
    <h1 className="section-title">Cette page n’existe pas.</h1>
    <p className="mt-5 text-muted">Elle a peut-être été déplacée ou supprimée.</p>
    <a href="/" className="text-link mt-8">
      ← Retour à l’accueil
    </a>
  </main>
);

export default NotFound;
