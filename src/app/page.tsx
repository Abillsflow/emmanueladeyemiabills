import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Code2,
  Layers3,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Cork & Canvas",
    type: "Web design · Webflow",
    description: "A polished digital home for creative experiences, events, and classes.",
    label: "Experience design",
    style: "cork",
  },
  {
    number: "02",
    name: "HOMEBOYS",
    type: "Brand · E-commerce",
    description: "A streetwear concept built around identity, culture, and brotherhood.",
    label: "Commerce & culture",
    style: "homeboys",
  },
  {
    number: "03",
    name: "ClosedHQ",
    type: "Product design · Web application",
    description: "A transaction-focused property marketplace designed to make the next step feel clear.",
    label: "Product thinking",
    style: "closedhq",
  },
];

const capabilities = [
  { number: "01", title: "Web design & development", copy: "Distinctive, responsive websites built with intention—from first impression to final interaction.", icon: Layers3 },
  { number: "02", title: "Webflow development", copy: "Precise builds, thoughtful CMS architecture, interactions, and maintainable no-code systems.", icon: Code2 },
  { number: "03", title: "E-commerce experiences", copy: "Storefronts that bring brand storytelling, product discovery, and conversion into one system.", icon: Sparkles },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10100f]/85 backdrop-blur-xl">
        <nav className="page-shell flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="text-sm font-semibold tracking-tight" aria-label="Abills home">
            ABILLS<span className="accent">.</span>
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            <a className="nav-link" href="#work">Selected work</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
          </div>
          <a href="#contact" className="pill-link !px-4 !py-2.5">Let’s talk <MoveUpRight size={13} /></a>
        </nav>
      </header>

      <section id="home" className="page-shell relative flex min-h-[660px] flex-col justify-center pb-24 pt-24 md:min-h-[770px] md:pb-32 md:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-150px] top-28 h-[420px] w-[420px] rounded-full bg-lime-200/[0.055] blur-[120px]" />
        <div className="eyebrow reveal mb-9 flex items-center gap-3"><span className="inline-block h-2 w-2 rounded-full bg-[#c7ff62]" /> Independent digital designer & developer</div>
        <h1 className="reveal max-w-[1000px] text-[clamp(54px,9.8vw,124px)] leading-[.92] font-medium tracking-[-.085em]">
          I make digital<br />
          <span className="text-[#8e8b84]">feel different.</span>
        </h1>
        <div className="delay-1 reveal mt-10 flex flex-col gap-8 md:ml-[34%] md:mt-12">
          <p className="max-w-[440px] text-[15px] leading-7 text-[#b7b4ad] md:text-base">
            I’m Emmanuel Adeyemi, also known as Abills. I design and build purposeful digital experiences for ambitious people and brands.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="pill-link border-[#c7ff62] bg-[#c7ff62] text-[#10100f] hover:bg-transparent hover:text-[#c7ff62]" href="#work">Explore my work <ArrowDownRight size={15} /></a>
            <a className="pill-link" href="#about">A little about me</a>
          </div>
        </div>
        <div className="delay-2 reveal mt-24 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
          <span className="eyebrow">Design with intent. Build with purpose.</span>
          <span className="flex items-center gap-2 text-xs text-[#a7a49d]"><Asterisk size={16} className="accent" /> Available for select projects</span>
        </div>
      </section>

      <div className="border-y border-white/10 py-5">
        <div className="marquee-track flex w-max items-center gap-10 text-[11px] tracking-[.18em] text-[#a7a49d] uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              <span>Digital experiences</span><span className="accent">✳</span><span>Webflow development</span><span className="accent">✳</span><span>E-commerce</span><span className="accent">✳</span><span>Creative technology</span><span className="accent">✳</span><span>Digital experiences</span>
            </div>
          ))}
        </div>
      </div>

      <section id="work" className="page-shell section">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="eyebrow mb-5">01 / Selected work</p><h2 className="section-heading max-w-[680px]">A few things I’ve<br />put into the world<span className="accent">.</span></h2></div>
          <p className="max-w-[280px] text-sm leading-6 text-[#a7a49d]">A selection of digital products, brand experiences, and ideas in progress.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.number} className={`project-card group ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className={`project-art art-grid absolute inset-0 flex items-center justify-center overflow-hidden ${project.style === "cork" ? "bg-[#dfd7c8]" : project.style === "homeboys" ? "bg-[#77776c]" : "bg-[#252b2a]"}`}>
                {project.style === "cork" ? (
                  <div className="flex w-[80%] flex-col gap-4 border border-black/15 bg-[#f4efe5] p-6 text-[#25231f] shadow-2xl sm:w-[60%] sm:p-10">
                    <span className="text-[9px] tracking-[.25em] uppercase">Pour · Paint · Connect</span>
                    <span className="max-w-md text-4xl leading-none tracking-[-.07em] sm:text-6xl">Make room<br />for creativity.</span>
                    <div className="mt-4 flex justify-between border-t border-black/15 pt-3 text-[9px] uppercase"><span>Classes & events</span><span>Est. Texas</span></div>
                  </div>
                ) : project.style === "homeboys" ? (
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute h-[72%] w-[45%] rotate-[-8deg] border border-white/20 bg-[#333630] shadow-2xl" />
                    <div className="relative text-center"><p className="text-[10px] tracking-[.4em] text-white/60">FOUNDED 2024</p><p className="mt-3 text-5xl font-black tracking-[-.09em] text-[#f2eedf] sm:text-7xl">HOMEBOYS</p><p className="mt-2 text-[9px] tracking-[.35em] text-white/70">BROTHERHOOD</p></div>
                  </div>
                ) : (
                  <div className="relative w-[82%] border border-white/15 bg-[#191f1e] p-5 shadow-2xl sm:w-[65%] sm:p-8">
                    <div className="mb-8 flex justify-between border-b border-white/10 pb-4 text-[9px] tracking-[.2em] text-white/60"><span>CLOSEDHQ / MARKET</span><span>↗</span></div>
                    <p className="text-4xl font-semibold tracking-[-.08em] sm:text-6xl">Find your<br /><span className="text-[#c7ff62]">next move.</span></p>
                    <div className="mt-8 flex gap-2"><span className="h-1 w-12 bg-[#c7ff62]" /><span className="h-1 w-8 bg-white/20" /><span className="h-1 w-8 bg-white/20" /></div>
                  </div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 pt-20 sm:flex-row sm:items-end sm:justify-between sm:p-7 sm:pt-24">
                <div><p className="mb-2 text-[10px] tracking-[.15em] text-white/60 uppercase">{project.number} / {project.type}</p><h3 className="text-2xl tracking-[-.04em] sm:text-3xl">{project.name}</h3><p className="mt-2 max-w-md text-xs leading-5 text-white/70">{project.description}</p></div>
                <span className="flex w-fit items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-[10px] text-white/80">{project.label} <ArrowUpRight size={13} /></span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-[#77756f]">Selected project visuals are conceptual placeholders pending final case-study assets.</p>
      </section>

      <section id="about" className="page-shell section">
        <p className="eyebrow mb-5">02 / The person behind the pixels</p>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <h2 className="section-heading md:col-span-7">Good work isn’t just how it looks. <span className="text-[#8e8b84]">It’s how it works.</span></h2>
          <div className="md:col-span-5 md:pt-2">
            <p className="text-[15px] leading-7 text-[#b7b4ad]">I’m Emmanuel Adeyemi, a digital creator who brings design thinking and practical development together. I care about the details people notice—and the decisions that make a product genuinely useful.</p>
            <p className="mt-5 text-[15px] leading-7 text-[#b7b4ad]">From brand-led websites to e-commerce experiences, I work to make the complex feel clear, the ordinary feel considered, and every interaction earn its place.</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="border border-white/10 p-4"><p className="text-xl">Design</p><p className="mt-2 text-[11px] text-[#a7a49d]">Clarity before decoration</p></div>
              <div className="border border-white/10 p-4"><p className="text-xl">Build</p><p className="mt-2 text-[11px] text-[#a7a49d]">Details that hold up</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="page-shell section">
        <p className="eyebrow mb-5">03 / What I do</p>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-heading">From first idea<br />to live experience<span className="accent">.</span></h2><p className="max-w-[280px] text-sm leading-6 text-[#a7a49d]">A thoughtful process, a clear purpose, and an outcome built around your goals.</p></div>
        <div className="border-t border-white/10">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return <article key={item.number} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-12 md:items-center md:gap-8">
              <span className="eyebrow md:col-span-1">{item.number}</span>
              <div className="flex items-center gap-4 md:col-span-5"><Icon className="accent shrink-0" size={22} strokeWidth={1.4} /><h3 className="text-xl tracking-[-.03em] sm:text-2xl">{item.title}</h3></div>
              <p className="text-sm leading-6 text-[#a7a49d] md:col-span-5">{item.copy}</p>
              <span className="hidden justify-self-end text-[#77756f] md:block"><ArrowUpRight size={18} /></span>
            </article>;
          })}
        </div>
      </section>

      <section className="page-shell section">
        <div className="relative overflow-hidden border border-white/10 bg-[#191a17] p-7 sm:p-12 md:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full bg-lime-200/[0.08] blur-[90px]" />
          <p className="eyebrow mb-6">A little about how I work</p>
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <h2 className="relative text-4xl leading-[1.04] tracking-[-.06em] sm:text-6xl">Curious by nature.<br /><span className="text-[#8e8b84]">Intentional by design.</span></h2>
            <div className="relative space-y-4 text-sm leading-6 text-[#b7b4ad]">
              <p>I believe great digital work starts with listening, gets stronger through thoughtful iteration, and succeeds when the final experience feels effortless.</p>
              <div className="flex items-center gap-2 pt-2 text-xs text-white"><Check className="accent" size={15} /> Clear communication, considered craft, useful outcomes.</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="page-shell section !pb-8">
        <p className="eyebrow mb-6">04 / Start a conversation</p>
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2 className="text-[clamp(50px,8vw,96px)] leading-[.95] tracking-[-.08em]">Have a good<br />one in mind<span className="accent">?</span></h2><a href="mailto:hello@abills.dev?subject=Project%20inquiry" className="pill-link mt-8 border-[#c7ff62] bg-[#c7ff62] text-[#10100f] hover:bg-transparent hover:text-[#c7ff62]">Tell me about it <ArrowUpRight size={15} /></a></div>
          <div className="flex flex-col justify-end gap-3 md:items-end">
            <p className="max-w-sm text-sm leading-6 text-[#a7a49d] md:text-right">For a website, a new digital product, or a collaboration—let’s make something meaningful.</p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#d7d4cc] md:justify-end"><a className="nav-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="nav-link" href="https://github.com/Abillsflow" target="_blank" rel="noreferrer">GitHub ↗</a><a className="nav-link" href="https://www.fiverr.com/" target="_blank" rel="noreferrer">Fiverr ↗</a></div>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] tracking-[.12em] text-[#77756f] sm:flex-row"><span>© {new Date().getFullYear()} EMMANUEL ADEYEMI / ABILLS</span><span>DESIGNED WITH INTENT · BUILT WITH CARE</span><a className="nav-link flex items-center gap-1" href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
