export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="hero-shell hero-topline flex min-h-[76px] items-center justify-between gap-5">
        <a href="#home" className="text-sm font-semibold tracking-[-.04em]" aria-label="Abills home">
          ABILLS<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          <span className="hero-kicker">Digital designer & developer</span>
          <span className="flex items-center gap-2 hero-kicker"><span className="hero-dot" /> Available for freelance</span>
        </div>
        <a className="hero-kicker sm:hidden" href="mailto:">Let’s connect ↗</a>
      </header>

      <section id="home" className="hero-shell hero-main relative flex flex-col justify-center pb-12 pt-12 md:pb-16 md:pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[13%] overflow-hidden">
          <div className="hero-display">PORTFOLIO</div>
        </div>

        <div className="relative z-10 grid items-center gap-7 md:grid-cols-[.85fr_1.1fr_.52fr] md:gap-8">
          <div className="order-2 pb-3 md:order-1 md:pb-0">
            <p className="hero-script mb-4 text-[27px] text-[#777a70] sm:text-[32px]">Hello, I’m</p>
            <h1 className="hero-name">Emmanuel<br />Adeyemi<span style={{ color: "var(--accent)" }}>.</span></h1>
            <p className="mt-5 text-[11px] font-semibold uppercase leading-[1.7] tracking-[.13em] text-[#69715f]">Web designer &<br />digital creator</p>
            <p className="mt-5 max-w-[300px] text-[13px] leading-[1.8] text-[#777a70]">
              I design and build thoughtful digital experiences that bring clarity to brands and turn good ideas into something real.
            </p>
            <div className="mt-7 flex items-center gap-2 hero-kicker"><span className="hero-dot" /> Based in Nigeria · Working worldwide</div>
          </div>

          <div className="hero-portrait order-1 h-[380px] md:order-2 md:h-[min(570px,64vh)]">
            <img
              src="/images/abills-portrait.png"
              alt="Emmanuel Adeyemi, also known as Abills"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/35 to-transparent px-5 pb-5 pt-16">
              <span className="text-[10px] uppercase tracking-[.16em] text-white">Design with intention</span>
              <span className="text-xl text-white">✳</span>
            </div>
          </div>

          <aside className="order-3 flex flex-col gap-5 md:pl-2">
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
          </aside>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[var(--line)] pt-5 md:mt-12">
          <span className="hero-index">01 / 01 — INTRODUCTION</span>
          <span className="hero-index">A thoughtful approach to the digital world.</span>
          <span className="hero-index">Scroll to explore ↓</span>
        </div>
      </section>
    </main>
  );
}
