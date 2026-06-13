import React from "react";
import aboutImg from "../assets/ALuxey.jpeg";

const badges = [
  "Formation ingénieur",
  "Alternance en développement web",
  "Basé autour de Bordeaux",
  "Disponible pour projets simples",
];

const About = () => {
  return (
    <section className="section-shell" id="about">
      <div className="section-container">
        <div className="grid items-center gap-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:p-10">
          <div className="overflow-hidden rounded-[22px] bg-slate-100">
            <img
              src={aboutImg}
              alt="Aurélien Luxey travaillant sur un ordinateur"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>

          <div>
            <p className="section-label">À PROPOS</p>
            <h2 className="section-heading">À propos</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Je suis Aurélien Luxey, développeur web full-stack et étudiant en
                ingénierie logicielle et systèmes d’information à l’Efrei. En
                parallèle de mon parcours en entreprise, je développe des sites web
                pour des indépendants, petites entreprises et projets locaux.
              </p>
              <p>
                Mon objectif est de créer des interfaces simples, propres et utiles :
                un site doit être agréable à consulter, facile à comprendre et pensé
                pour générer une action claire — contacter, réserver, demander un
                devis ou acheter.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
