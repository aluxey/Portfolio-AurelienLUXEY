import React from "react";
import ayrinePreview from "../assets/websites/ayrine_nachlife.webp";
import chartreusePreview from "../assets/websites/chartreuse.webp";
import sabbelsPreview from "../assets/websites/sabbels.webp";

const projects = [
  {
    title: "Nachhilfe mit Ayrine",
    description: "Une professeure particulière que les parents contactent en quelques clics.",
    url: "https://www.nachhilfe-mit-ayrine.de/",
    image: ayrinePreview,
    alt: "Page d’accueil du site Nachhilfe mit Ayrine",
  },
  {
    title: "Sabbel’s Handmade",
    description: "Une boutique de crochet avec catalogue, panier et parcours d’achat simple.",
    url: "https://sabbelshandmade.netlify.app/",
    image: sabbelsPreview,
    alt: "Page d’accueil de la boutique Sabbel’s Handmade",
  },
  {
    title: "La Chartreuse de Parme",
    description: "Maquette pour un restaurant italien : le lieu, la carte, les horaires.",
    url: "https://chartreusedeparme.netlify.app/",
    image: chartreusePreview,
    alt: "Page d’accueil de la maquette de La Chartreuse de Parme",
  },
];

const Projects = () => (
  <section id="sites" aria-labelledby="sites-title" className="section scroll-mt-6">
    <h2 id="sites-title" className="section-title mb-10">
      Sites pour de vraies activités
    </h2>
    <div className="grid gap-8 md:grid-cols-3">
      {projects.map((project) => (
        <article key={project.title}>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
            <img
              src={project.image}
              alt={project.alt}
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full rounded-[14px] border border-line"
            />
            <h3 className="mb-1 mt-[18px] text-[22px] font-bold leading-snug tracking-[-0.01em] underline-offset-4 group-hover:underline">
              {project.title}
            </h3>
          </a>
          <p className="text-base text-muted">{project.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
