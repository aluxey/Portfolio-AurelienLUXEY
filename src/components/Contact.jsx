import React, { useEffect, useState } from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { site } from "../site";

export const OFFER_SELECTED_EVENT = "offer-selected";

const projectTypes = [
  "Site vitrine essentiel",
  "Site vitrine pro",
  "Site e-commerce simple",
  "Refonte de site",
  "Maintenance & support",
  "Autre",
];

const encode = (form) => new URLSearchParams(new FormData(form)).toString();

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    const onOfferSelected = (event) => setProjectType(event.detail);
    window.addEventListener(OFFER_SELECTED_EVENT, onOfferSelected);
    return () => window.removeEventListener(OFFER_SELECTED_EVENT, onOfferSelected);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(form),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setProjectType("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-shell pb-24" id="contact">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-950 px-6 py-14 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:px-10 lg:px-14">
          <div className="absolute right-[-12%] top-[-35%] h-96 w-96 rounded-full bg-[radial-gradient(circle,#7C3AED_0%,rgba(236,72,153,0.7)_45%,transparent_72%)] blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
                CONTACT
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Parlons de votre projet
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Vous avez besoin d’un site vitrine, d’une boutique simple ou d’une
                refonte ? Discutons-en et voyons ensemble la solution la plus adaptée.
              </p>
              <a href={`mailto:${site.email}`} className="mt-7 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-violet-100 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                <FiMail aria-hidden="true" /> Ou écrivez-moi directement : {site.email}
              </a>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="company"
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <label className="text-sm font-semibold text-slate-100">
                Nom
                <input className="form-field" name="name" type="text" autoComplete="name" required />
              </label>
              <label className="text-sm font-semibold text-slate-100">
                E-mail
                <input className="form-field" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="text-sm font-semibold text-slate-100 sm:col-span-2">
                Votre besoin
                <select
                  className="form-field [&>option]:text-slate-950"
                  name="project-type"
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                >
                  <option value="">Je ne sais pas encore</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-100 sm:col-span-2">
                Message
                <textarea className="form-field min-h-32" name="message" rows={5} required />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"} <FiArrowRight aria-hidden="true" />
                </button>
                <p className="mt-4 text-xs leading-5 text-slate-400">
                  Vos informations servent uniquement à répondre à votre demande.{" "}
                  <a className="underline underline-offset-2 hover:text-white" href="/mentions-legales/#confidentialite">
                    En savoir plus
                  </a>
                </p>
                <div aria-live="polite">
                  {status === "success" && (
                    <p className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                      Merci, votre message est bien envoyé. Je vous réponds rapidement.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 rounded-xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                      L’envoi n’a pas abouti. Vous pouvez m’écrire directement à{" "}
                      <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
