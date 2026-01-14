"use client";

import { useState, useEffect } from "react";

// ============================================
// CUSTOM SVG ICONS & ASSETS
// ============================================

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 28C14 24.6863 16.6863 22 20 22V22C20 17.5817 16.4183 14 12 14V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
    <path d="M14 28H20V34H14V28Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 28C30 24.6863 32.6863 22 36 22V22C36 17.5817 32.4183 14 28 14V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
    <path d="M30 28H36V34H30V28Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L10 18M2 10L18 10M4.22 4.22L15.78 15.78M15.78 4.22L4.22 15.78" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const DiamondIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1"/>
    <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1"/>
    <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1"/>
    <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Company logo components (stylized text logos)
const CompanyLogo = ({ name, className = "" }: { name: string; className?: string }) => {
  const logos: { [key: string]: JSX.Element } = {
    Usersnap: (
      <svg viewBox="0 0 120 32" className={className} fill="currentColor">
        <rect x="0" y="8" width="16" height="16" rx="2"/>
        <text x="24" y="22" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">usersnap</text>
      </svg>
    ),
    AddSearch: (
      <svg viewBox="0 0 120 32" className={className} fill="currentColor">
        <circle cx="8" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="20" x2="16" y2="24" stroke="currentColor" strokeWidth="2"/>
        <text x="24" y="22" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">addsearch</text>
      </svg>
    ),
    DashThis: (
      <svg viewBox="0 0 120 32" className={className} fill="currentColor">
        <rect x="0" y="12" width="16" height="2"/>
        <rect x="0" y="18" width="12" height="2"/>
        <text x="24" y="22" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">dashthis</text>
      </svg>
    ),
    Ayrshare: (
      <svg viewBox="0 0 120 32" className={className} fill="currentColor">
        <path d="M8 8L0 24H16L8 8Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="24" y="22" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">ayrshare</text>
      </svg>
    ),
    SimpleBackups: (
      <svg viewBox="0 0 140 32" className={className} fill="currentColor">
        <rect x="2" y="10" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="5" y="13" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="24" y="22" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">simplebackups</text>
      </svg>
    ),
    Gleam: (
      <svg viewBox="0 0 100 32" className={className} fill="currentColor">
        <polygon points="8,4 12,12 20,12 14,18 16,26 8,21 0,26 2,18 -4,12 4,12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="24" y="22" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">gleam</text>
      </svg>
    ),
  };

  return logos[name] || <span className="text-lg font-medium">{name}</span>;
};

// Decorative geometric patterns
const GeometricPattern = ({ variant = 1 }: { variant?: number }) => {
  if (variant === 1) {
    return (
      <svg className="absolute opacity-[0.03]" width="400" height="400" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg className="absolute opacity-[0.03]" width="300" height="300" viewBox="0 0 300 300" fill="none">
        <rect x="50" y="50" width="200" height="200" stroke="currentColor" strokeWidth="0.5"/>
        <rect x="75" y="75" width="150" height="150" stroke="currentColor" strokeWidth="0.5"/>
        <rect x="100" y="100" width="100" height="100" stroke="currentColor" strokeWidth="0.5"/>
        <rect x="125" y="125" width="50" height="50" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
    );
  }
  return (
    <svg className="absolute opacity-[0.03]" width="500" height="500" viewBox="0 0 500 500" fill="none">
      {[...Array(10)].map((_, i) => (
        <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke="currentColor" strokeWidth="0.5"/>
      ))}
      {[...Array(10)].map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 50} x2="500" y2={i * 50} stroke="currentColor" strokeWidth="0.5"/>
      ))}
    </svg>
  );
};

// Animated counter component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById(`counter-${target}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [target]);

  return (
    <span id={`counter-${target}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// Cursor follower component
const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[100] mix-blend-difference transition-transform duration-150 ease-out hidden lg:block"
      style={{
        left: position.x - 10,
        top: position.y - 10,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-5 h-5 border border-[var(--white)] rounded-full" />
    </div>
  );
};

// Portfolio companies data with extended info
const portfolio = [
  {
    name: "Usersnap",
    founded: 2013,
    acquired: 2021,
    description: "Feedback & QA platform",
    metric: "1.2M",
    metricLabel: "feedback items/mo",
    color: "#FF4D00"
  },
  {
    name: "AddSearch",
    founded: 2014,
    acquired: 2022,
    description: "Site search solutions",
    metric: "500M",
    metricLabel: "searches/mo",
    color: "#4D9FFF"
  },
  {
    name: "DashThis",
    founded: 2011,
    acquired: 2022,
    description: "Marketing dashboards",
    metric: "10K",
    metricLabel: "active dashboards",
    color: "#9F4DFF"
  },
  {
    name: "Ayrshare",
    founded: 2020,
    acquired: 2023,
    description: "Social media API",
    metric: "2M",
    metricLabel: "API calls/day",
    color: "#4DFF9F"
  },
  {
    name: "SimpleBackups",
    founded: 2018,
    acquired: 2023,
    description: "Database backups",
    metric: "99.9%",
    metricLabel: "uptime",
    color: "#FFD94D"
  },
  {
    name: "Gleam",
    founded: 2013,
    acquired: 2021,
    description: "Marketing competitions",
    metric: "50M",
    metricLabel: "entries processed",
    color: "#FF4D9F"
  },
];

// Testimonials data with photos
const testimonials = [
  {
    quote: "The journey through the M&A process was unforgettable. Communication was respectful, timely, and transparent. They actually listened.",
    name: "Josef Trauner",
    company: "Usersnap",
    role: "Founder & CEO",
    initials: "JT",
  },
  {
    quote: "After acquisition, nothing changed. That was the whole point. Eight months later, we're more robust, not more complicated.",
    name: "Antoine Paré",
    company: "DashThis",
    role: "Co-founder",
    initials: "AP",
  },
  {
    quote: "We had access to talented professionals, but they never forced 'help' on us. They asked. They waited. Revolutionary.",
    name: "Helena Rebane",
    company: "AddSearch",
    role: "CEO",
    initials: "HR",
  },
];

// What we look for data
const criteria = [
  { what: "$1M–$10M ARR", not: "Not 'pre-revenue with potential'", icon: "chart" },
  { what: "5+ years old", not: "Not 'disrupting the space'", icon: "clock" },
  { what: "Already profitable", not: "Not 'path to profitability'", icon: "check" },
  { what: "Boring, stable, works", not: "Not 'the next big thing'", icon: "shield" },
];

// Anti-deck items
const antiDeck = [
  { text: "Rebrand your product", detail: "Your brand has equity. We respect that." },
  { text: "Replace your team", detail: "The people who built it should run it." },
  { text: "Add 'synergies'", detail: "A word we've banned from our vocabulary." },
  { text: "Implement OKRs", detail: "If you need OKRs, something's already wrong." },
  { text: "Hire consultants", detail: "We've never done this. We never will." },
  { text: "Schedule daily standups", detail: "Your calendar is yours." },
  { text: "Create a transformation roadmap", detail: "No transformation. That's the point." },
  { text: "Merge with another company", detail: "You're not puzzle pieces to us." },
];

// Team/Founders data
const founders = [
  { name: "Tim Schumacher", role: "Co-founder", initials: "TS", exits: "3 exits" },
  { name: "Tobias Schlottke", role: "Co-founder", initials: "TSc", exits: "2 exits" },
  { name: "Ulrich Essmann", role: "Co-founder", initials: "UE", exits: "4 exits" },
];

// Stats data
const stats = [
  { value: 23, label: "Companies acquired", suffix: "" },
  { value: 7, label: "Years operating", suffix: "" },
  { value: 0, label: "Companies rebranded", suffix: "" },
  { value: 60, label: "Days to close", suffix: "" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Handle scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      {/* Custom cursor */}
      <CursorFollower />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--black)]/95 backdrop-blur-md border-b border-[var(--border)]' : 'bg-transparent'
      }`}>
        <div className="max-w-[var(--max-width)] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-medium tracking-tight flex items-center gap-3 group">
            <span className="w-8 h-8 border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--signal)] group-hover:bg-[var(--signal)] transition-all">
              <span className="text-xs group-hover:text-[var(--black)] transition-colors">sg</span>
            </span>
            <span className="hidden sm:inline">saas.group</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#premise" className="text-sm text-[var(--muted)] hover:text-[var(--white)] transition-colors flex items-center gap-2">
              <span className="text-[10px] text-[var(--signal)]">01</span>
              About
            </a>
            <a href="#portfolio" className="text-sm text-[var(--muted)] hover:text-[var(--white)] transition-colors flex items-center gap-2">
              <span className="text-[10px] text-[var(--signal)]">05</span>
              Portfolio
            </a>
            <a href="#founders" className="text-sm text-[var(--muted)] hover:text-[var(--white)] transition-colors flex items-center gap-2">
              <span className="text-[10px] text-[var(--signal)]">08</span>
              Team
            </a>
            <a href="#contact" className="group text-sm bg-[var(--signal)] text-[var(--black)] px-4 py-2 hover:bg-[var(--white)] transition-all flex items-center gap-2">
              Sell Your Company
              <ArrowRight />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-[var(--black)] border-b border-[var(--border)] transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-6 py-8 space-y-6">
            <a href="#premise" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#portfolio" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#founders" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <a href="#contact" className="block text-lg text-[var(--signal)]" onClick={() => setMobileMenuOpen(false)}>
              Sell Your Company →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-32 overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 text-[var(--white)]">
          <GeometricPattern variant={1} />
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 right-20 text-[var(--muted)] opacity-20 animate-pulse hidden lg:block">
          <DiamondIcon />
        </div>
        <div className="absolute bottom-40 right-40 text-[var(--muted)] opacity-20 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}>
          <StarIcon />
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow with animated typing effect */}
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in">
              <div className="w-12 h-px bg-[var(--signal)]"></div>
              <p className="text-sm text-[var(--muted)] tracking-wider uppercase">
                Seattle · Las Vegas · Berlin · Paris
              </p>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-8 opacity-0 animate-fade-in delay-100 leading-[0.95]">
              We Buy Software
              <br />
              <span className="text-[var(--signal)] relative">
                Companies
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7C250 7 250 4 300 4" stroke="var(--signal)" strokeWidth="2" className="animate-dash"/>
                </svg>
              </span>
            </h1>

            {/* Subhead */}
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[var(--muted)] max-w-2xl mb-16 opacity-0 animate-fade-in delay-200 italic">
              No consultants. No pivot decks. No founder therapy sessions.
            </p>

            {/* Stats row with animated counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-0 animate-fade-in delay-300">
              {stats.map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-4 top-0 bottom-0 w-px bg-[var(--border)] group-hover:bg-[var(--signal)] transition-colors"></div>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--white)]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-6 flex flex-col items-center gap-2 text-[var(--muted)] opacity-0 animate-fade-in delay-500">
              <span className="text-xs tracking-wider uppercase">Scroll</span>
              <div className="animate-bounce">
                <ArrowDown />
              </div>
            </div>
          </div>
        </div>

        {/* Animated line */}
        <div className="absolute bottom-0 left-0 h-px bg-[var(--signal)] animate-line-grow delay-500"></div>
      </section>

      {/* Marquee Section - New */}
      <section className="py-4 border-y border-[var(--border)] overflow-hidden bg-[var(--subtle)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              {portfolio.map((company, j) => (
                <span key={j} className="text-sm text-[var(--muted)] flex items-center gap-2">
                  <StarIcon />
                  {company.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* The Premise Section */}
      <section id="premise" className="py-32 relative">
        <div className="absolute top-0 left-0 text-[var(--white)]">
          <GeometricPattern variant={2} />
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-16 md:gap-12">
            <div className="md:col-span-5">
              <div className="sticky top-32">
                <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-[var(--signal)]"></span>
                  01 — The Premise
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                  Here's the uncomfortable truth
                </h2>

                {/* Visual element */}
                <div className="mt-12 p-8 border border-[var(--border)] relative hidden md:block">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-[var(--black)] flex items-center justify-center">
                    <StarIcon />
                  </div>
                  <p className="text-5xl font-serif italic text-[var(--signal)]">97%</p>
                  <p className="text-sm text-[var(--muted)] mt-2">of acquisitions fail to create value</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-serif text-[var(--muted)]">
                Most acquisitions fail because acquirers can't resist <span className="text-[var(--white)] not-italic">"improving"</span> what already works.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-serif text-[var(--muted)]">
                They bring consultants. They bring frameworks. They bring "best practices" from companies that look nothing like yours.
              </p>
              <p className="text-2xl md:text-3xl font-medium text-[var(--white)] py-8 border-y border-[var(--border)]">
                We resist.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-serif text-[var(--muted)]">
                Your company works. You built something real. We're not here to "optimize" it into oblivion. We're here to <span className="text-[var(--white)] not-italic">write a check and get out of the way.</span>
              </p>

              {/* Call to action */}
              <a href="#contact" className="inline-flex items-center gap-3 text-[var(--signal)] hover:gap-5 transition-all mt-8 group">
                <span>Start a conversation</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Anti-Deck Section */}
      <section className="py-32 bg-[var(--subtle)] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[var(--signal)]"></span>
                02 — The Anti-Deck
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                What we won't do to your company
              </h2>
              <p className="font-serif text-lg text-[var(--muted)] italic">
                A partial list. The full version is 50 items.
              </p>
            </div>

            {/* Download button */}
            <a href="#" className="inline-flex items-center gap-3 border border-[var(--border)] px-6 py-3 hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--black)] transition-all group">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3V14M10 14L5 9M10 14L15 9M3 17H17" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>Download the Anti-Deck (PDF)</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {antiDeck.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--subtle)] p-8 group hover:bg-[var(--black)] transition-all duration-300 relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Number watermark */}
                <span className="absolute -right-2 -top-4 text-8xl font-medium text-[var(--border)] opacity-50 group-hover:text-[var(--signal)] group-hover:opacity-20 transition-all">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="text-[var(--signal)] mb-4 block relative z-10">
                  <CrossIcon />
                </span>
                <p className="text-lg text-[var(--muted)] group-hover:text-[var(--white)] transition-colors mb-4 relative z-10 font-medium">
                  {item.text}
                </p>
                <p className={`text-sm font-serif italic text-[var(--muted)] transition-all duration-300 relative z-10 ${
                  hoveredCard === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {item.detail}
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
            <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--signal)]"></span>
              03 — Criteria
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              What we look for
            </h2>
          </div>

          <div className="space-y-px">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 border-t border-[var(--border)] py-8 group hover:bg-[var(--subtle)] transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
              >
                <div className="md:col-span-1 flex items-center">
                  <span className="text-[var(--signal)] text-sm font-mono">0{i + 1}</span>
                </div>
                <div className="md:col-span-1 flex items-center justify-center my-4 md:my-0">
                  <span className="w-10 h-10 border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--signal)] group-hover:bg-[var(--signal)] transition-all">
                    <CheckIcon />
                  </span>
                </div>
                <div className="md:col-span-5 flex items-center">
                  <h3 className="text-xl md:text-2xl font-medium">{item.what}</h3>
                </div>
                <div className="md:col-span-5 flex items-center justify-end">
                  <p className="font-serif text-lg text-[var(--muted)] italic text-left md:text-right mt-4 md:mt-0">
                    {item.not}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional criteria callout */}
          <div className="mt-16 p-8 md:p-12 border border-[var(--border)] relative">
            <div className="absolute -top-4 left-8 bg-[var(--black)] px-4 py-1 text-sm text-[var(--signal)]">
              Also important
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-2xl font-medium mb-2">B2B or B2C</p>
                <p className="text-sm text-[var(--muted)]">Both work. We've acquired both.</p>
              </div>
              <div>
                <p className="text-2xl font-medium mb-2">Any geography</p>
                <p className="text-sm text-[var(--muted)]">We operate across 8 time zones.</p>
              </div>
              <div>
                <p className="text-2xl font-medium mb-2">Founder flexible</p>
                <p className="text-sm text-[var(--muted)]">Stay involved or move on. Your choice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-32 bg-[var(--subtle)] relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--signal)]"></span>
              04 — Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              60 days. One conversation. No drama.
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line - horizontal on desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-12 h-px bg-[var(--border)]"></div>
            {/* Timeline line - vertical on mobile */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { day: "Day 1", title: "We talk", desc: "A single conversation. No pitch deck required. Just tell us what you built.", icon: "💬" },
                { day: "Day 14", title: "We decide", desc: "Two weeks later, you have a term sheet or a clear no. No ghosting.", icon: "📋" },
                { day: "Day 45", title: "We close", desc: "Due diligence that respects your time. We've done this before.", icon: "🤝" },
                { day: "Day 60", title: "You decide", desc: "Stay involved or walk away. Entirely your call.", icon: "🎯" },
              ].map((step, i) => (
                <div key={i} className="relative pl-12 md:pl-0 md:pt-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 md:top-8 w-8 h-8 bg-[var(--black)] border-2 border-[var(--signal)] flex items-center justify-center text-sm">
                    {step.icon}
                  </div>

                  <p className="text-sm text-[var(--signal)] mb-2">{step.day}</p>
                  <h3 className="text-xl md:text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="font-serif text-[var(--muted)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar visualization */}
          <div className="mt-20 p-8 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[var(--muted)]">Typical timeline</span>
              <span className="text-sm text-[var(--signal)]">60 days</span>
            </div>
            <div className="h-2 bg-[var(--border)] relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-[var(--signal)]" style={{ width: '100%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--signal)] via-[var(--white)] to-[var(--signal)] opacity-30 animate-shimmer"></div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-[var(--muted)]">
              <span>Initial call</span>
              <span>Due diligence</span>
              <span>Close</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[var(--signal)]"></span>
                05 — Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                Companies we haven't ruined
              </h2>
              <p className="font-serif text-lg text-[var(--muted)] italic">
                Each one still looks exactly like it did before we showed up.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <GridIcon />
              <span className="text-sm text-[var(--muted)]">{portfolio.length} companies</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {portfolio.map((company, i) => (
              <div
                key={i}
                className="bg-[var(--black)] p-8 group hover:bg-[var(--subtle)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Colored accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ backgroundColor: company.color }}
                ></div>

                <div className="flex items-start justify-between mb-6">
                  <div className="w-32 h-8 flex items-center">
                    <CompanyLogo name={company.name} className="h-full w-auto" />
                  </div>
                  <span className="text-xs text-[var(--muted)] px-2 py-1 border border-[var(--border)] group-hover:border-[var(--signal)] transition-colors">
                    Est. {company.founded}
                  </span>
                </div>

                <p className="font-serif text-[var(--muted)] mb-6">{company.description}</p>

                {/* Metrics */}
                <div className="py-4 border-y border-[var(--border)] mb-6">
                  <p className="text-2xl font-medium" style={{ color: company.color }}>{company.metric}</p>
                  <p className="text-xs text-[var(--muted)]">{company.metricLabel}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--signal)] flex items-center gap-2">
                    <CheckIcon />
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
        {/* Large quote mark background */}
        <div className="absolute top-20 left-10 text-[var(--border)] opacity-50 transform scale-[3]">
          <QuoteIcon />
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--signal)]"></span>
              06 — Voices
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              From founders who sold
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-8">
              {/* Quote */}
              <blockquote className="relative">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-[var(--white)] mb-8 transition-opacity duration-500">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <footer className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 bg-[var(--signal)] flex items-center justify-center text-[var(--black)] font-medium">
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <span className="text-[var(--white)] block">{testimonials[activeTestimonial].name}</span>
                    <span className="text-sm text-[var(--muted)]">
                      {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="md:col-span-4">
              {/* Testimonial navigation */}
              <div className="space-y-4">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-full text-left p-4 border transition-all duration-300 ${
                      i === activeTestimonial
                        ? 'border-[var(--signal)] bg-[var(--black)]'
                        : 'border-[var(--border)] hover:border-[var(--muted)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 flex items-center justify-center text-xs font-medium transition-colors ${
                        i === activeTestimonial ? 'bg-[var(--signal)] text-[var(--black)]' : 'bg-[var(--border)] text-[var(--muted)]'
                      }`}>
                        {t.initials}
                      </div>
                      <span className={`text-sm transition-colors ${
                        i === activeTestimonial ? 'text-[var(--white)]' : 'text-[var(--muted)]'
                      }`}>
                        {t.name}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted)]">{t.company}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 text-[var(--signal)] opacity-20 hidden lg:block">
          <DiamondIcon />
        </div>
        <div className="absolute bottom-20 right-20 text-[var(--signal)] opacity-20 hidden lg:block">
          <DiamondIcon />
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-[var(--signal)] mb-8 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[var(--signal)]"></span>
              07 — The Manifesto
              <span className="w-12 h-px bg-[var(--signal)]"></span>
            </p>

            <div className="space-y-6 font-serif text-xl md:text-2xl lg:text-3xl text-[var(--muted)] leading-relaxed italic">
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                Most acquirers promise transformation.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                We promise the opposite.
              </p>
              <p className="text-[var(--white)] not-italic text-2xl md:text-3xl lg:text-4xl py-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Your company works. You built something real.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                We're not here to "optimize" it into oblivion.
              </p>
              <p className="text-[var(--white)] not-italic py-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                No rebrands. No layoffs. No "synergies."
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Just capital, resources, and the radical act
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                of leaving good things alone.
              </p>
              <div className="pt-12 border-t border-[var(--border)] mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <p className="text-[var(--white)] not-italic text-2xl md:text-3xl lg:text-4xl">
                  We're not visionaries. We're caretakers.
                </p>
                <p className="text-[var(--signal)] not-italic text-2xl md:text-3xl lg:text-4xl mt-4">
                  And that's exactly the point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - New */}
      <section id="founders" className="py-32 bg-[var(--subtle)] relative">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[var(--signal)]"></span>
              08 — Leadership
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Built by founders who sold
            </h2>
            <p className="font-serif text-lg text-[var(--muted)] italic">
              We've been in your shoes. Multiple times.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
            {founders.map((founder, i) => (
              <div key={i} className="bg-[var(--subtle)] p-8 group hover:bg-[var(--black)] transition-colors">
                {/* Avatar */}
                <div className="w-20 h-20 bg-[var(--border)] group-hover:bg-[var(--signal)] flex items-center justify-center text-2xl font-medium group-hover:text-[var(--black)] transition-all mb-6">
                  {founder.initials}
                </div>

                <h3 className="text-xl font-medium mb-1">{founder.name}</h3>
                <p className="text-sm text-[var(--muted)] mb-4">{founder.role}</p>

                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--signal)]">{founder.exits}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Combined experience */}
          <div className="mt-12 p-8 border border-[var(--border)] text-center">
            <p className="text-4xl md:text-5xl font-medium text-[var(--signal)] mb-2">9</p>
            <p className="text-sm text-[var(--muted)]">Combined successful exits</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 text-[var(--white)]">
          <GeometricPattern variant={3} />
        </div>

        <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm text-[var(--signal)] mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[var(--signal)]"></span>
                09 — Contact
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
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
                    className="w-full bg-transparent border border-[var(--border)] px-4 py-4 text-[var(--white)] placeholder:text-[var(--muted)] focus:border-[var(--signal)] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[var(--signal)] text-[var(--black)] px-8 py-4 text-base font-medium hover:bg-[var(--white)] transition-all flex items-center justify-center gap-3 group"
                >
                  Start the conversation
                  <ArrowRight />
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted)] mb-4">Or reach out directly</p>
                <a href="mailto:hello@saas.group" className="text-lg text-[var(--white)] hover:text-[var(--signal)] transition-colors flex items-center gap-2">
                  hello@saas.group
                  <ArrowRight />
                </a>
              </div>
            </div>

            {/* FAQ or additional info */}
            <div className="space-y-6">
              <div className="p-6 border border-[var(--border)] hover:border-[var(--signal)] transition-colors">
                <h3 className="text-lg font-medium mb-2">What happens first?</h3>
                <p className="font-serif text-[var(--muted)]">
                  A 30-minute call. No preparation required. Just tell us about your company.
                </p>
              </div>
              <div className="p-6 border border-[var(--border)] hover:border-[var(--signal)] transition-colors">
                <h3 className="text-lg font-medium mb-2">What if I'm not ready to sell?</h3>
                <p className="font-serif text-[var(--muted)]">
                  That's fine. We're happy to stay in touch. No pressure, ever.
                </p>
              </div>
              <div className="p-6 border border-[var(--border)] hover:border-[var(--signal)] transition-colors">
                <h3 className="text-lg font-medium mb-2">What's your timeline?</h3>
                <p className="font-serif text-[var(--muted)]">
                  Term sheet in 2 weeks. Close in 60 days. Yours to decide after that.
                </p>
              </div>
              <div className="p-6 border border-[var(--border)] hover:border-[var(--signal)] transition-colors">
                <h3 className="text-lg font-medium mb-2">Do I have to stay involved?</h3>
                <p className="font-serif text-[var(--muted)]">
                  No. But if you want to, we'd love that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[var(--border)] bg-[var(--subtle)]">
        <div className="max-w-[var(--max-width)] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 border border-[var(--border)] flex items-center justify-center">
                  <span className="text-sm">sg</span>
                </span>
                <span className="text-lg font-medium">saas.group</span>
              </div>
              <p className="text-sm text-[var(--muted)] max-w-sm mb-8">
                The anti-acquisition acquisition company. Built by founders who sold,
                for founders thinking about it.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-[var(--border)] flex items-center justify-center hover:border-[var(--signal)] hover:text-[var(--signal)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-[var(--border)] flex items-center justify-center hover:border-[var(--signal)] hover:text-[var(--signal)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-[var(--muted)] mb-4 uppercase tracking-wider">Company</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#premise" className="hover:text-[var(--signal)] transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-[var(--signal)] transition-colors">Portfolio</a></li>
                <li><a href="#founders" className="hover:text-[var(--signal)] transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-[var(--signal)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-[var(--muted)] mb-4 uppercase tracking-wider">Resources</p>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[var(--signal)] transition-colors flex items-center gap-2">
                  The Anti-Deck
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </a></li>
                <li><a href="#" className="hover:text-[var(--signal)] transition-colors">saas.unbound Podcast</a></li>
                <li><a href="#" className="hover:text-[var(--signal)] transition-colors">The Boring Blog</a></li>
                <li><a href="#" className="hover:text-[var(--signal)] transition-colors">M&A Course</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm text-[var(--muted)] mb-4 uppercase tracking-wider">Locations</p>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--signal)]"></span>
                  Seattle, WA
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--signal)]"></span>
                  Las Vegas, NV
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--signal)]"></span>
                  Berlin, Germany
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--signal)]"></span>
                  Paris, France
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} saas.group. No rights reserved. Copy whatever you want.
            </p>
            <div className="flex items-center gap-6 text-xs text-[var(--muted)]">
              <a href="#" className="hover:text-[var(--white)] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[var(--white)] transition-colors">Terms</a>
              <a href="#" className="hover:text-[var(--white)] transition-colors">Imprint</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
