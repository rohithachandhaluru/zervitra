import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import Portfolio from "@/components/Portfolio";
import WavyFlow from "@/components/WavyFlow";
import AboutSection from "@/components/AboutSection";
import Team from "@/components/Team";
import AISection from "@/components/AISection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => (
  <>
    <Helmet>
      <title>Zervitra — We Turn Your Ideas Into Excellence</title>
      <meta
        name="description"
        content="Zervitra builds conversion-first products — web apps, mobile apps and MVPs — designed to grow your business. Consistent, reliable work by a team of creative professionals."
      />
      <meta name="keywords" content="web development, app development, UI UX design, MVP development, digital marketing, AI automation, software agency India" />
      <meta property="og:title" content="Zervitra — We Turn Your Ideas Into Excellence" />
      <meta property="og:description" content="Consistent, reliable work delivered by a team of creative professionals, designed to support your growth." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://zervitra.com/" />
    </Helmet>

    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Services — alternate bg */}
      <section className="relative py-24 bg-muted">
        <OurServices />
      </section>

      {/* Portfolio — white */}
      <Portfolio />

      {/* Process — alternate bg */}
      <WavyFlow />

      {/* About — white */}
      <AboutSection />

      {/* Team — alternate bg */}
      <Team />

      {/* AI — white */}
      <AISection />

      {/* FAQ — alternate bg */}
      <FAQ />

      {/* Contact — white */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  </>
);

export default Home;
