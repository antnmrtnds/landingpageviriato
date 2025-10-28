import { motion } from "motion/react";
import { inView } from "motion";
import { useEffect, useRef } from "react";
import "./HeroImage.css";

const HeroImage = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      inView(containerRef.current, () => {
        return () => {};
      });
    }
  }, []);

  // Set video to start at 8th second when loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 8;
    }
  };

  return (
    <section className="hero-image">
      <motion.div 
        ref={containerRef}
        className="hero-image__container"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="hero-image__video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src="/assets/video/varandas_landingpage_V2_optimized.mp4" type="video/mp4" />
          <source src="/assets/video/varandas_landingpage_V2.webm" type="video/webm" />
        </video>
      </motion.div>
    </section>
  );
};

export default HeroImage;

