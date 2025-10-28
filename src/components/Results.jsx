import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { inView } from "motion";
import "./Results.css";

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
      className="results"
    >
      <motion.div 
        className="results__content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>Boost your sales by promoting your properties with high quality communication that </span>
          <span className="results__accent">amplifies reach</span>
          <span> and </span>
          <span className="results__accent">accelerates deals</span>
          <span>.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Results;

