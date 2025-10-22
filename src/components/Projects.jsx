import React from "react";

import disco from "../assets/disco.png";
import leo from "../assets/leoBlue.png";
import lib from "../assets/libReact.png";
import lowatem from "../assets/Lowatem.png";
import movieApp from "../assets/movy.png";
import weatherApp from "../assets/weatherApp.png";

const projects = [
  {
    title: "Weather Application",
    description:
      "I created a weather app using JavaScript to explore the language and learn how to work with APIs.",
    date: "January 2024",
    link: "https://example.com/project1",
    image: weatherApp,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ],
  },
  {
    title: "LeoBlue",
    description:
      "During my internship, I developed a Flutter app for iOS that receives data from satellites and alerts users about potential weather hazards.",
    date: "August 2023",
    link: "https://example.com/project1",
    image: leo,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    ],
  },
  {
    title: "Lowatem",
    description:
      "Lowatem, my first major IT project, is a Java-based game. We developed the game's logic as well as its AI.",
    date: "November 2022",
    link: "https://example.com/project2",
    image: lowatem,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    ],
  },
  {
    title: "Moovy",
    description:
      "I created a movie library application to delve into advanced JavaScript concepts and API integration.",
    date: "September 2023",
    link: "https://example.com/project2",
    image: movieApp,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
    ],
  },
  {
    title: "The library",
    description:
      "To complete a university project, I created a simple, fast, and accessible online library using public APIs. This project allowed me to discover how to simplify and optimize queries in JavaScript and explore different methods of retrieving information.",
    date: "February 2024",
    link: "https://example.com/project2",
    image: lib,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    ],
  },
  {
    title: "Discography",
    description:
      "This C# .NET application allows users to catalog albums and manage their borrowing. Users can view borrowed albums, check return dates, and track overdue albums.",
    date: "November 2023",
    link: "https://example.com/project2",
    image: disco,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
    ],
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
              <div className="flex items-center justify-between pt-2">
                <a
                  href={project.link}
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200 transition hover:text-sky-100"
                >
                  View project
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
