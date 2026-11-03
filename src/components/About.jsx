import React from "react";
import portrait from "../assets/ALuxey.webp";

const About = () => (
  <section
    id="a-propos"
    aria-labelledby="a-propos-title"
    className="section grid scroll-mt-6 items-center gap-10 md:grid-cols-[320px_minmax(0,1fr)] md:gap-14"
  >
    <img
      src={portrait}
      alt="Portrait d’Aurélien Luxey en extérieur, dans un jardin ensoleillé"
      width="900"
      height="1200"
      loading="lazy"
      decoding="async"
      className="block aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover"
    />
    <div className="max-w-[640px]">
      <p className="eyebrow mb-2.5">À propos</p>
      <h2 id="a-propos-title" className="section-title">
        Je suis Aurélien.
      </h2>
      <p className="mt-6 text-muted">
        Développeur web full-stack et étudiant en ingénierie logicielle à l’Efrei,
        je suis en alternance chez TimeOne après être passé par ManoMano. En
        parallèle, je crée des sites pour des indépendants et des petites
        entreprises.
      </p>
      <p className="mt-4 text-muted">
        Mon objectif est simple : un site agréable à consulter, facile à comprendre
        et qui donne envie de vous contacter.
      </p>
    </div>
  </section>
);

export default About;
