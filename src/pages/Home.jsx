

import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio");
  };
const goToContact = ()=> {
  navigate("/contact");
};
  // Slideshow images with titles and descriptions
  const images = [
    {
      src: "/images/exhibit1.jpeg",
      title: "Shavison Industrial Automation",
      subtitle: "Peripherals Exhibition",
      description: "Cutting-edge industrial automation solutions showcased with precision and elegance"
    },
    {
      src: "/images/exhibit2.jpeg",
      title: "Viva Metal Composites",
      subtitle: "Premium Panel Solutions",
      description: "Revolutionary metal composite panels transforming architectural possibilities"
    },
    {
      src: "/images/exhibit3.jpeg",
      title: "Videojet Technologies",
      subtitle: "Industrial Coding & Marking",
      description: "Advanced coding solutions engineered for industrial excellence and reliability"
    },
    {
      src: "/images/exhibit4.jpeg",
      title: "Indofil Industries",
      subtitle: "Chemistry for Growth",
      description: "Innovative chemical solutions driving sustainable industrial development"
    },
    {
      src: "/images/exhibit5.jpeg",
      title: "Ultra Caps & Bottles",
      subtitle: "Packaging Excellence",
      description: "Premium packaging solutions crafted with uncompromising quality standards"
    },
    {
      src: "/images/exhibit6.jpeg",
      title: "Onyx Canon",
      subtitle: "Digital Innovation",
      description: "State-of-the-art digital solutions redefining creative possibilities"
    },
    {
      src: "/images/exhibit7.jpeg",
      title: "Premier Rubber Machinery",
      subtitle: "Manufacturing Excellence",
      description: "Precision-engineered machinery solutions for the rubber industry"
    },
    {
      src: "/images/exhibit8.jpeg",
      title: "Accufix Precision Tools",
      subtitle: "Surgical Precision",
      description: "Medical-grade precision tools crafted for surgical excellence"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play every 6 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <div className="home">
      {/* Hero Section with sophisticated overlay */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/images/bg5.jpeg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>
        <div className="hero-content">
          <div className="hero-text">
            {/* <div className="hero-badge">
              <span className="badge-icon">✦</span>
              <span>Premium Exhibition Design</span>
            </div> */}
            <h1 className="hero-title">
              <span className="title-line">Turning Vision </span>
              <span className="title-highlight">Into Exhibitions.</span>
            </h1>
            <p className="hero-subtitle">
              Your brand, our stage for success.
            </p>
            <div className="hero-actions">
              <button className="cta-button primary" onClick={goToPortfolio}>
                <span className="button-text">Discover Our Portfolio</span>
                <span className="button-icon">→</span>
              </button>
              <button className="cta-button secondary" onClick={goToContact}>
                <span className="button-text">Get in touch with us →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Slideshow Section */}
      <section className="slideshow-section">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Featured Projects</span>
          </div>
          {/* <h2 className="section-title">Masterpieces in Motion</h2> */}
          <p className="section-subtitle">
            Discover our meticulously crafted exhibitions that have redefined industry standards
          </p>
        </div>

        <div
          className="slideshow-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slideshow">
            <div className="slideshow-frame">
              <button
                className="slide-nav prev"
                onClick={prevSlide}
                disabled={isTransitioning}
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="slide-viewport">
                <div className="slides-track">
                  {images.map((item, index) => (
                    <div
                      className={`slide ${index === current ? "active" : ""}`}
                      key={index}
                    >
                      <div className="slide-image-wrapper">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="slide-image"
                        />
                        <div className="slide-gradient"></div>
                      </div>
                      <div className="slide-content">
                        <div className="slide-meta">
                          <span className="slide-number">{String(index + 1).padStart(2, '0')}</span>
                          <div className="slide-divider"></div>
                          <span className="slide-category">Exhibition Design</span>
                        </div>
                        <h3 className="project-title">{item.title}</h3>
                        <h4 className="project-subtitle">{item.subtitle}</h4>
                        <p className="project-description">{item.description}</p>
                        {/* <button className="project-link">
                          <span>View Project</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="slide-nav next"
                onClick={nextSlide}
                disabled={isTransitioning}
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="slideshow-controls">
              <div className="slide-pagination">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${index === current ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="slide-progress">
                <div
                  className="progress-fill"
                  style={{ width: `${((current + 1) / images.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-header">
            <h3 className="stats-title">Excellence by Numbers</h3>
            <p className="stats-subtitle">Our commitment to perfection, measured in achievements</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Exhibitions Delivered</div>
              <div className="stat-description">Across diverse industries and scales</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div className="stat-number">Pan India</div>
              <div className="stat-label">Geographic Presence</div>
              <div className="stat-description">From metros to emerging markets</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-number">12+</div>
              <div className="stat-label">Years of Excellence</div>
              <div className="stat-description">Pioneering exhibition innovation</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-description">Built on trust and excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h3 className="contact-title">Let's Create Something Extraordinary</h3>
            <p className="contact-subtitle">Ready to transform your vision into reality?</p>
          </div>
          <div className="contact-cards">
            <div className="contact-card email-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4>Email Consultation</h4>
              <p>Share your vision with our design experts</p>
              <a href="mailto:nexaexhibits@gmail.com" className="contact-link">
                nexaexhibits@gmail.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

            <div className="contact-card instagram-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <h4>Instagram </h4>
              <p>Follow our latest work</p>
              <a
                href="https://instagram.com/nexaexhibits"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @nexaexhibits
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

            <div className="contact-card facebook-card">
              <div className="card-icon">
                {/* Facebook SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 
               23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.41
               c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24
               h-1.918c-1.505 0-1.796.715-1.796 1.764v2.309h3.587l-.467 3.696h-3.12V24
               h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </div>

              <h4>Facebook </h4>
              <p>Explore our latest creative endeavors</p>

              <a
                href="https://www.facebook.com/share/17QvjYrvn9/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @nexaexhibits
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;