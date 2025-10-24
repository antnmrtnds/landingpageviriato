import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { inView } from "motion";

const Results = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const stopInView = inView(sectionRef.current, () => {
        setHasAnimated(true);
        return () => {};
      }, { amount: 0.5 });

      return stopInView;
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full max-w-[1440px] mx-auto px-[40px] md:px-[60px] lg:px-[80px] py-20 flex items-center justify-center"
    >
      <motion.div 
        className="text-[24px] md:text-[32px] lg:text-[32px] font-work-sans text-white font-light leading-normal text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>Boost your sales by promoting your properties with high quality communication that </span>
          <span className="font-normal italic text-primary-accent">amplifies reach</span>
          <span> and </span>
          <span className="font-normal italic text-primary-accent">accelerates deals</span>
          <span>.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Results;

