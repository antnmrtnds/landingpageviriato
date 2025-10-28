import { useState } from 'react';
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

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
    <section id="contact-form" className="contact-form">
      
      <motion.div 
        className="contact-form__container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading - Hidden on mobile */}
        <motion.div 
          className="contact-form__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>
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
          className="contact-form__mobile-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>
            Let's discuss your project.
          </h3>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="contact-form__form">
          {/* Name Field */}
          <motion.div 
            className="contact-form__field"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <label htmlFor="name" className="contact-form__label">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-form__input"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div 
            className="contact-form__field"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <label htmlFor="email" className="contact-form__label">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-form__input"
              required
            />
          </motion.div>

          {/* Company Field */}
          <motion.div 
            className="contact-form__field"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <label htmlFor="company" className="contact-form__label">
              Company*
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="contact-form__input"
              required
            />
          </motion.div>

          {/* Project Type Field */}
          <motion.div 
            className="contact-form__field"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <label htmlFor="projectType" className="contact-form__label">
              Project Type*
            </label>
            <input
              type="text"
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="contact-form__input"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="contact-form__field"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <label htmlFor="message" className="contact-form__label">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="1"
              className="contact-form__textarea"
              required
            />
          </motion.div>

          {/* Consent Label */}
          <motion.div 
            className="contact-form__field"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <label className="contact-form__label">
              Consent checkbox
            </label>
          </motion.div>

          {/* Consent Checkbox */}
          <motion.div 
            className="contact-form__checkbox-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <label htmlFor="consent" className="contact-form__checkbox-label">
              <div className="contact-form__checkbox-custom">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="contact-form__checkbox"
                  required
                />
                <div className="contact-form__checkbox-box" />
              </div>
              <span className="contact-form__checkbox-text">
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
          className={`squircle-btn-outline contact-form__submit ${
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
            className="contact-form__status contact-form__status--success"
          >
            <p>
              Message sent successfully!
            </p>
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-form__status contact-form__status--error"
          >
            <p>
              Failed to send message. Please try again.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactForm;
