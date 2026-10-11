import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Gnanasekar",
    position: "Founder & CEO",
    avatar: "/team/gnanasekar.png",
  },
  {
    name: "Rohitha Chandaluru",
    position: "Operations & Project Delivery",
    avatar: "/team/rohitha-chandaluru.png",
  },
  {
    name: "Geethika Chandhaluru",
    position: "Design & Client Experience",
    avatar: "/team/geethika-chandhaluru.png",
  },
  {
    name: "Shaik Muskan",
    position: "Marketing & Brand Communications",
    avatar: "/team/shaik-muskan.png",
  },
  {
    name: "JaiKumar Gupta",
    position: "Technology & Development",
    avatar: "/team/jaikumar-gupta.png",
  },
  {
    name: "S Hasmath",
    position: "Product & Quality Coordination",
    avatar: "/team/s-hasmath.png",
  },
];

const TeamCard = ({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="zv-card group flex flex-col items-center"
  >
    {/* Portrait */}
    <div className="relative w-full flex justify-center pt-6 pb-0">
      <img
        src={member.avatar}
        alt={`${member.name} — ${member.position}`}
        className="h-52 sm:h-56 md:h-60 w-auto object-contain object-bottom select-none"
        loading="lazy"
        draggable={false}
      />
    </div>

    {/* Name + role */}
    <div className="relative w-full text-center px-5 pt-4 pb-6">
      <p className="text-base font-bold text-foreground leading-tight mb-1">{member.name}</p>
      <p className="text-xs text-muted-foreground leading-snug">{member.position}</p>
      {/* Purple underline accent */}
      <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-primary" />
    </div>
  </motion.div>
);

const Team = () => (
  <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20 bg-muted">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Our Team</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Six people. One shared focus — building digital products that work.
        </p>
      </motion.div>

      {/* 3 × 2 grid — tablet collapses to 2, mobile to 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
