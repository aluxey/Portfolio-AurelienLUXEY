import React from "react";
import { FiCheckCircle, FiCode, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const benefits = [
  "Sites rapides et performants",
  "Design soigné & sur mesure",
  "SEO & accessibilité",
  "Accompagnement de A à Z",
];

const chips = [
  {
    label: "aurelien.luxeyy@gmail.com",
    href: "mailto:aurelien.luxeyy@gmail.com",
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aurelien-luxey/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/aluxey",
    icon: FiGithub,
  },
];

const Hero = () => {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden px-5 pb-24 pt-32 text-white sm:pt-40 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="absolute right-[-18%] top-16 -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,#7C3AED_0%,rgba(236,72,153,0.55)_42%,rgba(37,99,235,0.22)_68%,transparent_72%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-slate-50" />

      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-100 backdrop-blur">
            Développeur web full-stack
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Je conçois des sites web{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              modernes
            </span>
            , clairs et efficaces
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Développeur web full-stack, j’aide les indépendants, petites entreprises
            et projets locaux à gagner en visibilité grâce à des sites rapides,
            responsive et pensés pour convertir.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-4 text-center text-sm font-semibold text-white shadow-xl shadow-violet-950/30 transition hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
              Voir mes projets
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
              Discutons de votre projet
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => {
              const Icon = chip.icon;
              return (
                <a
                  key={chip.label}
                  href={chip.href}
                  target={chip.href.startsWith("http") ? "_blank" : undefined}
                  rel={chip.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm text-slate-200 transition hover:bg-white/[0.14] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                  aria-label={chip.label}
                >
                  <Icon aria-hidden="true" />
                  {chip.label}
                </a>
              );
            })}
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Disponible pour nouveaux projets
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[24px] border border-white/20 bg-white/10 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-lg">
                <FiCode size={26} aria-hidden="true" />
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                Web partner
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Un site pensé pour vos clients
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              De la structure des pages au déploiement, je vous accompagne pour créer
              une présence web claire et professionnelle.
            </p>
            <ul className="mt-7 grid gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-slate-100">
                  <FiCheckCircle className="text-pink-300" size={18} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
