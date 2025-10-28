import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState('Virtual Tours');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);

  const services = [
    'Virtual Tours',
    'Branding',
    'Film',
    'CGI Images',
    'Marketing Suite',
  ];

  const brandingImage = "/assets/images/branding.png";
  const imgImage1 = "/assets/6b4ecf5787283eaa108f5471baaf3359b8235b30.png";
  const vshowImage = "/assets/images/vshow/Screenshot 2025-10-22 091919.png";
  const cgiImages = [
    "/assets/images/1.jpeg",
    "/assets/images/2.jpeg",
    "/assets/images/4.jpeg",
    "/assets/images/5.jpeg",
    "/assets/images/6.jpeg",
    "/assets/images/We-provide-complete-solutions-for-every-project--the-best-ideas-are-transformed-into-experiences-to-help-add-value-to-your-business-678fdfda621ff-2000.webp",
    "/assets/images/fghhry.jpeg",
    "/assets/images/PANOPLIA URBANA_Varandas do Moinho_EN_miolo (1).jpeg",
    "/assets/images/PANOPLIA URBANA_Varandas do Moinho_EN_miolo rer.jpeg"
  ];
  const marketingSuiteImage = "/assets/images/Marketing-Suite-1500.png";

  const serviceContent = {
    'Virtual Tours': {
      title: 'V-SHOW®',
      description: 'V-SHOW® is an immersive, real-time virtual tour experience that brings your space to life , anytime, anywhere. Whether starting from an existing design or creating a new one from the ground up, we craft fully customized environments in hyper-realistic 3D, enriched with multimedia content: images, video, audio, product details, and direct links to your website. A space to explore. A story to feel. An experience that moves.',
      image: vshowImage,
    },
    'Branding': {
      title: 'Tell Your Story',
      description: `We make brands with soul. 
Through strategic thinking, storytelling and powerful visual identity, we turn ideas into authentic narratives that connect emotionally with audiences. 
Every detail reflects purpose, makes the brand more recognizable, and gives it a timeless voice that builds trust and long-lasting relationships.`,
      image: brandingImage,
    },
    'Film': {
      title: 'Maximize\nReach',
      description: `Vídeos are like movies. We create promotional videos that brings real estate projects to life. We go beyond architecture by using powerful stories and emotional pictures to make people feel the atmosphere, the mood and emotion. Each frame is made to captivate and connect viewers to spaces through emotion, story, and beauty.`,
      video: "/assets/video/varandas_landingpage_V2.mp4?v=2",
      hasVideo: true,
    },
    'CGI Images': {
      title: 'Images That\nSell',
      description: `We create hyperrealistic 3D images that elevate our client's products representation to an art form. Every render captures detail, light, and texture with precision, putting viewers in atmospheres that feel real. From architecture to interior design, we create visual experiences that blend emotion and realism, where very project becomes a story told through space and light.`,
      images: cgiImages,
      hasSlideshow: true,
    },
    'Marketing Suite': {
      title: 'Think 360°',
      description: `What if your entire product story lived in one place—beautiful, seamless, and impossible to ignore? Marketing Suite makes it real.

Not a file folder. Not a website. A complete immersive world.
Where films inspire, photoreal images ignite imagination, and the V-SHOW® Virtual Tour invites anyone to walk through the experience with total freedom, from anywhere on the globe.

Everything they need to know. Everything you want them to feel.
One platform. One vision. One unforgettable story.`,
      image: marketingSuiteImage,
    },
  };

  // Slideshow navigation
  const nextSlide = () => {
    const service = serviceContent[activeService];
    if (service?.hasSlideshow && service.images) {
      setCurrentSlideIndex((prev) => (prev + 1) % service.images.length);
    }
  };

  const prevSlide = () => {
    const service = serviceContent[activeService];
    if (service?.hasSlideshow && service.images) {
      setCurrentSlideIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    }
  };

  // Video handler to start at 8th second
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 8;
    }
  };

  // Reset slide index when changing services
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeService]);

  // Check scroll position and update arrow visibility
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Scroll handler
  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 200;
    const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  // Check on mount and resize
  useEffect(() => {
    checkScroll();
    
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    container.addEventListener('scroll', checkScroll);
    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  // Split the active service title into firstWords and lastWord
  const rawTitle = serviceContent[activeService].title.replace(/\n/g, ' ');
  const _words = rawTitle.split(' ');
  const lastWord = _words.pop();
  const firstWords = _words.join(' ');

  return (
    <motion.div 
      className="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Services Menu */}
      <section className="services__menu">
        {/* Desktop: Service menu buttons */}
        <div className="services__menu-desktop">
          {services.map((service, index) => {
            const isActive = service === activeService;
            
            return (
              <motion.button
                key={service}
                onClick={() => setActiveService(service)}
                className={`services__menu-button ${isActive ? 'services__menu-button--active' : 'services__menu-button--inactive'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile & Tablet: horizontal scroll menu with arrows */}
        <div className="services__menu-mobile">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="services__menu-arrow services__menu-arrow--left"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="services__menu-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => {
              const isActive = service === activeService;
              return (
                <motion.button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`services__menu-button ${isActive ? 'services__menu-button--active' : 'services__menu-button--inactive'}`}
                  whileTap={{ scale: 0.95 }}
                >
                  {service}
                </motion.button>
              );
            })}
          </div>
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="services__menu-arrow services__menu-arrow--right"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* Service Content */}
      <section className="services__content">
        {/* Mobile & Tablet: Stacked layout */}
        <div className="services__content-mobile">
          <AnimatePresence mode="wait">
            {activeService && serviceContent[activeService] && (
              <motion.div 
                key={activeService}
                className="services__content-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Image */}
                <motion.div 
                  className={`services__media ${activeService === 'Film' ? 'services__media--video' : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  {activeService === 'Virtual Tours' ? (
                    <a 
                      href="https://panopliaurbana.vshow.pt/varandasdomoinho/T3plus/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="services__media-link"
                    >
                      <img 
                        alt="Virtual Tour" 
                        src={serviceContent[activeService].image} 
                      />
                      <div className="services__media-overlay">
                        <p className="services__media-overlay-text">
                          Click here to view the Virtual Tour
                        </p>
                      </div>
                    </a>
                  ) : serviceContent[activeService].hasVideo ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
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
                  ) : serviceContent[activeService].hasSlideshow ? (
                    <div className="services__slideshow">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentSlideIndex}
                          alt="CGI Image"
                          src={serviceContent[activeService].images[currentSlideIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevSlide}
                        className="services__slideshow-arrow services__slideshow-arrow--prev"
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="services__slideshow-arrow services__slideshow-arrow--next"
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      {/* Slide Indicators */}
                      <div className="services__slideshow-indicators">
                        {serviceContent[activeService].images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`services__slideshow-indicator ${index === currentSlideIndex ? 'services__slideshow-indicator--active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img 
                      alt="" 
                      className={`services__media--contain`}
                      src={serviceContent[activeService].image} 
                    />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="services__text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="services__title">
                  <p className="services__title-heading">
                      {firstWords
                        ? <>
                            <span className="services__title-normal">{firstWords}</span>&nbsp;
                          </>
                        : null}
                      <span className="services__title-accent">{lastWord}</span>
                    </p>
                  {activeService === 'Virtual Tours' ? (
                    <>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        <span className="italic text-primary-accent">V-SHOW®</span> is an immersive, real-time virtual tour experience that brings your space to life—anytime, anywhere. Whether starting from an existing design or creating a new one from the ground up, we craft fully personalised environments in hyper-realistic 3D, enriched with multimedia content: film, audio, product details, and direct links to your website.
                      </p>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        A space to explore. A story to feel. An experience that moves.
                      </p>
                    </>
                  ) : activeService === 'Marketing Suite' ? (
                    <>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        What if your entire product story lived in one place—beautiful, seamless, and impossible to ignore? Marketing Suite makes it real.
                      </p>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        Not a file folder. Not a website. <span className="italic text-primary-accent">complete immersive world</span>.
                      </p>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        Where films inspire, photoreal images ignite imagination, and the <span className="italic text-primary-accent">V-SHOW® Virtual Tour</span> invites anyone to walk through the experience with total freedom, from anywhere on the globe.
                      </p>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        Everything they need to know. Everything you want them to feel.
                      </p>
                      <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                        <span className="italic text-primary-accent">One platform. One vision. One unforgettable story.</span>
                      </p>
                    </>
                  ) : (
                    <p className="services__description">
                      {serviceContent[activeService].description}
                    </p>
                  )}
                </div>
                <motion.button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
                  className="services__cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="services__cta-text">
                    Learn More
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="services__content-desktop">
          <AnimatePresence mode="wait">
            {activeService && serviceContent[activeService] && (
              <>
                {/* Image */}
                <motion.div 
                  key={`image-${activeService}`}
                  className={`services__media ${activeService === 'Film' ? 'services__media--video' : ''}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {activeService === 'Virtual Tours' ? (
                    <a 
                      href="https://panopliaurbana.vshow.pt/varandasdomoinho/T3plus/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="services__media-link"
                    >
                      <img 
                        alt="Virtual Tour" 
                        src={serviceContent[activeService].image} 
                      />
                      <div className="services__media-overlay">
                        <p className="services__media-overlay-text">
                          Click here to view the Virtual Tour
                        </p>
                      </div>
                    </a>
                  ) : serviceContent[activeService].hasVideo ? (
                    <video
                      ref={videoRef}
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
                  ) : serviceContent[activeService].hasSlideshow ? (
                    <div className="services__slideshow">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentSlideIndex}
                          alt="CGI Image"
                          src={serviceContent[activeService].images[currentSlideIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevSlide}
                        className="services__slideshow-arrow services__slideshow-arrow--prev"
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="services__slideshow-arrow services__slideshow-arrow--next"
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      {/* Slide Indicators */}
                      <div className="services__slideshow-indicators">
                        {serviceContent[activeService].images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`services__slideshow-indicator ${index === currentSlideIndex ? 'services__slideshow-indicator--active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img 
                      alt="" 
                      className="services__media--contain"
                      src={serviceContent[activeService].image} 
                    />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div 
                  key={`content-${activeService}`}
                  className="services__text"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                <div className="services__title">
                <p className="services__title-heading">
                    {firstWords
                      ? <>
                          <span className="services__title-normal">{firstWords}</span>&nbsp;
                        </>
                      : null}
                    <span className="services__title-accent">{lastWord}</span>
                  </p>
                </div>
                {activeService === 'Virtual Tours' ? (
                  <>
                    <p className="text-white font-light text-[18px] leading-[1.5]">
                      <span className="italic text-primary-accent">V-SHOW®</span> is an immersive, real-time virtual tour experience that brings your space to life—anytime, anywhere. Whether starting from an existing design or creating a new one from the ground up, we craft fully personalised environments in hyper-realistic 3D, enriched with multimedia content: film, audio, product details, and direct links to your website.
                    </p>
                    <p className="text-white font-light text-[18px] leading-[1.5]">
                      A space to explore. A story to feel. An experience that moves.
                    </p>
                  </>
                ) : activeService === 'Marketing Suite' ? (
                  <>
                    <p className="text-white font-light text-[18px] leading-[1.5]">
                      What if your entire product story lived in one place—beautiful, seamless, and impossible to ignore? Marketing Suite makes it real.
                    </p>
                    <p className="text-white font-light text-[18px] leading-[1.5] mt-[1rem]">
                      Not a file folder. Not a website. <span className="italic text-primary-accent">complete immersive world</span>.
                    </p>
                    <p className="text-white font-light text-[18px] leading-[1.5] mt-[1rem]">
                      Where films inspire, photoreal images ignite imagination, and the <span className="italic text-primary-accent">V-SHOW® Virtual Tour</span> invites anyone to walk through the experience with total freedom, from anywhere on the globe.
                    </p>
                    <p className="text-white font-light text-[18px] leading-[1.5] mt-[1rem]">
                      Everything they need to know. Everything you want them to feel.
                    </p>
                    <p className="text-white font-light text-[18px] leading-[1.5] mt-[1rem]">
                      <span className="italic text-primary-accent">One platform. One vision. One unforgettable story.</span>
                    </p>
                  </>
                ) : (
                  <p className="services__description">
                    {serviceContent[activeService].description}
                  </p>
                )}
                <motion.button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
                  className="squircle-btn-outline services__cta-text"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </>
          )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

