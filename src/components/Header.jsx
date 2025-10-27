import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header 
      className="relative md:fixed top-0 left-0 right-0 w-full bg-primary-bg z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative w-full max-w-[1440px] mx-auto px-[40px] md:px-[60px] lg:px-[60px] pt-[30px] md:pt-[30px] pb-[30px] flex items-center justify-center md:justify-between">
        {/* Logo - Mobile: centered, Desktop: left aligned */}
        <motion.a 
          href="https://viriato.com.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[41px] h-[64px] md:w-[45px] md:h-[73px] shrink-0 block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/assets/3aff00bb075ee2c088fbd824e3891a5a7713d7eb.png"
            alt="Viriato Logo"
            className="w-full h-full object-cover"
          />
        </motion.a>

        {/* CTA Buttons - Hidden on mobile */}
        <motion.div 
          className="hidden md:flex items-center justify-end gap-[20px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button 
            className="squircle-btn-outline text-[14px] whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us
          </motion.button>
          <motion.button 
            className="squircle-btn-outline text-[14px] whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Brochure
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

