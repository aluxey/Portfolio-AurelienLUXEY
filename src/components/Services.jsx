import React from "react";
import { FiCheck, FiLayout, FiRefreshCw, FiShoppingBag, FiTool } from "react-icons/fi";

const services = [
  {
    title: "Sites vitrines",
    description: "Un site professionnel pour présenter votre activité et inspirer confiance.",
    points: ["Design responsive", "Structure claire", "Optimisation SEO de base"],
    icon: FiLayout,
  },
  {
    title: "Site e-commerce simple",
    description:
      "Une boutique claire pour présenter vos produits et gérer un premier parcours d’achat.",
    points: ["Catalogue produits", "Panier", "Pages produit"],
    icon: FiShoppingBag,
  },
  {
    title: "Refonte de site",
    description: "Modernisation graphique et technique d’un site existant.",
    points: ["UI plus moderne", "Responsive", "Performance"],
    icon: FiRefreshCw,
  },
  {
    title: "Maintenance & support",
    description:
      "Petites modifications, mises à jour et accompagnement après mise en ligne.",
    points: ["Ajustements", "Corrections", "Suivi technique"],
    icon: FiTool,
  },
];

const Services = () => {
  return (
    <section className="section-shell" id="services">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="section-label">SERVICES</p>
          <h2 className="section-heading">Des solutions adaptées à vos objectifs</h2>
          <p className="section-description">
            Je privilégie des sites utiles, rapides à comprendre et faciles à faire
            évoluer selon les besoins de votre activité.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-200">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-6 grid gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <FiCheck className="text-violet-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
