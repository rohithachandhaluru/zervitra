import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Send, Calendar, Info } from "lucide-react";

const CONTACT_EMAIL = "contact@zervitra.com";
const CONTACT_PHONE = "+1 (555) 977-0907";
const CONTACT_PHONE_HREF = "tel:+15559770907";
const LINKEDIN_URL = "https://www.linkedin.com/company/zervitra/home/";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", service: "", message: "" };

const SERVICE_OPTIONS = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "MVP Product Development",
  "Digital Marketing",
  "AI Automations",
  "General Enquiry",
];

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Frontend-only — this does NOT send the message to anyone yet.
    // To deliver this form, connect a backend endpoint, Formspree, Resend, or similar.
    setSubmitted(true);
    toast({
      title: "Message received",
      description:
        "Thank you! Please also email us directly at " + CONTACT_EMAIL + " to ensure we receive it.",
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Have a question? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{CONTACT_PHONE}</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Schedule CTA */}
            <div className="premium-glass rounded-2xl p-6 border border-primary/10">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h4 className="text-lg font-bold text-foreground mb-2">Schedule a Free Call</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Book a 30-minute consultation — no commitment, just an honest conversation about your project.
              </p>
              <Button
                onClick={() => {
                  const el = document.getElementById("contact-name");
                  el?.focus();
                }}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Use the Form Below
              </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="premium-glass rounded-3xl p-8 border border-white/5">
              {/* Frontend-only notice */}
              <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl p-4 mb-7">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This form validates your input but does not automatically deliver your message. To ensure we receive
                  it, please also email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  directly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Thanks for reaching out!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Your message has been noted. Please also send a direct email to{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
                      {CONTACT_EMAIL}
                    </a>{" "}
                    to make sure we receive it.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setForm(EMPTY); setSubmitted(false); }}
                    className="rounded-full border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name" className="text-foreground/80 text-sm">
                        Full Name <span className="text-destructive" aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        aria-describedby={errors.name ? "contact-name-err" : undefined}
                        aria-invalid={!!errors.name}
                        className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl"
                      />
                      {errors.name && (
                        <p id="contact-name-err" role="alert" className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-email" className="text-foreground/80 text-sm">
                        Email <span className="text-destructive" aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        aria-describedby={errors.email ? "contact-email-err" : undefined}
                        aria-invalid={!!errors.email}
                        className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl"
                      />
                      {errors.email && (
                        <p id="contact-email-err" role="alert" className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service / Subject */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-service" className="text-foreground/80 text-sm">
                      Service or Subject <span className="text-muted-foreground/60 text-xs">(optional)</span>
                    </Label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="w-full h-10 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 text-sm text-foreground px-3 outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    >
                      <option value="">Select a service or topic…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message" className="text-foreground/80 text-sm">
                      Message <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your project or question..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      aria-describedby={errors.message ? "contact-msg-err" : undefined}
                      aria-invalid={!!errors.message}
                      rows={5}
                      className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl resize-none"
                    />
                    {errors.message && (
                      <p id="contact-msg-err" role="alert" className="text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold transition-all duration-300 shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)] hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.6)]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
