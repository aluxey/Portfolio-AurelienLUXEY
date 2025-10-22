import React from "react";

const proEvents = [
  {
    date: "2019",
    title: "National Engineering Science Olympiad Final",
    description:
      "I took part in the Science de l'Ingénieur competition at departmental, regional and national level. We presented a personal innovation: a connected rugby helmet capable of measuring and analyzing impacts sustained during matches. This project showcased my engineering, programming and teamwork skills, and enabled me to develop an innovative technological solution to improve safety in sport.",
  },
  {
    date: "2022",
    title: "Mobile Development Internship at ENSEIRB MATMECA",
    description:
      "I did my internship in a laboratory at ENSEIRB MATMECA where I developed a mobile application using Flutter. This application connects information from satellites and alerts users to weather warnings. This project enabled me to strengthen my skills in mobile development, satellite data processing and real-time alert management.",
  },
  {
    date: "2023-2024",
    title: "DevOps internship at ManoMano",
    description:
      "Currently on a work-study program at ManoMano, I'm working as a DevOps developer. My responsibilities include managing cloud infrastructure, automating deployments and setting up CI/CD pipelines. This experience enables me to combine development and operations, improve the efficiency of software development processes and guarantee continuous, high-quality application delivery.",
  },
];

const uniEvents = [
  {
    date: "2017-2020",
    title: "Bac Scientifique at Lycée Gustave Eiffel",
    description:
      "I obtained my baccalauréat with honors. I followed the classic curriculum at the Lycée Gustave Eiffel in Bordeaux. I've always had a passion for science, so I opted for a Bac Scientifique with a specialization in Engineering Sciences and NSI (Numérique et Sciences Informatiques). These years enabled me to develop a deep interest in computer science and group work, taking part in various collaborative projects and academic competitions.",
  },
  {
    date: "2021-2024",
    title: "IT Bachelor at Gradignan",
    description:
      "Enrolled at BUT Informatique in Gradignan, I strengthened my skills in software development and IT engineering. During this period, I completed a three-month internship at GHI where I worked on web development projects, including the creation of interactive web applications and database management systems. This work experience enabled me to apply my theoretical knowledge in a real-world environment and to acquire indispensable practical skills.",
  },
  {
    date: "2024-...",
    title: "EFREI Engineering School",
    description: "Currently a student at EFREI, a renowned engineering school.",
  },
];

const sections = [
  {
    title: "Professional development",
    gradient: "from-sky-500/30 via-indigo-500/20 to-transparent",
    dotClass: "bg-sky-400",
    badgeClass: "text-sky-200",
    hoverClass: "hover:border-sky-400/40 hover:bg-sky-500/10",
    events: proEvents,
  },
  {
    title: "University development",
    gradient: "from-emerald-400/30 via-teal-500/20 to-transparent",
    dotClass: "bg-emerald-400",
    badgeClass: "text-emerald-200",
    hoverClass: "hover:border-emerald-400/40 hover:bg-emerald-500/10",
    events: uniEvents,
  },
];

const TimelineColumn = ({ title, gradient, dotClass, badgeClass, hoverClass, events }) => (
  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 p-8">
    <div
      aria-hidden="true"
      className={`absolute -right-10 top-0 h-56 w-56 rounded-full bg-gradient-to-br ${gradient} blur-3xl`}
    />
    <div className="relative flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-100">{title}</h3>
        <span className={`text-xs font-semibold uppercase tracking-[0.35em] ${badgeClass}`}>
          Milestones
        </span>
      </div>
      <div className="timeline-connector relative flex flex-col gap-10 pl-8">
        {events.map((event) => (
          <article key={event.title} className="relative pl-6">
            <span
              className={`absolute left-0 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full ${dotClass} shadow-[0_0_20px_rgba(56,189,248,0.45)]`}
            />
            <div
              className={`glass rounded-3xl border border-white/10 p-6 transition duration-300 ${hoverClass}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                {event.date}
              </p>
              <h4 className="mt-3 text-lg font-semibold text-slate-100">
                {event.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-4 pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300">
          Growing forward
        </p>
        <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
          My <span className="primary-color">evolution</span>
        </h2>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          Every challenge sharpened my technical skills and strengthened my curiosity.
          From scientific competitions to advanced studies, here&apos;s how the story
          unfolds.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <TimelineColumn key={section.title} {...section} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
