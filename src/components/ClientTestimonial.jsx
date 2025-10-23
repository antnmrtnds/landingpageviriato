import { motion } from "motion/react";

const ClientTestimonial = () => {
  return (
    <motion.div 
      className="relative w-full max-w-[1440px] mx-auto mt-[100px] md:mt-[120px] lg:mt-[200px] xl:mt-[160px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <section className="relative w-full px-[40px] md:px-[60px] lg:px-[80px] py-0">
        <motion.h3 
          className="text-[24px] font-work-sans font-semibold capitalize text-white text-center leading-[1.5]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          our Clients
        </motion.h3>
      </section>

      {/* Testimonial and Client Info */}
      <section className="relative w-full mt-[33px] md:mt-[30px] lg:mt-[60px]">
        {/* Testimonial */}
        <div className="px-[40px] md:px-[60px] lg:px-[80px] py-0">
          <motion.blockquote 
            className="text-[16px] md:text-[16px] lg:text-[24px] font-work-sans font-light text-center text-white leading-[1.5] capitalize"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            "Working with Viriato on our Evergreen Pure project has been nothing short of 
            transformative. From brand strategy to renderings, virtual tours, and even the design 
            of our Presentation Gallery, every single detail was meticulously thought through and 
            beautifully executed. Pure isn't just a project anymore; it's a success story."
          </motion.blockquote>
        </div>

        {/* Client Info */}
        <motion.div 
          className="flex flex-col gap-[10px] items-center mt-[18px] md:mt-[93px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className="w-[28px] h-[28px] md:w-[51px] md:h-[51px] rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <img
              src="/assets/9d2757bf5386397b320ec56c246c0ea77ee8bcdd.png"
              alt="Monica Dias"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p 
            className="text-[10px] font-inter font-normal text-white text-center capitalize leading-[1.5]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Monica Dias, Consultant
          </motion.p>
          <motion.div 
            className="w-[148px] h-[30px] md:w-[274px] md:h-[56px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <img
              src="/assets/c07091bbce34f0ce36d8b2b242274d46f5656a9a.png"
              alt="Varandas Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ClientTestimonial;

