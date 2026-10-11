import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Project costs depend on scope, complexity and timeline. A straightforward website typically starts from a few thousand dollars, while a full-featured web or mobile application can be significantly more. We provide a detailed, itemised estimate after your initial consultation — no surprises.",
  },
  {
    q: "How long does a project take?",
    a: "A simple marketing website can be delivered in 2–4 weeks. A web or mobile application with custom features typically takes 6–16 weeks depending on scope. We agree on a clear timeline before work begins and keep you updated throughout.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Our standard structure is a deposit at project kick-off, a milestone payment at the mid-point, and a final payment at delivery. For larger projects we can discuss a tailored payment schedule. Contact us to go over the options.",
  },
  {
    q: "What is included in the support period?",
    a: "After delivery, we provide a period of post-launch support that covers bug fixes, minor adjustments and deployment assistance. The duration and scope of the support period are agreed in your project contract and depend on the project type.",
  },
  {
    q: "Do you provide source code and documentation?",
    a: "Yes. On project completion you receive full ownership of the source code, a README, setup instructions and relevant technical documentation. Everything you need to hand the project to another team or continue development in-house.",
  },
  {
    q: "What technologies do you use?",
    a: "We primarily work with React, TypeScript, Node.js, React Native, Flutter and modern cloud infrastructure. We choose the best tool for your specific requirements rather than defaulting to a fixed stack, and we discuss the technology choices with you before work begins.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We are happy to sign a mutual NDA before discussions begin if your project involves sensitive or proprietary information. Get in touch and we will send one over.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We frequently collaborate alongside in-house engineers, designers and product managers. We adapt our workflow to fit your team's tools and processes — whether that means joining your Slack, using your Jira board or attending your standups.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20 bg-muted">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-muted-foreground">Got questions? We've got answers.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="zv-card px-6"
            >
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors duration-300 text-left py-5 pt-6 font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
