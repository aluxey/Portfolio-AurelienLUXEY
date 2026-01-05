import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "../assets/PhotoAurelien.png";
import cv from "../assets/CV_Aurelien_LUXEY.pdf";

const highlights = [
  {
    value: "3+",
    label: "Years immersed in IT",
    detail: "Continuous learning & experimentation",
  },
  {
    value: "2",
    label: "Internships",
    detail: "Mobile & DevOps missions",
  },
  {
    value: "∞",
    label: "Curiosity",
    detail: "New technologies explored every day",
  },
];

const Hero = () => {
  return (
    <section
      className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 pt-32 md:flex-row md:pt-40"
      id="hero"
    >
      <div className="flex w-full flex-1 flex-col items-start gap-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-slate-200">
          Based in France
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
        </div>
        <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
          <span className="align-middle">I&apos;m a </span>
          <TypeAnimation
            sequence={["Full‑Stack Developer", 1200, "App Developer", 1200, "Programmer", 1200]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="primary-color align-middle inline-block"
          />
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          My name is Aurélien LUXEY, and I have been studying IT for the past three years. As I near the completion of
          my Bachelor&apos;s degree, I am eager to pursue further studies in engineering. I possess strong technical
          knowledge and am committed to continuous learning and discovering new advancements in the field every day.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={cv}
            className="gradient-border relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-slate-100 transition duration-300 hover:scale-[1.01]"
          >
            <span className="absolute inset-0 -z-10 animate-gradient rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            Download my CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-200 transition duration-300 hover:border-sky-400/70 hover:bg-sky-500/10 hover:text-white"
          >
            Contact me
          </a>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="glass animate-float rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_45px_rgba(56,189,248,0.15)] min-h-[140px] overflow-hidden"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <p className="text-2xl font-bold text-slate-100">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-200 leading-snug">{item.label}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.06em] text-slate-400 leading-5 break-words">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex w-full flex-1 items-center justify-center">
        <img
          src={heroimage}
          alt="Portrait of Aurélien Luxey"
          className="w-[85%] max-w-md rounded-3xl object-contain drop-shadow-[0_25px_60px_rgba(56,189,248,0.25)] md:w-[75%]"
        />
      </div>
    </section>
  );
};

export default Hero;
