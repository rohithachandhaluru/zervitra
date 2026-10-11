import { motion } from "framer-motion";
import { ExternalLink, Globe, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  categoryIcon: React.ReactNode;
  objective: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  url: string;
}

const PROJECTS: Project[] = [
  {
    title: "64Framez",
    category: "Creative Agency Website",
    categoryIcon: <Globe className="w-3.5 h-3.5" />,
    objective: "Present a creative design agency's identity, services, and work through a bold digital presence.",
    description:
      "64Framez is a creative agency website built around a strong visual identity. The dark, high-contrast design uses bold typography and a dramatic “We Are Creative Designers” headline to communicate the agency’s positioning. The site features sections for services, projects, and a direct contact prompt — designed for designers who build for builders.",
    tech: ["Web Development", "UI/UX Design", "Responsive Layout"],
    image: "/portfolio/64framez.png",
    imageAlt: "64Framez creative agency website — bold dark design with '64 FRAMEZ' headline",
    url: "https://64framez.com",
  },
  {
    title: "Sri Prasanna Venkateswara Swamy Seva",
    category: "Temple & Donation Website",
    categoryIcon: <Heart className="w-3.5 h-3.5" />,
    objective:
      "Present temple information, seva services, donation options, and visitor interactions for Sri Prasanna Venkateswara Swamy vaari Devasthanam.",
    description:
      "A bilingual (Telugu and English) temple website serving the community of Sri Prasanna Venkateswara Swamy vaari Devasthanam. The site includes temple information, a comprehensive navigation covering About, Sevas, Gallery, Trust, and Feedback sections, and a donation module supporting multiple purposes and payment methods. The design preserves the temple's cultural identity with traditional imagery and a warm colour palette.",
    tech: ["Web Development", "Bilingual Content", "Donation Integration", "Responsive Design"],
    image: "/portfolio/temple.png",
    imageAlt: "Sri Prasanna Venkateswara Swamy temple website — bilingual temple portal with donation form",
    url: "https://www.slppvtempletpt.org",
  },
  {
    title: "Team Garuda",
    category: "Business & Team Website",
    categoryIcon: <Users className="w-3.5 h-3.5" />,
    objective: "Present Team Garuda's identity, services, work portfolio, and contact options through a clean business website.",
    description:
      "Team Garuda’s website leads with a confident “Transform Your Visions into VICTORIES” headline and a clear, minimal layout. The site communicates the team’s approach — investigate first, respond appropriately, execute effectively — and provides clean navigation across Home, Our Works, Services, About, and a direct Let’s Talk CTA. A notification banner engages visitors immediately on arrival.",
    tech: ["Web Development", "UI Design", "Clean Navigation", "Responsive Layout"],
    image: "/portfolio/team-garuda.png",
    imageAlt: "Team Garuda business website — bold black and white design with 'Transform Your Visions' headline",
    url: "https://garuda.zervitra.com",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="zv-card group flex flex-col"
  >
    {/* Screenshot */}
    <div className="relative overflow-hidden aspect-[16/9] bg-background/50">
      <img
        src={project.image}
        alt={project.imageAlt}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* View Project overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-primary/90 transition-colors"
        >
          View Project <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-7 flex flex-col flex-1">
      {/* Category badge */}
      <div className="flex items-center gap-1.5 text-primary text-xs font-semibold tracking-wide uppercase mb-3">
        {project.categoryIcon}
        {project.category}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>

      <p className="text-sm text-primary/80 font-medium mb-3 leading-snug">{project.objective}</p>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-primary/8 border border-primary/15 text-primary/90 rounded-full px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <Button
          variant="outline"
          className="w-full rounded-full border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group/btn"
        >
          View Project
          <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </a>
    </div>
  </motion.article>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Portfolio & Case Studies</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A selection of real projects we've built and delivered for clients.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
