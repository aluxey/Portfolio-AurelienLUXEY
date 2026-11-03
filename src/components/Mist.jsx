import React from "react";
import mistScreenshot from "../assets/mist-minimal.webp";
import { mistStats } from "../site";

const stats = [
  { label: "Utilisateurs actifs", value: mistStats.users },
  { label: "Note Chrome", value: mistStats.rating },
].filter((stat) => stat.value);

const Mist = () => (
  <section id="mist" aria-labelledby="mist-title" className="scroll-mt-6 pb-16 pt-6 sm:pb-24">
    <img
      src={mistScreenshot}
      alt="L’extension Mist en version minimale : une horloge, une barre de recherche et trois raccourcis sur fond sombre"
      width="1280"
      height="800"
      className="block h-auto w-full rounded-[20px]"
    />
    <div className="mt-10 grid gap-10 md:grid-cols-3">
      <div>
        <p className="eyebrow mb-2.5">Projet phare · Mist</p>
        <h2 id="mist-title" className="text-[40px] font-semibold leading-[1.08] tracking-[-0.03em]">
          Un nouvel onglet, sans le bruit.
        </h2>
      </div>
      <p className="text-muted">
        Conçu, développé et lancé seul sur Chrome, Firefox et Zen. Pas de compte :
        les réglages restent dans le navigateur. Le plus dur a été d’ajouter des
        widgets sans perdre la simplicité.
      </p>
      <div>
        {stats.length > 0 && (
          <dl className="mb-6 grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[15px] text-muted">{stat.label}</dt>
                <dd className="mt-1 text-[32px] font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <a href="https://www.mistnewtab.com/" target="_blank" rel="noopener noreferrer" className="text-link">
          Découvrir Mist →
        </a>
      </div>
    </div>
  </section>
);

export default Mist;
