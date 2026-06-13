import React from "react";
import { FiArrowRight, FiCheck, FiClock, FiCreditCard, FiFileText, FiGlobe, FiShield } from "react-icons/fi";

const offers = [
  {
    name: "Site vitrine essentiel",
    audience: "Pour artisans, profs particuliers et petits indépendants.",
    price: "350-500 €",
    duration: "5 à 10 jours",
    badge: "Simple & rapide",
    features: [
      "Site 1 page responsive",
      "Présentation de l’activité",
      "Services ou prestations",
      "Horaires et zone d’intervention",
      "Bouton appel ou e-mail",
      "Formulaire de contact",
      "Mise en ligne",
    ],
  },
  {
    name: "Site vitrine pro",
    audience: "Pour restaurants, instituts, commerces et associations.",
    price: "600-900 €",
    duration: "10 à 20 jours",
    badge: "Le plus complet",
    featured: true,
    features: [
      "3 à 5 sections ou pages",
      "Accueil structuré",
      "Services, carte ou prestations",
      "Galerie",
      "Avis et réassurance",
      "Page ou bloc contact",
      "SEO local de base",
      "Responsive et mise en ligne",
    ],
  },
];

const legalItems = [
  {
    title: "Mentions légales",
    text: "Informations obligatoires du propriétaire du site, de l’éditeur et de l’hébergeur.",
    icon: FiFileText,
  },
  {
    title: "Confidentialité",
    text: "Politique adaptée si le site contient un formulaire, du tracking ou des services tiers.",
    icon: FiShield,
  },
  {
    title: "Cookies",
    text: "Bandeau ou information dédiée uniquement si des outils analytics ou tiers le nécessitent.",
    icon: FiGlobe,
  },
  {
    title: "CGV simples",
    text: "Cadre clair pour tes prestations : périmètre, paiement, délais et responsabilités.",
    icon: FiCheck,
  },
  {
    title: "Facturation propre",
    text: "Devis, facture et suivi des éléments administratifs à transmettre avant lancement.",
    icon: FiCreditCard,
  },
];

const Offers = () => {
  return (
    <section className="section-shell" id="offers">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">OFFRES</p>
            <h2 className="section-heading">Des offres lisibles pour lancer votre site sereinement</h2>
          </div>
          <p className="section-description lg:mt-0">
            Deux bases claires pour démarrer rapidement. Les prix restent indicatifs :
            chaque devis est ajusté selon le contenu, les fonctionnalités et le niveau
            d’accompagnement nécessaire.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`relative overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition duration-200 hover:-translate-y-1 md:p-8 ${
                offer.featured
                  ? "border-violet-200 bg-slate-950 text-white shadow-slate-950/20"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {offer.featured && (
                <div className="absolute right-[-18%] top-[-22%] h-72 w-72 rounded-full bg-[radial-gradient(circle,#7C3AED_0%,rgba(236,72,153,0.65)_45%,transparent_72%)] blur-3xl" aria-hidden="true" />
              )}

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${offer.featured ? "bg-white/10 text-violet-100 ring-1 ring-white/15" : "bg-violet-50 text-violet-700 ring-1 ring-violet-100"}`}>
                    {offer.badge}
                  </span>
                  <span className={`inline-flex items-center gap-2 text-sm font-semibold ${offer.featured ? "text-slate-200" : "text-slate-500"}`}>
                    <FiClock aria-hidden="true" /> {offer.duration}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight sm:text-3xl">{offer.name}</h3>
                <p className={`mt-3 text-sm leading-6 ${offer.featured ? "text-slate-300" : "text-slate-600"}`}>{offer.audience}</p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">{offer.price}</span>
                  <span className={`pb-2 text-sm font-semibold ${offer.featured ? "text-slate-300" : "text-slate-500"}`}>TTC*</span>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {offer.features.map((feature) => (
                    <li key={feature} className={`flex gap-3 text-sm leading-6 ${offer.featured ? "text-slate-200" : "text-slate-700"}`}>
                      <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${offer.featured ? "bg-white text-violet-700" : "bg-violet-100 text-violet-700"}`}>
                        <FiCheck size={13} aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:aurelien.luxeyy@gmail.com?subject=Demande%20de%20devis%20-%20${encodeURIComponent(offer.name)}`}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:w-auto ${
                    offer.featured
                      ? "bg-white text-slate-950 hover:bg-violet-50"
                      : "bg-slate-950 text-white hover:bg-violet-700"
                  }`}
                >
                  Demander un devis <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-violet-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="section-label">CADRE LÉGAL</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Les indispensables prévus dès le départ
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Je prépare la structure minimale pour éviter les oublis : les textes
                finaux dépendent de vos informations administratives et des outils
                réellement utilisés sur le site.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {legalItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                      <Icon aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 font-bold text-slate-950">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            * TVA selon le statut de facturation applicable. Les tarifs sont des fourchettes indicatives et ne remplacent pas un devis personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
