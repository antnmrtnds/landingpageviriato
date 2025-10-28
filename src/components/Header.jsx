import { motion } from "motion/react";
import "./Header.css";

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header__container">
        {/* Logo - Mobile: centered, Desktop: left aligned */}
        <motion.a 
          href="https://viriato.com.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="header__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/assets/3aff00bb075ee2c088fbd824e3891a5a7713d7eb.png"
            alt="Viriato Logo"
          />
        </motion.a>

        {/* CTA Buttons - Hidden on mobile */}
        <motion.div 
          className="header__cta"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button 
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
            className="squircle-btn-outline header__cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

