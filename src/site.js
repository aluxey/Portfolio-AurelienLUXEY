export const site = {
  name: "Aurélien Luxey",
  jobTitle: "Développeur web full-stack",
  email: "aurelien.luxeyy@gmail.com",
  linkedin: "https://www.linkedin.com/in/aurelien-luxey/",
  github: "https://github.com/aluxey",
};

// Mentions légales : à compléter si tu factures ces prestations.
// Une ligne n'est affichée que lorsque sa valeur est renseignée.
export const publisher = {
  status: null, // ex. "Entrepreneur individuel"
  siret: null,
  address: null,
};

export const pages = {
  "/": {
    title: "Aurélien Luxey — Développeur web full-stack",
    description:
      "Portfolio d’Aurélien Luxey, développeur web full-stack. Création de sites vitrines, sites e-commerce simples et interfaces web modernes pour indépendants, petites entreprises et projets locaux.",
  },
  "/mentions-legales/": {
    title: "Mentions légales et confidentialité — Aurélien Luxey",
    description:
      "Mentions légales, hébergement, traitement des données du formulaire de contact et cookies du site d’Aurélien Luxey.",
  },
};

export const normalizePath = (path) => {
  const clean = path.split(/[?#]/)[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
};
