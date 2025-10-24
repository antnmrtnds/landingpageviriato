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
        className="text-[24px] md:text-[36px] lg:text-[52px] font-work-sans text-white leading-normal text-center"
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
          Boost your sales by promoting your properties with hight quality communication that amplifies reach and accelerates deals.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Results;

