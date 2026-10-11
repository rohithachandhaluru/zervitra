import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

const COMPANY_NAME = "Zervitra";
const CONTACT_EMAIL = "contact@zervitra.com";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Terms of Service — Zervitra</title>
        <meta name="description" content="Terms of Service for Zervitra." />
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

          <h1 className="text-4xl font-bold text-foreground mb-3">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: October 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the {COMPANY_NAME} website and services, you agree to be bound by these Terms of Service.
                If you do not agree with any part of these terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Services</h2>
              <p>
                {COMPANY_NAME} provides software development, UI/UX design, digital marketing, and related professional
                services. The specific scope, deliverables, timelines and fees for any project are agreed upon separately
                in writing before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Use of This Website</h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>Violate any applicable law or regulation.</li>
                <li>Infringe the intellectual property rights of {COMPANY_NAME} or any third party.</li>
                <li>Transmit any harmful, offensive or unlawful content.</li>
                <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, icons and code — is the property of
                {" "}{COMPANY_NAME} or its content suppliers and is protected by applicable intellectual property laws.
                You may not reproduce, distribute or create derivative works without our prior written permission.
              </p>
              <p className="mt-3">
                Source code and deliverables produced for client projects are transferred to the client upon full payment,
                as specified in the applicable project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact Form and Communications</h2>
              <p>
                The contact form on this website is provided for enquiry purposes. Submitting the form does not create a
                contractual obligation on either party. A project engagement only begins after a separate written agreement
                has been signed and any agreed deposit has been received.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimer of Warranties</h2>
              <p>
                This website is provided on an "as is" and "as available" basis without warranties of any kind, express
                or implied. {COMPANY_NAME} does not warrant that the website will be uninterrupted, error-free or free of
                viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, {COMPANY_NAME} shall not be liable for any indirect,
                incidental, special, consequential or punitive damages arising from your use of, or inability to use, this
                website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. These links are provided for your convenience only.
                {" "}{COMPANY_NAME} has no control over the content of those sites and accepts no responsibility for them
                or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to These Terms</h2>
              <p>
                {COMPANY_NAME} reserves the right to update these Terms of Service at any time. Changes will be posted on
                this page with an updated date. Continued use of the website after any changes constitutes acceptance of
                the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising under these terms shall be subject to
                the exclusive jurisdiction of the courts of India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
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

export default Terms;
