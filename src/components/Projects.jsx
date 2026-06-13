import React from "react";
import { FiArrowUpRight, FiCode, FiLayers, FiMonitor, FiZap } from "react-icons/fi";
import ayrinePreview from "../assets/websites/ayrine_nachlife.png";
import sabbelsPreview from "../assets/websites/sabbels.png";
import chartreusePreview from "../assets/websites/chartreuse.png";

const projects = [
  {
    title: "Nachhilfe mit Ayrine",
    type: "Site vitrine",
    description:
      "Site vitrine pour une professeure particulière. Design épuré, présentation claire des services et prise de contact simplifiée.",
    url: "https://www.nachhilfe-mit-ayrine.de/",
    image: ayrinePreview,
    gradient: "from-blue-500 via-violet-500 to-pink-500",
  },
  {
    title: "Sabbel’s Handmade",
    type: "E-commerce",
    description:
      "Boutique en ligne pour une activité artisanale de crochet. Catalogue produits, panier et parcours d’achat simple.",
    url: "https://sabbelshandmade.netlify.app/",
    image: sabbelsPreview,
    gradient: "from-pink-500 via-rose-400 to-violet-500",
  },
  {
    title: "La Chartreuse de Parme",
    type: "Restaurant",
    description:
      "Maquette fonctionnelle de site vitrine pour un restaurant italien. Présentation du lieu, de la carte, des horaires et des moyens de contact.",
    url: "https://chartreusedeparme.netlify.app/",
    image: chartreusePreview,
    gradient: "from-emerald-500 via-blue-500 to-violet-500",
  },
];

const stats = [
  { value: "3+", label: "Projets réalisés", icon: FiLayers },
  { value: "100%", label: "Projets responsive", icon: FiMonitor },
  { value: "24h", label: "Réactivité", icon: FiZap },
  { value: "Full-stack", label: "Front & back", icon: FiCode },
];

const ProjectPreview = ({ title, image, gradient }) => (
  <div className={`relative overflow-hidden rounded-t-[20px] bg-gradient-to-br ${gradient} p-3 sm:p-4`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent)]" />
    <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/80 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-950/5 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-slate-200/80 bg-white/90 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
        <span className="ml-auto h-2 w-16 rounded-full bg-slate-200" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={`Aperçu du site ${title}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/20 to-transparent" />
      </div>
    </div>
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
              <ProjectPreview title={project.title} image={project.image} gradient={project.gradient} />
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
                  aria-label={`Voir le projet ${project.title}`}
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
