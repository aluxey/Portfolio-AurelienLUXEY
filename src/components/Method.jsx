import React from "react";

const steps = [
  {
    title: "Écoute & découverte",
    text: "Comprendre votre activité, vos objectifs et vos contraintes.",
  },
  {
    title: "Conception & structure",
    text: "Définir les pages, les contenus et le parcours utilisateur.",
  },
  {
    title: "Développement",
    text: "Créer un site responsive, propre et performant.",
  },
  {
    title: "Tests & mise en ligne",
    text: "Vérifier l’affichage, corriger les détails et publier le site.",
  },
  {
    title: "Suivi",
    text: "Rester disponible pour les ajustements et évolutions.",
  },
];

const Method = () => {
  return (
    <section className="section-shell" id="method">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="section-label">MÉTHODE</p>
          <h2 className="section-heading">Une approche claire et collaborative</h2>
          <p className="section-description">
            Un projet web fonctionne mieux quand les étapes sont simples, visibles et
            centrées sur le besoin réel de votre activité.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 lg:max-w-4xl">
          <span className="absolute bottom-8 left-6 top-8 hidden w-px bg-violet-100 sm:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.title} className="relative grid gap-4 rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.07)] sm:grid-cols-[64px_1fr]">
              <span className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-500 text-sm font-bold text-white shadow-lg shadow-violet-200">
                {index + 1}
              </span>
              <span>
                <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Method;
