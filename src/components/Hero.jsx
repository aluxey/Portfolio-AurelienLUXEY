import React, { useEffect, useState } from "react";

const themes = [
  { id: "ivoire", label: "Ivoire" },
  { id: "nuit", label: "Nuit" },
  { id: "ambre", label: "Ambre" },
];

const Hero = () => {
  const [theme, setTheme] = useState("ivoire");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <header className="pb-14 pt-14 sm:pt-[88px]">
      <p className="eyebrow mb-7">Développeur full-stack · Bordeaux</p>
      <h1 className="max-w-[1080px] text-[clamp(2.75rem,7.4vw,6.5rem)] font-semibold leading-none tracking-[-0.045em]">
        Je crée des produits que les gens gardent. Et des sites à la hauteur de votre activité.
      </h1>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
        <p className="max-w-[560px] text-[21px] leading-normal text-muted">
          J’ai lancé Mist, une extension utilisée par des milliers de personnes.
          J’apporte la même exigence aux indépendants et aux petites entreprises.
        </p>
        <fieldset>
          <legend className="eyebrow pb-2.5 !text-xs">Changez l’atmosphère</legend>
          <div className="flex flex-wrap gap-2">
            {themes.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={theme === id}
                onClick={() => setTheme(id)}
                className={`min-h-11 cursor-pointer rounded-full border border-ink px-[18px] text-[15px] font-medium transition-colors ${
                  theme === id ? "bg-ink text-paper" : "bg-transparent text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </header>
  );
};

export default Hero;
