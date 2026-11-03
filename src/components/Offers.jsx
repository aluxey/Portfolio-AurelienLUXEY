import React from "react";
import { OFFER_SELECTED_EVENT } from "./Contact";

const offers = [
  {
    name: "Site vitrine essentiel",
    audience: "Pour les artisans, les profs particuliers et les petits indépendants.",
    price: "350-500 €",
    rows: [
      { label: "Format", value: "1 page" },
      { label: "Délai", value: "5 à 10 jours" },
      { label: "Contenu", value: "Activité, services, horaires et zone" },
      { label: "Contact", value: "Bouton et formulaire" },
      { label: "Galerie photo", included: false },
      { label: "Avis clients", included: false },
      { label: "SEO local de base", included: false },
    ],
  },
  {
    name: "Site vitrine pro",
    audience: "Pour les restaurants, les instituts, les commerces et les associations.",
    price: "600-900 €",
    badge: "Le plus complet",
    featured: true,
    rows: [
      { label: "Format", value: "3 à 5 sections ou pages" },
      { label: "Délai", value: "10 à 20 jours" },
      { label: "Contenu", value: "Accueil, services ou carte" },
      { label: "Contact", value: "Page ou bloc dédié" },
      { label: "Galerie photo", included: true },
      { label: "Avis clients", included: true },
      { label: "SEO local de base", included: true },
    ],
  },
];

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const RowValue = ({ row, mutedClass }) => {
  if (row.value) return row.value;
  if (row.included) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <Check /> Inclus
      </span>
    );
  }
  return <span className={`font-normal ${mutedClass}`}>Non inclus</span>;
};

const Offers = () => (
  <section id="offres" aria-labelledby="offres-title" className="section scroll-mt-6">
    <div className="grid gap-x-12 gap-y-5 md:grid-cols-2 md:items-end">
      <h2 id="offres-title" className="section-title [text-wrap:balance]">
        Deux offres, un prix clair
      </h2>
      <p className="text-muted">
        L’offre essentielle tient sur une page. L’offre pro ajoute plusieurs
        sections, une galerie, des avis clients et le SEO local.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2 md:grid-rows-[auto_auto_auto] md:gap-y-0">
      {offers.map((offer) => {
        const mutedClass = offer.featured ? "text-[color:var(--card-muted)]" : "text-muted";
        const dividerClass = offer.featured ? "border-[color:var(--card-line)]" : "border-line";

        return (
          <article
            key={offer.name}
            className={`rounded-[20px] p-7 sm:p-8 md:row-span-3 md:grid md:grid-rows-subgrid ${
              offer.featured
                ? "offer-featured bg-ink text-paper [&_a:focus-visible]:outline-paper"
                : "border border-line"
            }`}
          >
            <header>
              <div className="flex min-h-7 flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-2xl font-bold">{offer.name}</h3>
                {offer.badge && (
                  <span className="rounded-full border border-[color:var(--card-line)] px-3 py-0.5 text-sm font-medium">
                    {offer.badge}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-base leading-snug ${mutedClass}`}>{offer.audience}</p>
              <p className="mt-6 text-[44px] font-semibold leading-none tracking-[-0.03em]">
                {offer.price} <span className={`text-base font-normal tracking-normal ${mutedClass}`}>TTC*</span>
              </p>
            </header>

            <dl className={`mt-7 border-t text-base ${dividerClass}`}>
              {offer.rows.map((row) => (
                <div key={row.label} className={`flex min-h-[52px] items-center justify-between gap-6 border-b py-3 ${dividerClass}`}>
                  <dt className={`shrink-0 ${mutedClass}`}>{row.label}</dt>
                  <dd className="text-right font-medium leading-snug">
                    <RowValue row={row} mutedClass={mutedClass} />
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              onClick={() => window.dispatchEvent(new CustomEvent(OFFER_SELECTED_EVENT, { detail: offer.name }))}
              className={`mt-7 flex min-h-[52px] items-center justify-center rounded-xl px-6 font-semibold transition-opacity hover:opacity-85 ${
                offer.featured ? "bg-paper text-ink" : "bg-ink text-paper"
              }`}
            >
              Demander un devis
            </a>
          </article>
        );
      })}
    </div>

    <div className="mt-7 grid gap-x-12 gap-y-3 text-base text-muted md:grid-cols-2">
      <p>
        <strong className="font-semibold text-ink">Dans les deux offres :</strong> site
        responsive, mise en ligne et structure des mentions légales.
      </p>
      <p>
        <strong className="font-semibold text-ink">Autre besoin ?</strong> Boutique en
        ligne, refonte ou maintenance :{" "}
        <a className="text-link text-ink" href="#contact">parlons-en</a>.
      </p>
    </div>
    <p className="mt-5 text-sm text-muted">
      * TVA selon le statut de facturation applicable. Tarifs indicatifs, ajustés
      sur devis selon le contenu et les fonctionnalités.
    </p>
  </section>
);

export default Offers;
