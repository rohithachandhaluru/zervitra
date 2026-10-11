import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Rocket, BarChart2, Bot } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
  index: number;
}

const ServiceCard = ({ title, description, icon, bullets, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    className="zv-card group p-8"
  >
    {/* Icon */}
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10
                    flex items-center justify-center mb-5
                    group-hover:scale-110 transition-all duration-300">
      <div className="text-primary">{icon}</div>
      <div className="absolute inset-0 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
      {title}
    </h3>
    <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{description}</p>

    <ul className="space-y-2">
      {bullets.map((b) => (
        <li key={b} className="text-sm text-muted-foreground flex items-start">
          <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 mr-3 shrink-0" aria-hidden="true" />
          {b}
        </li>
      ))}
    </ul>

  </motion.div>
);

const SERVICES = [
  {
    title: "Web Development",
    description: "Fast, accessible web apps built with React and TypeScript that drive conversions and grow your business.",
    icon: <Code className="w-7 h-7" />,
    bullets: [
      "React, TypeScript & responsive interfaces",
      "API integration and reusable components",
      "Performance, accessibility & deployment readiness",
    ],
  },
  {
    title: "App Development",
    description: "Mobile and cross-platform apps with robust CI/CD pipelines and essential application flows.",
    icon: <Smartphone className="w-7 h-7" />,
    bullets: [
      "React Native & Flutter development",
      "API integration and core application flows",
      "Testing, analytics & release preparation",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Research-driven, accessible interfaces that convert visitors into customers effectively.",
    icon: <Palette className="w-7 h-7" />,
    bullets: [
      "User research & information architecture",
      "Wireframes and interactive prototypes",
      "Responsive layouts & reusable design systems",
    ],
  },
  {
    title: "MVP Product Development",
    description: "Validate ideas fast with investor-ready MVPs that minimize risk and maximize learning.",
    icon: <Rocket className="w-7 h-7" />,
    bullets: [
      "Problem validation & feature prioritization",
      "Functional prototypes & core product flows",
      "Iterative testing & launch preparation",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Content strategy and performance marketing designed to grow your brand and pipeline.",
    icon: <BarChart2 className="w-7 h-7" />,
    bullets: [
      "Content strategy & campaign planning",
      "Landing-page optimization & analytics",
      "Performance reporting based on actual data",
    ],
  },
  {
    title: "AI Automations",
    description: "LLM-powered workflows and integrations that streamline operations and boost productivity.",
    icon: <Bot className="w-7 h-7" />,
    bullets: [
      "LLM-powered workflows & integrations",
      "Document processing & task automation",
      "Human review & reliability safeguards",
    ],
  },
];

const OurServices = () => (
  <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Our Services</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        From concept to scale, we deliver solutions that drive real business results.
        Choose from our proven service offerings or let us create a custom solution for your needs.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {SERVICES.map((s, i) => (
        <ServiceCard key={s.title} {...s} index={i} />
      ))}
    </div>
  </div>
);

export default OurServices;
