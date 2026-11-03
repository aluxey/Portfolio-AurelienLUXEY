import React from "react";
import { OFFER_SELECTED_EVENT } from "./Contact";

const offers = [
  {
    name: "Site vitrine essentiel",
    details: "Une page, 5 à 10 jours",
    price: "350-500 €",
  },
  {
    name: "Site vitrine pro",
    details: "3 à 5 pages, 10 à 20 jours",
    price: "600-900 €",
  },
];

const Offers = () => (
  <section id="offres" aria-labelledby="offres-title" className="section scroll-mt-6">
    <h2 id="offres-title" className="section-title mb-8">
      Deux offres, un prix clair
    </h2>
    <div className="grid gap-x-12 md:grid-cols-2">
      {offers.map((offer) => (
        <div key={offer.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line py-6">
          <div>
            <h3 className="text-2xl font-bold">{offer.name}</h3>
            <p className="mt-1 text-base text-muted">{offer.details}</p>
            <a
              href="#contact"
              onClick={() => window.dispatchEvent(new CustomEvent(OFFER_SELECTED_EVENT, { detail: offer.name }))}
              className="text-link mt-3 inline-block text-base"
            >
              Demander un devis →
            </a>
          </div>
          <p className="text-2xl font-semibold">
            {offer.price} <span className="text-sm font-normal text-muted">TTC*</span>
          </p>
        </div>
      ))}
    </div>
    <p className="mt-6 text-sm text-muted">
      * TVA selon le statut de facturation applicable. Tarifs indicatifs, ajustés
      sur devis selon le contenu et les fonctionnalités.
    </p>
  </section>
);

export default Offers;
