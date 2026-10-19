"use client";

import { motion, useReducedMotion } from "motion/react";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => reduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const } };

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
        <a className="hero-kicker sm:hidden" href="mailto:">Let’s connect ↗</a>
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
            transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/images/abills-portrait.png"
              alt="Emmanuel Adeyemi, also known as Abills"
              className="hero-portrait-image"
              fetchPriority="high"
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={reduceMotion ? undefined : { y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
            />
            <motion.div
              className="hero-portrait-caption"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.95, ease: "easeOut" }}
            >
              <span className="hero-kicker">Design with intention</span>
              <span className="text-xl text-[#53574d]">✳</span>
            </motion.div>
          </motion.div>

          <motion.aside {...reveal(0.62)} className="order-3 flex flex-col gap-5 md:pl-2">
            <p className="hero-kicker max-w-[190px] leading-[1.8]">Turning ideas into useful, considered digital experiences.</p>
            <div className="hero-rule" />
            <div>
              <p className="text-[34px] font-medium tracking-[-.07em]">Web<span className="text-[#9ca58e]">flow</span></p>
              <p className="hero-kicker mt-1">Design & development</p>
            </div>
            <div className="hero-rule" />
            <div>
              <p className="text-[34px] font-medium tracking-[-.07em]">E-com<span className="text-[#9ca58e]">merce</span></p>
              <p className="hero-kicker mt-1">Brand-led storefronts</p>
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
          <span className="hero-index">Scroll to explore ↓</span>
        </motion.div>
      </section>
    </main>
  );
}
