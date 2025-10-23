import Header from './components/Header';
import Hero from './components/Hero';
import HeroImage from './components/HeroImage';
import Results from './components/Results';
import Services from './components/Services';
import ClientTestimonial from './components/ClientTestimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-primary-bg relative w-full min-h-screen overflow-x-hidden">
      {/* Header - Fixed behind content */}
      <Header />

      {/* Hero Section - Fixed behind content */}
      <Hero />

      {/* Scrollable Content - Scrolls over header and hero */}
      <div className="relative z-20 bg-primary-bg mt-[600px] md:mt-[700px] lg:mt-[800px]">
        {/* Hero Image/Video */}
        <HeroImage />

        {/* Results Section */}
        <Results />

        {/* Services Navigation */}
        <Services />

        {/* Client Testimonial */}
        {/* <ClientTestimonial /> */}

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

