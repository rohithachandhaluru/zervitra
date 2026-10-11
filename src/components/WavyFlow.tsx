import { useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, BarChart2, Palette, Code2, Rocket } from "lucide-react";

const STAGES = [
  {
    num: "01",
    title: "Research",
    icon: Search,
    description:
      "Understand the client's goals, audience, requirements, and the core business problem we're solving together.",
    bullets: ["Stakeholder interviews", "User & audience analysis", "Requirements gathering", "Goal definition"],
  },
  {
    num: "02",
    title: "Analysis",
    icon: BarChart2,
    description:
      "Evaluate scope, constraints, technical options, and priorities to chart the clearest path forward.",
    bullets: ["Scope & feasibility review", "Technical assessment", "Risk identification", "Solution mapping"],
  },
  {
    num: "03",
    title: "Design",
    icon: Palette,
    description:
      "Create user flows, information architecture, wireframes, and interface concepts that match the product vision.",
    bullets: ["User flows & IA", "Wireframes & prototypes", "Visual design system", "Design review"],
  },
  {
    num: "04",
    title: "Develop",
    icon: Code2,
    description:
      "Implement the solution, integrate required functionality, write tests, and review quality throughout.",
    bullets: ["Iterative development", "API & feature integration", "QA testing", "Code reviews"],
  },
  {
    num: "05",
    title: "Launch & Improve",
    icon: Rocket,
    description:
      "Prepare deployment, hand over documentation, and identify improvements based on real-world feedback.",
    bullets: ["Deployment & go-live", "Documentation handover", "Post-launch review", "Continuous improvements"],
  },
];

const TOTAL = STAGES.length;

// Position each card relative to the active one
const getCardTransform = (offset: number, reducedMotion: boolean) => {
  // offset: -2, -1, 0, 1, 2
  const abs = Math.abs(offset);
  const sign = offset < 0 ? -1 : offset > 0 ? 1 : 0;

  const translateX = sign * (abs === 1 ? 48 : abs === 2 ? 80 : 0);
  const translateY = abs === 0 ? 0 : abs === 1 ? 16 : 28;
  const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.66;
  const rotate = reducedMotion ? 0 : sign * (abs === 1 ? 6 : abs === 2 ? 11 : 0);
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.65 : 0.35;
  const zIndex = 10 - abs * 3;

  return { translateX, translateY, scale, rotate, opacity, zIndex };
};

const ProcessSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const reducedMotion = useReducedMotion() ?? false;

  const prev = useCallback(() => setActiveIdx((i) => (i - 1 + TOTAL) % TOTAL), []);
  const next = useCallback(() => setActiveIdx((i) => (i + 1) % TOTAL), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section
      id="process"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20"
      aria-label="Our Process"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A clear, repeatable approach that keeps projects on track from first conversation to final delivery.
          </p>
        </motion.div>

        {/* Card stage — desktop fan layout */}
        <div className="relative hidden md:flex items-end justify-center" style={{ height: 480 }}>
          {STAGES.map((stage, idx) => {
            // Compute offset with wrap-around so closest is always shown
            let offset = idx - activeIdx;
            if (offset > Math.floor(TOTAL / 2)) offset -= TOTAL;
            if (offset < -Math.floor(TOTAL / 2)) offset += TOTAL;

            const { translateX, translateY, scale, rotate, opacity, zIndex } = getCardTransform(
              offset,
              reducedMotion
            );
            const isActive = offset === 0;
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.num}
                className="absolute w-72 cursor-pointer select-none"
                style={{ zIndex }}
                animate={{
                  x: `${translateX}%`,
                  y: translateY,
                  scale,
                  rotate,
                  opacity,
                }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 280, damping: 28, mass: 0.8 }
                }
                onClick={() => !isActive && setActiveIdx(idx)}
                aria-hidden={!isActive}
              >
                <div
                  className={`rounded-3xl p-7 border transition-colors duration-300 h-full ${
                    isActive
                      ? "bg-card border-primary/40 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.35)]"
                      : "premium-glass border-white/5"
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs text-muted-foreground/60 font-mono tracking-wider">THE PROCESS</span>
                    <span className="text-xs font-mono text-muted-foreground/60">
                      {stage.num} / {String(TOTAL).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      isActive ? "bg-primary/15" : "bg-white/5"
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${isActive ? "text-primary" : "text-muted-foreground/60"}`} />
                  </div>

                  {/* Stage number */}
                  <div className={`text-5xl font-black mb-2 ${isActive ? "text-primary/20" : "text-white/8"}`}>
                    {stage.num}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 ${isActive ? "text-foreground" : "text-foreground/50"}`}>
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-5 ${isActive ? "text-muted-foreground" : "text-muted-foreground/40"}`}>
                    {stage.description}
                  </p>

                  {/* Bullets — active only */}
                  {isActive && (
                    <ul className="space-y-1.5">
                      {stage.bullets.map((b) => (
                        <li key={b} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: single-card stack */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              key={activeIdx}
              initial={reducedMotion ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-primary/30 rounded-3xl p-7 shadow-[0_0_30px_-8px_hsl(var(--primary)/0.3)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs text-muted-foreground/60 font-mono">THE PROCESS</span>
                <span className="text-xs font-mono text-muted-foreground/60">
                  {STAGES[activeIdx].num} / {String(TOTAL).padStart(2, "0")}
                </span>
              </div>

              {(() => {
                const Icon = STAGES[activeIdx].icon;
                return (
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                );
              })()}

              <div className="text-5xl font-black text-primary/20 mb-2">{STAGES[activeIdx].num}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{STAGES[activeIdx].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{STAGES[activeIdx].description}</p>
              <ul className="space-y-1.5">
                {STAGES[activeIdx].bullets.map((b) => (
                  <li key={b} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="mt-12 flex flex-col items-center gap-5">
          {/* Arrows + dots */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous stage"
              className="w-11 h-11 rounded-full border border-border/40 hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-primary/8 focus-visible:ring-2 focus-visible:ring-primary/50 outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Process stages">
              {STAGES.map((stage, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`Stage ${stage.num}: ${stage.title}`}
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/50 outline-none ${
                    i === activeIdx
                      ? "w-8 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next stage"
              className="w-11 h-11 rounded-full border border-border/40 hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-primary/8 focus-visible:ring-2 focus-visible:ring-primary/50 outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Active stage label */}
          <p className="text-sm text-muted-foreground font-medium">
            {STAGES[activeIdx].num} — {STAGES[activeIdx].title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
