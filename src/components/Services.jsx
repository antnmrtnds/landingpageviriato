import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

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
      className="relative w-full max-w-[1440px] mx-auto mt-[0px] md:mt-[0px] lg:mt-[40px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Services Menu */}
      <section className="relative w-full px-[40px] md:px-[60px] lg:px-[80px] py-0">
        {/* Desktop: Service menu buttons */}
        <div className="hidden lg:flex items-center justify-center flex-nowrap gap-[15px] lg:gap-[25px] xl:gap-[50px]">
          {services.map((service, index) => {
            const isActive = service === activeService;
            
            return (
              <motion.button
                key={service}
                onClick={() => setActiveService(service)}
                className={`
                  text-[16px] text-center whitespace-nowrap px-[20px] py-[10px] rounded-[20px] font-inter capitalize leading-[1.5] font-normal transition-colors border
                  ${isActive ? 'bg-[#d29d79] text-[#1e1e1e] border-[#d29d79]' : 'text-white border-transparent hover:border-[#d29d79] hover:text-[#d29d79] hover:bg-transparent'}
                `}
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
        <div className="flex lg:hidden items-center relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 z-10 flex items-center justify-center w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full text-primary-accent hover:bg-primary-accent hover:text-primary-bg transition-colors"
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
            className="flex items-center justify-start gap-[10px] md:gap-[20px] overflow-x-auto pb-[10px] scrollbar-hide scroll-smooth w-full px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => {
              const isActive = service === activeService;
              return (
                <motion.button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`
                    text-[16px] text-center whitespace-nowrap flex-shrink-0 px-[20px] py-[10px] rounded-[20px] font-inter capitalize leading-[1.5] font-normal transition-colors border
                    ${isActive ? 'bg-[#d29d79] text-[#1e1e1e] border-[#d29d79]' : 'text-white border-transparent hover:border-[#d29d79] hover:text-[#d29d79] hover:bg-transparent'}
                  `}
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
              className="absolute right-2 z-10 flex items-center justify-center w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full text-primary-accent hover:bg-primary-accent hover:text-primary-bg transition-colors"
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
      <section className="relative w-full bg-[#191710] mt-[38px] md:mt-[32px] lg:mt-[69px] pb-[30px] lg:pb-[10px] xl:pb-[10px]">
        {/* Mobile & Tablet: Stacked layout */}
        <div className="lg:hidden px-[30px] md:px-[60px] py-0">
          <AnimatePresence mode="wait">
            {activeService && serviceContent[activeService] && (
              <motion.div 
                key={activeService}
                className="flex flex-col gap-[36px] md:gap-[36px] items-center md:items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Image */}
                <motion.div 
                  className={`relative w-full group ${
                    activeService === 'Film' 
                      ? 'aspect-[16/9]' 
                      : 'aspect-[711/700] md:aspect-[769/396]'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  {activeService === 'Virtual Tours' ? (
                    <a 
                      href="https://panopliaurbana.vshow.pt/varandasdomoinho/T3plus/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative block w-full h-full cursor-pointer"
                    >
                      <img 
                        alt="Virtual Tour" 
                        className="w-full h-full object-contain"
                        src={serviceContent[activeService].image} 
                      />
                      <div className="absolute inset-0 bg-[#191710]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-[18px] md:text-[24px] font-work-sans text-center px-6">
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
                    <div className="relative w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentSlideIndex}
                          alt="CGI Image"
                          className="w-full h-full object-contain"
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
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-[#191710] hover:bg-primary-accent hover:text-primary-bg transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-[#191710] hover:bg-primary-accent hover:text-primary-bg transition-colors z-10"
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {serviceContent[activeService].images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentSlideIndex 
                                ? 'bg-primary-accent w-8' 
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img 
                      alt="" 
                      className={`w-full h-full ${activeService === 'Marketing Suite' ? 'object-contain' : 'object-cover'}`}
                      src={serviceContent[activeService].image} 
                    />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex flex-col gap-[36px] items-center w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="capitalize font-work-sans text-[#ffffff] w-full text-center">
                  <p className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.5] mb-6 md:mb-6 lg:mb-8 whitespace-normal">
                      {firstWords
                        ? <>
                            <span className="font-normal">{firstWords}</span>&nbsp;
                          </>
                        : null}
                      <span className="font-semibold italic text-primary-accent">{lastWord}</span>
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
                    <p className="font-light text-[18px] md:text-[24px] leading-[1.5]">
                      {serviceContent[activeService].description}
                    </p>
                  )}
                </div>
                <motion.button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
                  className="border border-[#d29d79] border-solid px-[20px] py-[10px] md:px-[20px] md:py-[10px] rounded-[40px] hover:bg-[#d29d79] hover:text-[#191710] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="font-work-sans text-[16px] md:text-[20px] text-center text-[#d29d79] hover:text-[#191710] leading-[1.5]">
                    Learn More
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-[40px] px-[64px] py-0 h-[422px] xl:h-[625px] items-center">
          <AnimatePresence mode="wait">
            {activeService && serviceContent[activeService] && (
              <>
                {/* Image */}
                <motion.div 
                  key={`image-${activeService}`}
                  className={`relative w-full group ${
                    activeService === 'Film' 
                      ? 'aspect-[16/9]' 
                      : 'aspect-[711/700]'
                  }`}
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
                      className="relative block w-full h-full cursor-pointer"
                    >
                      <img 
                        alt="Virtual Tour" 
                        className="w-full h-full object-contain"
                        src={serviceContent[activeService].image} 
                      />
                      <div className="absolute inset-0 bg-[#191710]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-[20px] font-work-sans text-center px-6">
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
                    <div className="relative w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentSlideIndex}
                          alt="CGI Image"
                          className="w-full h-full object-contain"
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
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-[#191710] hover:bg-primary-accent hover:text-primary-bg transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-[#191710] hover:bg-primary-accent hover:text-primary-bg transition-colors z-10"
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      
                      {/* Slide Indicators */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {serviceContent[activeService].images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentSlideIndex 
                                ? 'bg-primary-accent w-8' 
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img 
                      alt="" 
                      className={`w-full h-full ${activeService === 'Marketing Suite' ? 'object-contain' : 'object-cover'}`}
                      src={serviceContent[activeService].image} 
                    />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div 
                  key={`content-${activeService}`}
                  className="flex flex-col gap-[30px] items-start"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                <div className="capitalize font-work-sans text-white w-full text-left">
                <p className="text-[52px] leading-[1.5] mb-0 whitespace-normal">
                    {firstWords
                      ? <>
                          <span className="font-normal">{firstWords}</span>&nbsp;
                        </>
                      : null}
                    <span className="font-semibold italic text-primary-accent">{lastWord}</span>
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
                  <p className="text-white font-light text-[18px] leading-[1.5]">
                    {serviceContent[activeService].description}
                  </p>
                )}
                <motion.button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })} 
                  className="squircle-btn-outline text-[18px]"
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

