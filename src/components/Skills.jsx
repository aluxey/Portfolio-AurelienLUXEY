import React from "react";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSupabase,
  SiSymfony,
} from "react-icons/si";
import { FiMessageCircle, FiShield, FiSmile, FiTarget, FiUserCheck } from "react-icons/fi";

const technologies = [
  { label: "HTML5", icon: SiHtml5 },
  { label: "CSS3", icon: SiCss3 },
  { label: "JavaScript", icon: SiJavascript },
  { label: "React", icon: SiReact },
  { label: "PHP", icon: SiPhp },
  { label: "Symfony", icon: SiSymfony },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Supabase", icon: SiSupabase },
  { label: "Git / GitHub", icon: SiGithub },
  { label: "Netlify", icon: SiNetlify },
];

const softSkills = [
  { label: "Écoute & conseil", icon: FiMessageCircle },
  { label: "Rigueur", icon: FiShield },
  { label: "Communication", icon: FiUserCheck },
  { label: "Sens du service", icon: FiSmile },
  { label: "Autonomie", icon: FiTarget },
];

const TechStack = () => {
  return (
    <section className="section-shell" id="stack">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="section-label">STACK & COMPÉTENCES</p>
          <h2 className="section-heading">Un stack moderne pour des sites performants</h2>
          <p className="section-description">
            Des outils solides pour créer des interfaces propres, connecter des
            services, gérer des données et publier rapidement un site fiable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.label} className="card flex min-h-32 flex-col items-center justify-center gap-4 text-center">
                <Icon className="text-3xl text-violet-700" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">{tech.label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <h3 className="text-xl font-bold text-slate-950">Compétences transversales</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.label} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{skill.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
