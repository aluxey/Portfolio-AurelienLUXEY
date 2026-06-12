import React from "react";
import { FiArrowUpRight, FiCode, FiLayers, FiMonitor, FiZap } from "react-icons/fi";

const projects = [
  {
    title: "Nachhilfe mit Ayrine",
    type: "Site vitrine",
    description:
      "Site vitrine pour une professeure particulière. Design épuré, présentation claire des services et prise de contact simplifiée.",
    url: "https://www.nachhilfe-mit-ayrine.de/",
    gradient: "from-blue-500 via-violet-500 to-pink-500",
  },
  {
    title: "Sabbel’s Handmade",
    type: "E-commerce",
    description:
      "Boutique en ligne pour une activité artisanale de crochet. Catalogue produits, panier et parcours d’achat simple.",
    url: "https://sabbelshandmade.netlify.app/",
    gradient: "from-pink-500 via-rose-400 to-violet-500",
  },
  {
    title: "La Chartreuse de Parme",
    type: "Restaurant",
    description:
      "Maquette fonctionnelle de site vitrine pour un restaurant italien. Présentation du lieu, de la carte, des horaires et des moyens de contact.",
    url: "https://chartreusedeparme.netlify.app/",
    gradient: "from-emerald-500 via-blue-500 to-violet-500",
  },
];

const stats = [
  { value: "3+", label: "Projets réalisés", icon: FiLayers },
  { value: "100%", label: "Projets responsive", icon: FiMonitor },
  { value: "24h", label: "Réactivité", icon: FiZap },
  { value: "Full-stack", label: "Front & back", icon: FiCode },
];

const ProjectPreview = ({ title, gradient }) => (
  <div className={`h-56 rounded-t-[20px] bg-gradient-to-br ${gradient} p-5`}>
    <div className="flex h-full flex-col rounded-2xl border border-white/25 bg-white/85 p-4 shadow-xl backdrop-blur">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <span className="h-3 w-3 rounded-full bg-red-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
      </div>
      <div className="flex flex-1 flex-col justify-between pt-5">
        <div>
          <div className="h-3 w-24 rounded-full bg-slate-200" />
          <div className="mt-4 h-6 w-9/12 rounded-full bg-slate-900" />
          <div className="mt-3 h-3 w-7/12 rounded-full bg-slate-300" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className="h-14 rounded-xl bg-slate-100" />
          <span className="h-14 rounded-xl bg-slate-100" />
          <span className="h-14 rounded-xl bg-slate-100" />
        </div>
      </div>
    </div>
    <span className="sr-only">Aperçu du projet {title}</span>
  </div>
);

const Projects = () => {
  return (
    <section className="section-shell pt-24" id="projects">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="section-label">PROJETS RÉCENTS</p>
          <h2 className="section-heading">Des réalisations pensées pour mes clients</h2>
          <p className="section-description">
            Des exemples concrets de sites conçus pour rendre une activité plus
            lisible, inspirer confiance et faciliter la prise de contact.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card group overflow-hidden p-0">
              <ProjectPreview title={project.title} gradient={project.gradient} />
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:gap-3 hover:text-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  Voir le projet <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-violet-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-violet-50/70 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-2xl font-bold text-slate-950">{item.value}</span>
                    <span className="text-sm font-medium text-slate-500">{item.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
