import React from "react";
import { AiFillGithub } from "react-icons/ai";

import placeholder from "../assets/project-placeholder.svg";

const projects = [
  {
    title: "NoteApp",
    description:
      "Application de prise de notes assistée par IA : génération/synthèse automatiques, organisation par tags et recherche améliorée.",
    date: "2024–2025",
    link: "https://github.com/aluxey/NoteApp",
    image: placeholder,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    ],
    techs: ["À compléter"],
  },
  {
    title: "Mentor Agent",
    description:
      "Agent IA envoyant chaque jour des cours sur des thèmes choisis : curation, synthèse et planification automatique.",
    date: "2025",
    link: "https://github.com/aluxey/Mentor_Agent",
    image: placeholder,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    ],
    techs: ["À compléter"],
  },
  {
    title: "Carte du métro de Paris (ING1)",
    description:
      "Projet scolaire : visualisation du réseau (graphe) et calculs d’itinéraires avec Dijkstra, arbres couvrants (Prim, Kruskal). Back Flask, front JS.",
    date: "2024",
    link: "https://github.com/aluxey/Projet_ING1_Graphe",
    image: placeholder,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    ],
    techs: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "E‑Commerce",
    description:
      "Site e‑commerce full‑stack : front React, authentification et base de données avec Supabase, paiements Stripe, panel admin.",
    date: "2024",
    link: "https://github.com/aluxey/E-Commerce",
    image: placeholder,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    ],
    techs: ["React", "Supabase", "Stripe", "JavaScript", "CSS"],
  },
  
];

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 scroll-mt-32" id="work">
      <div className="flex flex-col gap-4 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300">
          Selected work
        </p>
        <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
          My <span className="primary-color">projects</span>
        </h2>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          From academic challenges to professional missions, each project taught me how
          to translate a problem into a reliable, elegant product. Here is a glimpse of
          the journey so far.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-[0_45px_85px_rgba(56,189,248,0.18)]"
          >
            <div className="relative h-56 overflow-hidden px-6 pt-6">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-6 top-6 h-full rounded-3xl bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="absolute left-8 top-8 inline-flex items-center rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-100">
                {project.date}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ouvrir le repo ${project.title}`}
                className="absolute right-8 top-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/70 p-2 text-slate-200 transition hover:border-sky-400/60 hover:bg-sky-500/10"
              >
                <AiFillGithub size={20} />
              </a>
            </div>

            <div className="flex flex-col gap-6 px-6 pb-8 pt-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-200">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {project.icons.map((icon) => (
                  <span
                    key={icon}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 transition duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-500/10"
                  >
                    <img src={icon} alt="" className="h-full w-full object-contain" />
                  </span>
                ))}
              </div>
              {project.techs && project.techs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.15em] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200 transition hover:text-sky-100"
                >
                  Voir le repo
                </a>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  Delivered
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
