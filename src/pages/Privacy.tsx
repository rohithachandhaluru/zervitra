import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

const COMPANY_NAME = "Zervitra";
const CONTACT_EMAIL = "contact@zervitra.com";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Zervitra</title>
        <meta name="description" content="Privacy Policy for Zervitra." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>

          <h1 className="text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: October 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                {COMPANY_NAME} ("we", "us" or "our") is committed to protecting your personal information. This Privacy
                Policy explains what information we collect when you use this website, how we use it, and your rights in
                relation to it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-2">
                <li>
                  <strong className="text-foreground/80">Contact form submissions</strong> — your name, email address,
                  company name (optional) and the message you send us. Note: the contact form on this website is
                  currently frontend-only and does not automatically transmit your message to us. Please also email us
                  directly to ensure we receive your enquiry.
                </li>
                <li>
                  <strong className="text-foreground/80">Usage data</strong> — standard server logs and analytics data
                  such as IP address, browser type, pages visited and time spent on the site. This data is collected in
                  aggregate and is not used to identify individuals.
                </li>
                <li>
                  <strong className="text-foreground/80">Communications</strong> — if you contact us by email or phone,
                  we retain those communications to respond to your enquiry and to maintain records of our interactions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>Respond to your enquiries and communicate with you about potential or ongoing projects.</li>
                <li>Improve the content and functionality of this website.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
              <p>
                This website may use essential cookies to ensure it functions correctly. We do not currently use tracking
                or advertising cookies. If this changes, this policy will be updated accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes for which it was
                collected, including responding to your enquiry or fulfilling a project engagement, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
              <p>
                We implement reasonable technical and organisational measures to protect your personal information against
                unauthorised access, loss or disclosure. However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Services</h2>
              <p>
                This website may link to or integrate third-party services (such as scheduling tools or social media
                platforms). Those services operate under their own privacy policies, which we encourage you to review.
                {" "}{COMPANY_NAME} is not responsible for the privacy practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct or request deletion of the personal
                information we hold about you. To exercise any of these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Children's Privacy</h2>
              <p>
                This website is not directed at children under the age of 13. We do not knowingly collect personal
                information from children. If you believe a child has provided us with personal information, please contact
                us and we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                date. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal information, please
                contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
