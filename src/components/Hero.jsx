import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="fixed top-[93px] md:top-[103px] left-0 right-0 w-full bg-primary-bg flex flex-col items-center justify-center gap-[35px] z-[5] px-[40px] md:px-[60px] lg:px-[80px] pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[30px] md:pb-[40px] lg:pb-[50px]">
      {/* Content */}
      <div className="flex flex-col items-center gap-[35px] w-full max-w-[480px] md:max-w-[649px] lg:max-w-[731px] xl:max-w-[826px]">
        {/* Heading */}
        <motion.h1 
          className="text-[30px] md:text-[54px] font-work-sans font-semibold text-center text-white leading-[1.5]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Everything for an
          </motion.span>{' '}
          <motion.span 
            className="text-primary-accent italic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            image
          </motion.span>
        </motion.h1>

        {/* Body Text */}
        <motion.div 
          className="text-[16px] md:text-[16px] lg:text-[18px] font-work-sans font-light text-center text-white leading-[1.5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <p className="mb-0 md:hidden">
            Turning vision into value takes skill. Turning it into desire takes talent. And we've 
            built a team defined by both.
          </p>
          <p className="mb-0 hidden md:block">
            Because behind every image worth remembering, there's strategy, precision, and intent. 
            Turning vision into value takes skill. Turning it into desire takes talent. And we've 
            built a team defined by both.
          </p>
          <p className="mb-0">
            <br />
            Entrusted with elevating Panóplia Urbana's storytelling, we delivered a full 360°: 
            from brand and campaign strategy to architectural renderings and 
            virtual tours.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p>
            The result? A narrative that sparks emotion, amplifies market value, and turns vision 
            into measurable success.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.button 
        onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
        className="squircle-btn-outline text-[12px] md:text-[14px] capitalize mb-[30px] md:mb-[40px] lg:mb-[50px]"
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

