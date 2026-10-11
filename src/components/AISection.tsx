import { motion } from "framer-motion";
import { Mail, MessageCircle, CalendarDays, Phone } from "lucide-react";

const AUTOMATION_PRODUCTS = [
  {
    icon: Mail,
    name: "Email Automations",
    description:
      "Automatically handle incoming emails, trigger follow-ups, and route messages — so your inbox works for you.",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp Automations",
    description:
      "Engage customers instantly on WhatsApp with automated responses, reminders and lead qualification flows.",
  },
  {
    icon: CalendarDays,
    name: "Meeting Automations",
    description:
      "Streamline scheduling, confirmations and post-meeting summaries so your team spends less time on logistics.",
  },
  {
    icon: Phone,
    name: "Call Automations",
    description:
      "Capture, transcribe and route inbound call intelligence — from first contact through to follow-up action.",
  },
];

const AISection = () => (
  <section id="ai" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
          Automation Products
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Purpose-built automation tools that connect your communication channels and eliminate repetitive manual work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AUTOMATION_PRODUCTS.map((product, i) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="zv-card group p-7 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/22 transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-foreground mb-2">{product.name}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>

              {/* Coming Soon badge */}
              <div className="mt-5 inline-flex items-center gap-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary/80 tracking-wide uppercase">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AISection;
