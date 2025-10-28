import { motion } from "motion/react";
import "./ClientTestimonial.css";

const ClientTestimonial = () => {
  return (
    <motion.div 
      className="client-testimonial"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <section className="client-testimonial__section-title">
        <motion.h3 
          className="client-testimonial__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Clients
        </motion.h3>
      </section>

      {/* Testimonial and Client Info */}
      <section className="client-testimonial__content">
        {/* Testimonial */}
        <div className="client-testimonial__quote-wrapper">
          <motion.blockquote 
            className="client-testimonial__quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            "Working with Viriato on our Varandas do Moínho project has been nothing short of 
            transformative. From brand strategy to renderings, virtual tours, and even the design 
            of our Presentation Gallery, every single detail was meticulously thought through and 
            beautifully executed. Varandas do Moínho isn't just a project anymore; it's a success story."
          </motion.blockquote>
        </div>

        {/* Client Info */}
        <motion.div 
          className="client-testimonial__info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className="client-testimonial__avatar"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <img
              src="/assets/9d2757bf5386397b320ec56c246c0ea77ee8bcdd.png"
              alt="Monica Dias"
            />
          </motion.div>
          <motion.p 
            className="client-testimonial__name"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Monica Dias, Consultant
          </motion.p>
          <motion.div 
            className="client-testimonial__logo"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <img
              src="/assets/c07091bbce34f0ce36d8b2b242274d46f5656a9a.png"
              alt="Varandas Logo"
            />
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ClientTestimonial;

