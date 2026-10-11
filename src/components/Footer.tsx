import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, BadgeCheck } from "lucide-react";

const CONTACT_EMAIL = "contact@zervitra.com";
const CONTACT_PHONE = "7288997807";
const CONTACT_PHONE_HREF = "tel:+917288997807";
const LINKEDIN_URL = "https://www.linkedin.com/company/zervitra/home/";

const SERVICES_LINKS = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "MVP Product Development",
  "Digital Marketing",
  "AI Automations",
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Footer = () => (
  <footer className="relative bg-[#171326] border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <img src="/zervimain.svg" alt="Zervitra" className="h-10 w-auto mb-5" />
          <p className="text-white/60 mb-5 leading-relaxed max-w-sm text-sm">
            We build conversion-first products — web apps, mobile apps and MVPs — designed to grow your
            business. Ship faster. Scale smarter.
          </p>
          <div className="space-y-2.5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center text-sm text-white/60 hover:text-violet-400 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2.5 text-violet-400 shrink-0" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_PHONE_HREF}
              className="flex items-center text-sm text-white/60 hover:text-violet-400 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2.5 text-violet-400 shrink-0" />
              {CONTACT_PHONE}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-white/60 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 mr-2.5 text-violet-400 shrink-0" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Services</h3>
          <ul className="space-y-2.5">
            {SERVICES_LINKS.map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo("services")}
                  className="text-sm text-white/60 hover:text-violet-400 transition-colors text-left"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h3>
          <ul className="space-y-2.5">
            {[
              { label: "About", id: "about" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Process", id: "process" },
              { label: "Team", id: "team" },
              { label: "FAQ", id: "faq" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-sm text-white/60 hover:text-violet-400 transition-colors text-left"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <Link to="/login" className="text-sm text-white/60 hover:text-violet-400 transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Business Registration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-10 pt-6 border-t border-white/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-1.5 text-white/40 shrink-0">
            <BadgeCheck className="w-3.5 h-3.5 text-violet-400/60 shrink-0" />
            <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
              Business Registration
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6 flex-wrap text-xs text-white/40 pl-5 sm:pl-0">
            <span>
              <span className="text-white/25 mr-1.5">Business Name</span>
              Zervitra
            </span>
            <span className="hidden sm:inline text-white/15">·</span>
            <span>
              <span className="text-white/25 mr-1.5">Udyam Registration No.</span>
              UDYAM-AP-23-0079667
            </span>
            <span className="hidden sm:inline text-white/15">·</span>
            <span>
              <span className="text-white/25 mr-1.5">Enterprise Registration Date</span>
              1 October 2025
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Zervitra. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <Link to="/privacy" className="text-white/50 hover:text-violet-400 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-white/50 hover:text-violet-400 transition-colors">
            Terms of Service
          </Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-violet-400 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <span className="text-white/30">Made with care by Zervitra</span>
        </div>
      </motion.div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
  </footer>
);

export default Footer;
