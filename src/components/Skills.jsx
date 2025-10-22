import React from "react";

const categories = [
  {
    name: "Frontend",
    description:
      "Responsive interfaces, delightful interactions, and design systems that scale.",
    gradient: "from-sky-400/40 via-indigo-500/40 to-transparent",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    tags: ["UI/UX polish", "Accessibility", "Atomic design"],
  },
  {
    name: "Backend",
    description: "Robust services, clean architectures, and optimized APIs.",
    gradient: "from-emerald-400/40 via-teal-500/40 to-transparent",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    ],
    tags: ["API design", "Clean code", "Algorithmics"],
  },
  {
    name: "DevOps",
    description: "Deployment pipelines, cloud infrastructure, and observability.",
    gradient: "from-cyan-400/40 via-sky-500/40 to-transparent",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    ],
    tags: ["CI / CD", "Cloud", "Automation"],
  },
  {
    name: "Other Passions",
    description: "Complementary tools that make products reliable and delightful.",
    gradient: "from-pink-400/40 via-purple-500/40 to-transparent",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    ],
    tags: ["Prototyping", "Data", "Systems"],
  },
];

const TechStack = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6" id="stack">
      <div className="flex flex-col gap-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300">
          An evolving toolbox
        </p>
        <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
          My <span className="primary-color">Tech Stack</span>
        </h2>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          From polished frontends to resilient infrastructure, I mix technologies that
          amplify user experience and ensure reliability. These are the tools I rely on
          to ship ambitious projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:border-sky-400/50 hover:bg-slate-900/80"
          >
            <div
              aria-hidden="true"
              className={`absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${category.gradient} blur-3xl transition duration-500 group-hover:scale-125`}
            />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-slate-100">
                  {category.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  Core tools
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                {category.icons.map((icon) => (
                  <div
                    key={icon}
                    className="flex h-20 items-center justify-center rounded-2xl bg-slate-950/40 p-3 shadow-[0_18px_35px_rgba(15,23,42,0.55)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_55px_rgba(56,189,248,0.15)]"
                  >
                    <img src={icon} alt="" className="max-h-12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
