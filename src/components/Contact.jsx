import React, { useState } from "react";
import { MdSend } from "react-icons/md";

const fieldClass =
  "mt-3 block w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });

    fetch("https://formcarry.com/s/_vIgRuI2xLT", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 scroll-mt-32" id="contact">
      <div className="panel relative overflow-hidden rounded-[40px] p-8 md:p-12">
        <div className="absolute -left-16 top-10 h-60 w-60 rounded-full bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-transparent blur-3xl" />
        <div className="relative grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300">
              Let’s build together
            </p>
            <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
              Contact <span className="primary-color">me</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
              Whether you&apos;re looking for a developer, want to collaborate on a
              project or simply exchange about tech, feel free to reach out. I answer
              every message with care.
            </p>

            <div className="grid gap-4 text-sm text-slate-300">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                <p>Available for internships, engineering challenges, and side quests.</p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                <p>
                  Based in France, collaborating remotely and onsite with international
                  teams.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.6)]" />
                <p>Driven by curiosity, eager to learn from every conversation.</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass space-y-6 rounded-[28px] border border-white/10 p-8">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-300"
              >
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Your first and last name"
                className={fieldClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-300"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="john@doe.com"
                className={fieldClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-300"
              >
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Tell me more about your project..."
                className={`${fieldClass} min-h-[140px] resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              className="gradient-border relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-slate-100 transition duration-300 hover:scale-[1.01]"
            >
              <span className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              Send message
              <MdSend className="ml-3 text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
