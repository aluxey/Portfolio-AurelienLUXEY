import React, { useEffect, useState } from "react";
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
    <section id="contact" aria-labelledby="contact-title" className="section grid scroll-mt-6 gap-12 md:grid-cols-2">
      <div>
        <h2 id="contact-title" className="text-[clamp(2.375rem,5.4vw,4.5rem)] font-semibold leading-none tracking-[-0.04em]">
          Parlons de votre projet.
        </h2>
        <p className="mt-6 text-muted">
          Décrivez votre besoin en quelques lignes. Vous échangez directement
          avec moi.
        </p>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base">
          <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="company"
        onSubmit={handleSubmit}
        className="flex flex-col gap-[18px]"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Ne pas remplir : <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <label className="text-[15px] font-medium">
          Nom
          <input className="field min-h-12" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="text-[15px] font-medium">
          E-mail
          <input className="field min-h-12" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-[15px] font-medium">
          Votre besoin
          <select
            className="field min-h-12"
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
        <label className="text-[15px] font-medium">
          Message
          <textarea className="field py-3" name="message" rows={4} required />
        </label>

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-[52px] cursor-pointer rounded-xl bg-ink px-[26px] font-semibold text-paper transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60"
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
          <p className="mt-4 text-sm leading-snug text-muted">
            Vos informations servent uniquement à répondre à votre demande.{" "}
            <a className="underline underline-offset-2" href="/mentions-legales/#confidentialite">
              En savoir plus
            </a>
          </p>
          <div aria-live="polite">
            {status === "success" && (
              <p className="mt-4 rounded-[10px] border border-line px-4 py-3 text-base">
                Merci, votre message est bien envoyé. Je vous réponds rapidement.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-[10px] border border-ink px-4 py-3 text-base">
                L’envoi n’a pas abouti. Vous pouvez m’écrire directement à{" "}
                <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
