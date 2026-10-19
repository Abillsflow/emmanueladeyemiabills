"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function ScrambleText({
  text,
  accentFrom,
  delay = 0,
  reducedMotion,
}: {
  text: string;
  accentFrom: number;
  delay?: number;
  reducedMotion: boolean;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setDisplay(
        [...text]
          .map((char) => (char === " " || char === "-" ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join("")
      );

      interval = setInterval(() => {
        frame += 1;
        const revealed = Math.floor(frame / 2);
        setDisplay(
          [...text]
            .map((char, index) => {
              if (char === " " || char === "-") return char;
              if (index < revealed) return char;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (revealed >= text.length) {
          if (interval) clearInterval(interval);
          setDisplay(text);
        }
      }, 42);
    }, delay * 1000);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, reducedMotion]);

  return (
    <span aria-label={text} className="inline-block" aria-live="off">
      {display.split("").map((char, index) => (
        <span key={index} className={index >= accentFrom ? "text-[#9ca58e]" : undefined} aria-hidden="true">
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [compactScreen, setCompactScreen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const update = () => setCompactScreen(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const reveal = (delay = 0) => reduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: compactScreen ? 0.42 : 0.85, delay: compactScreen ? delay * 0.35 : delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="hero-shell hero-topline flex min-h-[76px] items-center justify-between gap-5">
        <motion.a {...reveal(0.05)} href="#home" className="text-sm font-semibold tracking-[-.04em]" aria-label="Abills home">
          ABILLS<span style={{ color: "var(--accent)" }}>.</span>
        </motion.a>
        <div className="hidden items-center gap-8 sm:flex">
          <motion.span {...reveal(0.12)} className="hero-kicker">Digital designer & developer</motion.span>
          <motion.span {...reveal(0.18)} className="flex items-center gap-2 hero-kicker"><span className="hero-dot" /> Available for freelance</motion.span>
        </div>
        <a className="hero-kicker sm:hidden hero-connect" href="mailto:">Let’s connect
          <svg className="hero-connect-arrow" aria-hidden="true" viewBox="0 0 16 16" fill="none">
            <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </header>

      <section id="home" className="hero-shell hero-main relative flex flex-col justify-center pb-12 pt-12 md:pb-16 md:pt-16">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[13%] overflow-hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-display">PORTFOLIO</div>
        </motion.div>

        <div className="relative z-10 grid items-center gap-7 md:grid-cols-[.85fr_1.1fr_.52fr] md:gap-8">
          <motion.div {...reveal(0.42)} className="order-2 pb-3 md:order-1 md:pb-0">
            <p className="hero-script mb-4 text-[27px] text-[#777a70] sm:text-[32px]">Hello, I’m</p>
            <h1 className="hero-name">Emmanuel<br />Adeyemi<span style={{ color: "var(--accent)" }}>.</span></h1>
            <p className="mt-5 text-[11px] font-semibold uppercase leading-[1.7] tracking-[.13em] text-[#69715f]">Web designer &<br />digital creator</p>
            <p className="mt-5 max-w-[300px] text-[13px] leading-[1.8] text-[#777a70]">
              I design and build thoughtful digital experiences that bring clarity to brands and turn good ideas into something real.
            </p>
            <div className="mt-7 flex items-center gap-2 hero-kicker"><span className="hero-dot" /> Based in Nigeria · Working worldwide</div>
          </motion.div>

          <motion.div
            className="hero-portrait hero-portrait--blend order-1 h-[380px] md:order-2 md:h-[min(650px,78vh)]"
            initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.965 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: compactScreen ? 0.65 : 1.15, delay: compactScreen ? 0.06 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/images/abills-portrait.png"
              alt="Emmanuel Adeyemi, also known as Abills"
              className="hero-portrait-image"
              fetchPriority="high"
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={reduceMotion || compactScreen ? undefined : { y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
            />
            <motion.div
              className="hero-portrait-caption"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.95, ease: "easeOut" }}
            >
              <span className="hero-kicker">Design with intention</span>
              <span className="hero-spark" aria-hidden="true" />
            </motion.div>
          </motion.div>

          <motion.aside {...reveal(0.62)} className="order-3 flex flex-col gap-5 md:pl-2">
            <p className="hero-kicker max-w-[190px] leading-[1.8]">Turning ideas into useful, considered digital experiences.</p>
            <div className="hero-rule" />
            <div>
              <h2 className="text-[34px] font-medium tracking-[-.07em]">
                <ScrambleText text="Webflow" accentFrom={4} delay={compactScreen ? 0.18 : 0.78} reducedMotion={!!reduceMotion} />
              </h2>
              <motion.p
                className="hero-kicker mt-1"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: compactScreen ? 0.3 : 0.55, delay: reduceMotion ? 0 : compactScreen ? 0.55 : 1.48, ease: "easeOut" }}
              >Design & development</motion.p>
            </div>
            <div className="hero-rule" />
            <div>
              <h2 className="text-[34px] font-medium tracking-[-.07em]">
                <ScrambleText text="E-commerce" accentFrom={5} delay={compactScreen ? 0.3 : 0.98} reducedMotion={!!reduceMotion} />
              </h2>
              <motion.p
                className="hero-kicker mt-1"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: compactScreen ? 0.3 : 0.55, delay: reduceMotion ? 0 : compactScreen ? 0.7 : 1.68, ease: "easeOut" }}
              >Brand-led storefronts</motion.p>
            </div>
            <div className="hero-rule" />
            <div className="pt-1">
              <p className="hero-kicker mb-3">Currently open to</p>
              <p className="max-w-[170px] text-sm leading-6">Good people, thoughtful projects, and new ideas.</p>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[var(--line)] pt-5 md:mt-12"
          {...reveal(0.75)}
        >
          <span className="hero-index">01 / 01 — INTRODUCTION</span>
          <span className="hero-index">A thoughtful approach to the digital world.</span>
          <span className="hero-index">Scroll to explore</span>
        </motion.div>
      </section>

      <section id="selected-projects" className="hero-shell projects-section">
        <div className="projects-heading">
          <div>
            <p className="hero-kicker projects-eyebrow">A selection of recent work</p>
            <h2 className="projects-title">Selected <span>projects</span></h2>
          </div>
          <a className="projects-all-link" href="mailto:">Have a project in mind? <span className="arrow-icon" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
        </div>

        <div className="projects-grid">
          <motion.a
            href="https://www.closedhq.com/"
            target="_blank"
            rel="noreferrer"
            className="project-card"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-visual project-visual--closedhq">
              <img src="https://image.thum.io/get/width/1200/crop/760/noanimate/https://www.closedhq.com/" alt="ClosedHQ real estate marketplace website preview" loading="lazy" />
              <span className="project-open" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span className="project-visual-label">Real estate · Digital platform</span>
            </div>
            <div className="project-meta">
              <span className="project-number">01</span>
              <div className="project-meta-copy">
                <h3>ClosedHQ</h3>
                <p>Real estate marketplace</p>
              </div>
              <span className="project-arrow" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.apexdispensingsystems.com/"
            target="_blank"
            rel="noreferrer"
            className="project-card"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-visual project-visual--apex">
              <img src="https://image.thum.io/get/width/1200/crop/760/noanimate/https://www.apexdispensingsystems.com/" alt="Apex Dispensing Systems website preview" loading="lazy" />
              <span className="project-open" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span className="project-visual-label">Industrial · Product website</span>
            </div>
            <div className="project-meta">
              <span className="project-number">02</span>
              <div className="project-meta-copy">
                <h3>Apex Dispensing Systems</h3>
                <p>Industrial product experience</p>
              </div>
              <span className="project-arrow" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </motion.a>

          <motion.a
            href="https://beyondbarzcic.webflow.io/"
            target="_blank"
            rel="noreferrer"
            className="project-card"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, delay: 0.23, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-visual project-visual--beyond">
              <img src="/images/beyond%20barz.PNG" alt="Beyond Barz CIC website preview" loading="lazy" />
              <span className="project-open" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span className="project-visual-label">Community · Advocacy website</span>
            </div>
            <div className="project-meta">
              <span className="project-number">03</span>
              <div className="project-meta-copy">
                <h3>Beyond Barz CIC</h3>
                <p>Community and advocacy</p>
              </div>
              <span className="project-arrow" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </motion.a>
        </div>

        <div className="projects-footer">
          <span className="hero-index">SELECTED WORK / 2026</span>
          <span className="hero-index">Strategy, design & digital development</span>
        </div>
      </section>

      <section id="about" className="hero-shell about-section">
        <div className="about-intro">
          <motion.div className="about-heading" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="hero-kicker about-eyebrow">A little about me</p>
            <h2>Hi there, I’m <span>Emmanuel Adeyemi.</span></h2>
            <p className="about-name-pill">Also known as Abills</p>
          </motion.div>
          <motion.div className="about-copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <p>I’m a digital designer and creator who enjoys turning ideas into clear, thoughtful online experiences.</p>
            <p>From website design and Webflow development to e-commerce experiences, I bring design and practical thinking together to help brands show up with confidence online.</p>
          </motion.div>
        </div>
        <div className="about-gallery">
          <div className="about-shape" aria-hidden="true" />
          <motion.figure className="about-photo about-photo--portrait" initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: -2 }} animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-2, -2, -2] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], y: { duration: 8.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 } }}>
            <img src="/images/emmanuelabills%20potrait.jpg" alt="Black and white portrait of Emmanuel Adeyemi" loading="lazy" />
            <figcaption>Emmanuel Adeyemi <span>— Abills</span></figcaption>
          </motion.figure>
          <motion.figure className="about-photo about-photo--studio" initial={reduceMotion ? false : { opacity: 0, y: 38, rotate: 1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 1.5 }} animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [1.5, 1.5, 1.5] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1], y: { duration: 9.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.1 } }}>
            <img src="/images/emmanuelabills%20studio.jpg" alt="Emmanuel Adeyemi in a red striped shirt during a studio shoot" loading="lazy" />
            <figcaption>Creative by nature <span>— intentional by design</span></figcaption>
          </motion.figure>
        </div>
        <div className="about-bottomline">
          <span className="hero-index">DESIGN · DIGITAL · CREATIVE</span>
          <span className="hero-index">Thoughtful work, made with intention.</span>
        </div>
      </section>

      <ServicesTimeline reduceMotion={!!reduceMotion} />

    </main>
  );
}

const SERVICES = [
  {
    number: "01",
    category: "BUILD",
    title: "Website Development",
    description: "Responsive, carefully built websites that give your business a confident home online.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    alt: "Freelancer working on a website at a clean desktop workspace",
    tags: ["Webflow", "Responsive builds", "CMS"]
  },
  {
    number: "02",
    category: "DESIGN",
    title: "Website Design & UI/UX",
    description: "Clear visual systems and intuitive user journeys that make digital experiences feel effortless.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=85",
    alt: "Creative designer reviewing digital layouts at a workstation",
    tags: ["Web design", "UI/UX", "Prototyping"]
  },
  {
    number: "03",
    category: "CREATE",
    title: "No-Code App Development",
    description: "Useful web apps, MVPs, and connected digital products built with no-code tools.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    alt: "Digital professional working across a laptop and online tools",
    tags: ["MVPs", "Web apps", "Integrations"]
  },
  {
    number: "04",
    category: "CONNECT",
    title: "Automation",
    description: "Smarter workflows that connect your tools, cut repetitive tasks, and give your team time back.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    alt: "Creative team collaborating around a laptop in a modern workspace",
    tags: ["Workflow design", "Integrations", "Process improvement"]
  },
  {
    number: "05",
    category: "GROW",
    title: "Search Engine Optimization",
    description: "Stronger technical foundations and on-page structure to help the right people find your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    alt: "Freelancer reviewing website analytics and performance",
    tags: ["On-page SEO", "Technical foundations", "Content structure"]
  },
  {
    number: "06",
    category: "CREATE",
    title: "AI UGC Video",
    description: "Product-led, AI-assisted creator-style videos for brands that need fresh campaign content.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
    alt: "Content creator working on a video production setup",
    tags: ["Product creative", "Social video", "Ad concepts"]
  },
  {
    number: "07",
    category: "SELL",
    title: "E-commerce",
    description: "Storefronts and shopping experiences that present products beautifully and make buying simple.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    alt: "Professional planning an online store and digital customer experience",
    tags: ["Shopify", "Store design", "Product pages"]
  },
  {
    number: "08",
    category: "PROMOTE",
    title: "Paid Advertising",
    description: "Thoughtful campaign setup and creative direction to help brands reach relevant audiences.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    alt: "Digital marketer collaborating on campaign strategy at a desk",
    tags: ["Campaign setup", "Creative testing", "Performance"]
  }
];

function ServicesTimeline({ reduceMotion }: { reduceMotion: boolean }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  const moveGallery = (direction: number) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const card = gallery.querySelector<HTMLElement>(".service-gallery-card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(gallery).columnGap || getComputedStyle(gallery).gap || "24");
    gallery.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reduceMotion ? "auto" : "smooth" });
  };

  const updateActive = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const cards = Array.from(gallery.querySelectorAll<HTMLElement>(".service-gallery-card"));
    if (!cards.length) return;
    const center = gallery.scrollLeft + gallery.clientWidth * 0.38;
    let nearest = 0;
    let distance = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const nextDistance = Math.abs(card.offsetLeft - center);
      if (nextDistance < distance) { distance = nextDistance; nearest = index; }
    });
    setActiveService(nearest);
  };

  return (
    <section id="services" className="hero-shell services-section">
      <motion.div
        className="services-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="hero-kicker services-eyebrow">What I can help you build</p>
          <h2 className="services-title">Digital solutions,<br /><span>made with intention.</span></h2>
        </div>
        <p className="services-intro">Scroll through the services. A considered mix of design, development and digital growth, built around what your business needs next.</p>
      </motion.div>

      <div className="services-gallery-shell">
        <div className="services-gallery-topline">
          <span className="hero-index">SERVICES / 08 CAPABILITIES</span>
          <div className="services-gallery-controls">
            <span className="services-gallery-count">{String(activeService + 1).padStart(2, "0")} <span>/ 08</span></span>
            <button type="button" className="services-gallery-arrow" aria-label="Previous service" onClick={() => moveGallery(-1)} disabled={activeService === 0}>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12 8H4M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" className="services-gallery-arrow" aria-label="Next service" onClick={() => moveGallery(1)} disabled={activeService === SERVICES.length - 1}>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 8h8M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div className="services-gallery-track" ref={galleryRef} onScroll={updateActive}>
          {SERVICES.map((service, index) => (
            <motion.article
              className="service-gallery-card"
              key={service.number}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.24), ease: [0.22, 1, 0.36, 1] }}
            >
              <a className="service-image-wrap" href={`mailto:?subject=${encodeURIComponent("Project enquiry — " + service.title)}`} aria-label={`Enquire about ${service.title}`}>
                <img src={service.image} alt={service.alt} loading="lazy" />
                <span className="service-image-index">{service.number} <span>/ 08</span></span>
                <span className="service-image-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </a>
              <div className="service-copy">
                <div className="service-title-row">
                  <p className="hero-kicker service-category">{service.category} <span>/ SERVICE</span></p>
                  <span className="service-card-index">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="services-gallery-progress" aria-hidden="true">
          <span style={{ width: `${((activeService + 1) / SERVICES.length) * 100}%` }} />
        </div>
        <p className="services-gallery-hint">Swipe or scroll to explore <span aria-hidden="true">→</span></p>
      </div>

      <motion.div
        className="services-cta"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="hero-kicker">Have a project in mind?</p>
          <h3>Let’s make it <span>happen.</span></h3>
        </div>
        <a href="mailto:" className="services-cta-link">Start a conversation
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </motion.div>
    </section>
  );
}
