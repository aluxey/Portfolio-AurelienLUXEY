import React from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";

const ContactForm = () => {
  return (
    <section className="section-shell pb-24" id="contact">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-950 px-6 py-14 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:px-10 lg:px-14">
          <div className="absolute right-[-12%] top-[-35%] h-96 w-96 rounded-full bg-[radial-gradient(circle,#7C3AED_0%,rgba(236,72,153,0.7)_45%,transparent_72%)] blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
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
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href="mailto:aurelien.luxeyy@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                Discutons ensemble <FiArrowRight aria-hidden="true" />
              </a>
              <a href="mailto:aurelien.luxeyy@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                <FiMail aria-hidden="true" /> Envoyer un e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
