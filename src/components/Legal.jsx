import React from "react";
import { publisher, site } from "../site";

const Section = ({ id, title, children }) => (
  <section id={id} className="mt-12 scroll-mt-8">
    <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    <div className="mt-4 space-y-4 text-base leading-8 text-muted">{children}</div>
  </section>
);

const Legal = () => (
  <main className="px-6 py-14 sm:py-20">
    <div className="mx-auto max-w-3xl">
      <a href="/" className="text-link text-base">
        ← Retour à l’accueil
      </a>
      <h1 className="section-title mt-8">
        Mentions légales et confidentialité
      </h1>

      <Section id="editeur" title="Éditeur du site">
        <p>
          {site.name}
          {publisher.status && <><br />{publisher.status}</>}
          {publisher.siret && <><br />SIRET : {publisher.siret}</>}
          {publisher.address && <><br />{publisher.address}</>}
          <br />
          Contact : <a className="text-ink underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          Directeur de la publication : {site.name}
        </p>
      </Section>

      <Section id="hebergeur" title="Hébergement">
        <p>
          Netlify, Inc.
          <br />
          101 2nd Street, San Francisco, CA 94105-2239, États-Unis
          <br />
          Contact : support@netlify.com
        </p>
      </Section>

      <Section id="confidentialite" title="Données personnelles">
        <p>
          Le formulaire de contact recueille votre nom, votre adresse e-mail, votre
          besoin et votre message. Netlify enregistre aussi votre adresse IP et le
          type de votre navigateur lors de l’envoi. Ces données servent uniquement à répondre à votre
          demande et à préparer un éventuel devis. Elles ne sont ni vendues ni
          utilisées à des fins publicitaires.
        </p>
        <p>
          Le responsable du traitement est {site.name}. Les données sont transmises à
          Netlify, Inc., qui héberge le site et le formulaire, et peuvent à ce titre
          être traitées aux États-Unis. Elles sont conservées au maximum trois ans
          après notre dernier échange.
        </p>
        <p>
          Vous pouvez demander l’accès à vos données, leur rectification ou leur
          suppression, ou vous opposer à leur traitement, en écrivant à{" "}
          <a className="text-ink underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a>.
          Vous pouvez aussi adresser une réclamation à la CNIL.
        </p>
      </Section>

      <Section id="cookies" title="Cookies">
        <p>
          Ce site n’utilise ni cookie publicitaire ni outil de mesure d’audience.
          Aucun bandeau de consentement n’est donc affiché.
        </p>
      </Section>
    </div>
  </main>
);

export default Legal;
