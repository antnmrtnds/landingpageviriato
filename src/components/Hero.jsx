import { motion } from "motion/react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Content */}
      <div className="hero__content">
        {/* Heading */}
        <motion.h1 
          className="hero__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.span 
            className="hero__heading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Everything for an
          </motion.span>{' '}
          <motion.span 
            className="hero__heading-accent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            image
          </motion.span>
        </motion.h1>

        {/* Body Text */}
        <motion.div 
          className="hero__body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <p className="hero__body-mobile">
            Turning vision into value takes skill. Turning it into desire takes talent. And we've 
            built a team defined by both.
          </p>
          <p className="hero__body-desktop">
            Because behind every image worth remembering, there's strategy, precision, and intent. 
            Turning vision into value takes skill. Turning it into desire takes talent. And we've 
            built a team defined by both.
          </p>
          <p>
            <br />
            Entrusted with elevating Panóplia Urbana's storytelling, we delivered a full 360°: 
            from brand and campaign strategy to architectural renderings and 
            virtual tours.
          </p>
          <p>&nbsp;</p>
          <p>
            The result? A narrative that sparks emotion, amplifies market value, and turns vision 
            into measurable success.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.button 
        onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
        className="squircle-btn-outline hero__cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in touch
      </motion.button>
    </section>
  );
};

export default Hero;

