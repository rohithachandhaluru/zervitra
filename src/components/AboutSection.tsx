import { motion } from "framer-motion";
import { Target, Heart, Users, Zap } from "lucide-react";

const FOUNDING_YEAR = "2025";

const VALUES = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Quality First",
    description: "We hold every deliverable to a high standard. If it's not right, we iterate until it is.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Client Collaboration",
    description: "We work with you, not just for you — keeping communication clear at every stage.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Reliable Delivery",
    description: "Consistent, on-schedule output that your team can plan around and depend on.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Practical Solutions",
    description: "We solve real business problems with the right tools — not over-engineered ones.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Story */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Zervitra</h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in{" "}
              <span className="text-primary font-semibold">{FOUNDING_YEAR}</span>
              , Zervitra is a digital solutions company focused on building modern websites,
              applications, intuitive user experiences, and practical automation solutions.
            </p>
            <p>
              We combine creativity, technology, and strategic thinking to help businesses establish
              their digital presence, solve everyday challenges, and turn ideas into meaningful
              digital experiences.
            </p>
            <p>
              From concept to launch, we focus on understanding project goals and creating solutions
              that balance design, functionality, performance, and usability.
            </p>
            <p>
              Our approach combines purpose-driven design, thoughtful development, practical
              innovation, and collaboration. We build responsive digital experiences tailored to real
              user needs and explore AI and automation to simplify repetitive tasks and improve
              everyday workflows.
            </p>
            <p>
              At Zervitra, we believe great digital products are not just about how they look, but
              how effectively they work for the people who use them.
            </p>
            <p className="text-primary font-semibold">
              Zervitra — Design. Develop. Innovate.
            </p>
          </div>
        </motion.div>

        {/* Right: Values */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-glass rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3 text-primary group-hover:bg-primary/25 transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
