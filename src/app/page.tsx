"use client";

import { useState } from "react";

// Portfolio companies data
const portfolio = [
  { name: "Usersnap", founded: 2013, acquired: 2021, description: "Feedback & QA platform" },
  { name: "AddSearch", founded: 2014, acquired: 2022, description: "Site search solutions" },
  { name: "DashThis", founded: 2011, acquired: 2022, description: "Marketing dashboards" },
  { name: "Ayrshare", founded: 2020, acquired: 2023, description: "Social media API" },
  { name: "SimpleBackups", founded: 2018, acquired: 2023, description: "Database backups" },
  { name: "Gleam", founded: 2013, acquired: 2021, description: "Marketing competitions" },
];

// Testimonials data
const testimonials = [
  {
    quote: "The journey through the M&A process was unforgettable. Communication was respectful, timely, and transparent. They actually listened.",
    name: "Josef Trauner",
    company: "Usersnap",
  },
  {
    quote: "After acquisition, nothing changed. That was the whole point. Eight months later, we're more robust, not more complicated.",
    name: "Antoine Paré",
    company: "DashThis",
  },
  {
    quote: "We had access to talented professionals, but they never forced 'help' on us. They asked. They waited. Revolutionary.",
    name: "Helena Rebane",
    company: "AddSearch",
  },
];

// What we look for data
const criteria = [
  { what: "$1M–$10M ARR", not: "Not 'pre-revenue with potential'" },
  { what: "5+ years old", not: "Not 'disrupting the space'" },
  { what: "Already profitable", not: "Not 'path to profitability'" },
  { what: "Boring, stable, works", not: "Not 'the next big thing'" },
];

// Anti-deck items
const antiDeck = [
  "Rebrand your product",
  "Replace your team",
  "Add 'synergies'",
  "Implement OKRs",
  "Hire consultants",
  "Schedule daily standups",
  "Create a transformation roadmap",
  "Merge you with another portfolio company",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--black)]/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-medium tracking-tight">
            saas.group
          </a>
          <div className="flex items-center gap-8">
            <a href="#premise" className="text-sm text-[var(--muted)] hover:text-[var(--white)] transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-sm text-[var(--muted)] hover:text-[var(--white)] transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm bg-[var(--signal)] text-[var(--black)] px-4 py-2 hover:bg-[var(--white)] transition-colors">
              Sell Your Company
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-[var(--max-width)] mx-auto px-6 w-full">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-sm text-[var(--muted)] mb-6 opacity-0 animate-fade-in">
              Seattle · Las Vegas · Berlin · Paris
            </p>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 opacity-0 animate-fade-in delay-100">
              We Buy Software
              <br />
              <span className="text-[var(--signal)]">Companies</span>
            </h1>

            {/* Subhead */}
            <p className="font-serif text-xl md:text-2xl text-[var(--muted)] max-w-2xl mb-12 opacity-0 animate-fade-in delay-200 italic">
              No consultants. No pivot decks. No founder therapy sessions.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 md:gap-16 opacity-0 animate-fade-in delay-300">
              <div>
                <p className="text-4xl md:text-5xl font-medium text-[var(--white)]">23</p>
                <p className="text-sm text-[var(--muted)] mt-1">Companies acquired</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-medium text-[var(--white)]">7</p>
                <p className="text-sm text-[var(--muted)] mt-1">Years operating</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-medium text-[var(--white)]">0</p>
                <p className="text-sm text-[var(--muted)] mt-1">Companies rebranded</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated line */}
        <div className="absolute bottom-0 left-0 h-px bg-[var(--signal)] animate-line-grow delay-500"></div>
      </section>

      {/* The Premise Section */}
      <section id="premise" className="py-32 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-sm text-[var(--signal)] mb-4">01 — The Premise</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Here's the uncomfortable truth
              </h2>
            </div>
            <div className="prose text-[var(--muted)]">
              <p className="text-lg md:text-xl leading-relaxed">
                Most acquisitions fail because acquirers can't resist "improving" what already works.
                They bring consultants. They bring frameworks. They bring "best practices" from companies
                that look nothing like yours.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-6">
                We resist.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-6">
                Your company works. You built something real. We're not here to "optimize" it into oblivion.
                We're here to write a check and get out of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Anti-Deck Section */}
      <section className="py-32 bg-[var(--subtle)] relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4">02 — The Anti-Deck</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              What we won't do to your company
            </h2>
            <p className="font-serif text-lg text-[var(--muted)] italic">
              A partial list. The full version is 50 items.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {antiDeck.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--subtle)] p-8 group hover:bg-[var(--black)] transition-colors"
              >
                <span className="text-[var(--signal)] text-sm font-medium mb-3 block">
                  ✕
                </span>
                <p className="text-base text-[var(--muted)] group-hover:text-[var(--white)] transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-32 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4">03 — Criteria</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              What we look for
            </h2>
          </div>

          <div className="space-y-px">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 border-t border-[var(--border)] py-8 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[var(--signal)] text-sm">0{i + 1}</span>
                  <h3 className="text-xl md:text-2xl font-medium">{item.what}</h3>
                </div>
                <p className="font-serif text-lg text-[var(--muted)] italic md:text-right mt-4 md:mt-0">
                  {item.not}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-32 bg-[var(--subtle)] relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4">04 — Process</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              60 days. One conversation. No drama.
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block"></div>

            <div className="space-y-12 md:pl-12">
              {[
                { day: "Day 1", title: "We talk", desc: "A single conversation. No pitch deck required. Just tell us what you built." },
                { day: "Day 14", title: "We decide", desc: "Two weeks later, you have a term sheet or a clear no. No ghosting." },
                { day: "Day 45", title: "We close", desc: "Due diligence that respects your time. We've done this before." },
                { day: "Day 60", title: "You decide", desc: "Stay involved or walk away. Entirely your call." },
              ].map((step, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-2 w-2 h-2 bg-[var(--signal)] hidden md:block"></div>

                  <p className="text-sm text-[var(--signal)] mb-2">{step.day}</p>
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{step.title}</h3>
                  <p className="font-serif text-[var(--muted)] max-w-xl">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4">05 — Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Companies we haven't ruined
            </h2>
            <p className="font-serif text-lg text-[var(--muted)] italic">
              Each one still looks exactly like it did before we showed up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {portfolio.map((company, i) => (
              <div
                key={i}
                className="bg-[var(--black)] p-8 group hover:bg-[var(--subtle)] transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-xl font-medium">{company.name}</h3>
                  <span className="text-xs text-[var(--muted)] px-2 py-1 border border-[var(--border)]">
                    Est. {company.founded}
                  </span>
                </div>
                <p className="font-serif text-[var(--muted)] mb-6">{company.description}</p>
                <div className="pt-6 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--signal)]">
                    Unchanged since {company.acquired}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[var(--subtle)] relative overflow-hidden">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4">06 — Voices</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              From founders who sold
            </h2>
          </div>

          <div className="relative">
            {/* Quote */}
            <blockquote className="max-w-3xl">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-[var(--white)] mb-8">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <footer className="flex items-center gap-4">
                <span className="text-[var(--white)]">{testimonials[activeTestimonial].name}</span>
                <span className="text-[var(--muted)]">·</span>
                <span className="text-[var(--muted)]">{testimonials[activeTestimonial].company}</span>
              </footer>
            </blockquote>

            {/* Navigation dots */}
            <div className="flex gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 transition-colors ${
                    i === activeTestimonial
                      ? 'bg-[var(--signal)]'
                      : 'bg-[var(--border)] hover:bg-[var(--muted)]'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-[var(--signal)] mb-8">The Manifesto</p>
            <div className="space-y-6 font-serif text-xl md:text-2xl text-[var(--muted)] leading-relaxed italic">
              <p>Most acquirers promise transformation.</p>
              <p>We promise the opposite.</p>
              <p className="text-[var(--white)] not-italic">Your company works. You built something real.</p>
              <p>We're not here to "optimize" it into oblivion.</p>
              <p className="text-[var(--white)] not-italic">No rebrands. No layoffs. No "synergies."</p>
              <p>Just capital, resources, and the radical act</p>
              <p>of leaving good things alone.</p>
              <p className="pt-8 text-[var(--white)] not-italic">We're not visionaries. We're caretakers.</p>
              <p className="text-[var(--signal)] not-italic">And that's exactly the point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[var(--subtle)] relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm text-[var(--signal)] mb-4">07 — Contact</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Sell us your company
            </h2>
            <p className="font-serif text-lg text-[var(--muted)] italic mb-12">
              Or don't. It's worked fine without us.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you. We\'ll be in touch.');
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="text-sm text-[var(--muted)] block mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@yourcompany.com"
                  className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-[var(--white)] placeholder:text-[var(--muted)] focus:border-[var(--signal)] focus:outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--signal)] text-[var(--black)] px-8 py-4 text-base font-medium hover:bg-[var(--white)] transition-colors"
              >
                Start the conversation
              </button>
            </form>

            <p className="text-sm text-[var(--muted)] mt-8">
              Or email us directly at{" "}
              <a href="mailto:hello@saas.group" className="text-[var(--white)] hover:text-[var(--signal)]">
                hello@saas.group
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <p className="text-lg font-medium mb-4">saas.group</p>
              <p className="text-sm text-[var(--muted)] max-w-sm">
                The anti-acquisition acquisition company. Built by founders who sold,
                for founders thinking about it.
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--muted)] mb-4">Company</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#premise" className="hover:text-[var(--signal)]">About</a></li>
                <li><a href="#portfolio" className="hover:text-[var(--signal)]">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-[var(--signal)]">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-[var(--muted)] mb-4">Resources</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[var(--signal)]">The Anti-Deck (PDF)</a></li>
                <li><a href="#" className="hover:text-[var(--signal)]">saas.unbound Podcast</a></li>
                <li><a href="#" className="hover:text-[var(--signal)]">The Boring Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} saas.group. No rights reserved. Copy whatever you want.
            </p>
            <p className="text-xs text-[var(--muted)]">
              Seattle · Las Vegas · Berlin · Paris
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
