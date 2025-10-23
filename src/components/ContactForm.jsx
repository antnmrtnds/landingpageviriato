import { useState } from 'react';
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS Configuration
    const EMAILJS_PUBLIC_KEY = 'Tl46IR2VPN0keTgDU';
    const EMAILJS_SERVICE_ID = 'service_5voxdl9';
    const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_hlia00l';

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare email data
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        project_type: formData.projectType,
        message: formData.message,
        to_email: 'hello@viriato.com.pt'
      };

      // Send auto-reply confirmation to the user
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        emailData
      );
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
        consent: false,
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative w-full max-w-[1440px] mx-auto mt-[30px] md:mt-[12px] px-[40px] md:px-[62px] py-[30px] md:py-[124px] min-h-[629px] md:min-h-[1009px] flex items-center justify-center">
      
      <motion.div 
        className="relative z-10 w-full max-w-[320px] md:max-w-none flex flex-col gap-[30px] md:gap-0 md:justify-between md:min-h-[570px] md:px-[80px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading - Hidden on mobile */}
        <motion.div 
          className="hidden md:flex flex-col gap-[30px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-work-sans font-semibold text-[74px] leading-none text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything
            </motion.span><br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              for an
            </motion.span><br />
            <motion.span 
              className="italic text-primary-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              image
            </motion.span>
          </h2>
            <motion.h3 
              className="font-work-sans font-light text-[18px] text-white leading-[1.2] whitespace-pre"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Let´s discuss your project.
          </motion.h3>
        </motion.div>

        {/* Mobile heading */}
        <motion.div 
          className="md:hidden flex flex-col gap-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-work-sans font-light text-[18px] text-white leading-[1.2] whitespace-pre">
            Let's discuss your project.
          </h3>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12 md:mt-16 lg:mt-20 flex flex-col gap-[30px]">
          {/* Name Field */}
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <label htmlFor="name" className="font-inter font-normal text-[14px] md:text-[18px] text-white leading-[1.2] whitespace-pre mb-[30px]">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-white text-white font-inter text-[14px] md:text-[18px] py-2 md:py-3 outline-none focus:border-primary-accent transition-colors"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <label htmlFor="email" className="font-inter font-normal text-[14px] md:text-[18px] text-white leading-[1.2] whitespace-pre mb-[30px]">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-white text-white font-inter text-[14px] md:text-[18px] py-2 md:py-3 outline-none focus:border-primary-accent transition-colors"
              required
            />
          </motion.div>

          {/* Company Field */}
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <label htmlFor="company" className="font-inter font-normal text-[14px] md:text-[18px] text-white leading-[1.2] whitespace-pre mb-[30px]">
              Company*
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-transparent border-b border-white text-white font-inter text-[14px] md:text-[18px] py-2 md:py-3 outline-none focus:border-primary-accent transition-colors"
              required
            />
          </motion.div>

          {/* Project Type Field */}
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <label htmlFor="projectType" className="font-inter font-normal text-[14px] md:text-[18px] text-white leading-[1.2] whitespace-pre mb-[30px]">
              Project Type*
            </label>
            <input
              type="text"
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="bg-transparent border-b border-white text-white font-inter text-[14px] md:text-[18px] py-2 md:py-3 outline-none focus:border-primary-accent transition-colors"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <label htmlFor="message" className="font-inter font-normal text-[14px] md:text-[18px] text-white leading-[1.2] whitespace-pre mb-[30px]">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="1"
              className="bg-transparent border-b border-white text-white font-inter text-[14px] md:text-[18px] py-2 md:py-3 outline-none focus:border-primary-accent transition-colors resize-none"
              required
            />
          </motion.div>

          {/* Consent Label */}
          <motion.div 
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <label className="font-inter font-normal text-[14px] md:text-[18px] text-white leading-[1.2] whitespace-pre">
              Consent checkbox
            </label>
          </motion.div>

          {/* Consent Checkbox */}
          <motion.div 
            className="flex items-center gap-[10px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <label htmlFor="consent" className="flex items-center gap-[10px] cursor-pointer">
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="sr-only peer"
                  required
                />
                <div className="w-[18px] h-[18px] rounded-full border border-white peer-checked:bg-primary-accent peer-checked:border-primary-accent transition-colors" />
              </div>
              <span className="font-inter font-normal text-[12px] text-white leading-[1.2] whitespace-pre">
                I agree to receive communications from Viritato.
              </span>
            </label>
          </motion.div>
        </form>

        {/* Submit Button */}
        <motion.button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`mt-6 md:mt-8 squircle-btn-outline text-[12px] md:text-[18px] capitalize self-start ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 md:mt-8"
          >
            <p className="text-primary-accent font-inter text-[14px] md:text-[18px] font-light">
              Message sent successfully!
            </p>
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 md:mt-8"
          >
            <p className="text-white font-inter text-[14px] md:text-[18px] font-light">
              Failed to send message. Please try again.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactForm;
