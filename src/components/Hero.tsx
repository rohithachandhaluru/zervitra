import { motion } from "framer-motion";
import { Phone, Calendar, ArrowDown, ChevronRight } from "lucide-react";

const PHONE_DISPLAY = "+1 (555) 977-0907";
const PHONE_HREF = "tel:+15559770907";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    aria-label="Hero"
  >
    {/* Background floating paths (preserved from original) */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M-100 400 Q200 100 500 400 T1100 400"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M-100 500 Q300 200 600 500 T1200 300"
          stroke="url(#grad2)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M200 -50 Q400 300 300 600 T500 900"
          stroke="url(#grad3)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(263 70% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(263 70% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(263 70% 50%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 60% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(280 60% 65%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(280 60% 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(250 70% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(250 70% 65%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(250 70% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-primary text-sm font-semibold tracking-widest uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Digital Solutions · Web · Apps · Automation
        </motion.p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
          <span className="block text-primary">WE TURN YOUR</span>
          <span className="block text-foreground">IDEAS INTO</span>
          <span className="block text-foreground">EXCELLENCE</span>
        </h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Thoughtful digital solutions, modern web experiences, and practical automation
          designed to help businesses move forward.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {/* Primary: Call Us */}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_24px_-6px_hsl(var(--primary)/0.6)] hover:shadow-[0_8px_32px_-6px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5 group"
          >
            <Phone className="w-4 h-4 group-hover:animate-pulse" />
            Call Us: {PHONE_DISPLAY}
          </a>

          {/* Secondary: Schedule a Call (scrolls to contact) */}
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2.5 bg-white/5 border border-white/15 text-foreground px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </button>

          {/* Tertiary: Explore Our Work */}
          <button
            onClick={() => scrollTo("portfolio")}
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-medium underline-offset-4 hover:underline"
          >
            Explore Our Work
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="mt-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
