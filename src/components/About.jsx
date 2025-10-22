import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 scroll-mt-32" id="about">
      <div className="panel relative overflow-hidden rounded-[40px] p-10 md:p-16">
        <div className="absolute -left-20 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-indigo-500/30 to-transparent blur-3xl md:block" />
        <div className="absolute -right-24 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-transparent blur-3xl" />
        <div className="relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300">
              Behind the code
            </p>
            <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
              About <span className="primary-color">me</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              My name is Aurélien Luxey, I am 20 years old, and I am passionate about
              programming. This passion led me to pursue studies in computer science.
              Throughout my academic journey and the numerous projects I&apos;ve participated
              in, as well as my professional experiences, I have developed a strong
              work ethic and essential teamwork skills.
            </p>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              During my studies, I also learned about team collaboration techniques,
              such as Agile methodologies, which are widely used in the professional
              world. These collaborative frameworks helped me structure projects while
              keeping human interactions at the center.
            </p>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Today, I wish to continue my studies at an engineering school to enhance
              my theoretical and scientific knowledge and to train to become an engineer
              equipped with all the necessary skills. I aim to be more than just a
              developer and be capable of handling more complex tasks while still
              maintaining my developer skills.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Team spirit", "Agile culture", "Engineering mindset"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-8 -z-10 animate-gradient rounded-[32px] bg-gradient-to-br from-indigo-500/30 via-purple-500/25 to-emerald-400/20 blur-3xl" />
            <img
              src={aboutImg}
              alt="Aurélien working on a laptop"
              className="max-h-[520px] w-full rounded-3xl object-cover shadow-[0_25px_60px_rgba(99,102,241,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
