import React from "react";
import { FiCheckCircle, FiCode, FiCompass, FiMessageSquare, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    title: "Écoute & découverte",
    text: "Comprendre votre activité, vos objectifs et vos contraintes.",
    result: "Un brief clair et priorisé",
    icon: FiMessageSquare,
  },
  {
    title: "Conception & structure",
    text: "Définir les pages, les contenus et le parcours utilisateur.",
    result: "Une direction simple à valider",
    icon: FiCompass,
  },
  {
    title: "Développement",
    text: "Créer un site responsive, propre et performant.",
    result: "Une interface moderne et fiable",
    icon: FiCode,
  },
  {
    title: "Tests & mise en ligne",
    text: "Vérifier l’affichage, corriger les détails et publier le site.",
    result: "Un lancement maîtrisé",
    icon: FiCheckCircle,
  },
  {
    title: "Suivi",
    text: "Rester disponible pour les ajustements et évolutions.",
    result: "Un site qui peut évoluer",
    icon: FiTrendingUp,
  },
];

const Method = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white lg:px-8" id="method">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" aria-hidden="true" />

      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-300">MÉTHODE</p>
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Une approche claire, collaborative et sans flou
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
              Chaque étape sert une décision concrète : comprendre, structurer,
              construire, vérifier, puis faire évoluer. Vous savez toujours où en est
              le projet et ce qui arrive ensuite.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-md lg:grid-cols-1">
              {[
                "Étapes visibles",
                "Retours réguliers",
                "Livraison propre",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 shadow-[0_0_18px_rgba(192,132,252,0.8)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ol className="relative grid gap-5">
            <span className="absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-violet-400 via-pink-400 to-violet-400 sm:block" aria-hidden="true" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="group relative grid gap-4 rounded-[26px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.09] sm:grid-cols-[72px_1fr] sm:p-6">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 text-white shadow-xl shadow-violet-950/40 ring-4 ring-slate-950">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
                        Étape {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-pink-200">{step.result}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Method;
