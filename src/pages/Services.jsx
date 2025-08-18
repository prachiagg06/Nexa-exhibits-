import "../styles/Services.css";
import { useNavigate } from "react-router-dom";  // ✅ import navigation

function Services() {
  const navigate = useNavigate();  // ✅ initialize hook

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">Our</span>
            <span className="title-highlight">Services</span>
          </h1>
          <p className="hero-subtitle">Comprehensive solutions for extraordinary experiences</p>
        </div>
      </section>

      <section className="services-content">
        <div className="content-container">
          <div className="services-grid">

            {/* Exhibition */}
            <div className="service-card fade-in">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="service-title">Exhibition</h3>
              <p className="service-description">
                Creative and functional exhibition booth designs that grab attention and communicate your brand story effectively.
              </p>
              <div className="service-features">
                <span className="feature-tag">Custom Booths</span>
                <span className="feature-tag">3D Concepts</span>
                <span className="feature-tag">Turnkey Solutions</span>
              </div>
            </div>

            {/* Event */}
            <div className="service-card fade-in">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="service-title">Event</h3>
              <p className="service-description">
                From planning to execution, we deliver memorable events that leave lasting impressions on your audience.
              </p>
              <div className="service-features">
                <span className="feature-tag">Corporate</span>
                <span className="feature-tag">Social</span>
                <span className="feature-tag">Cultural</span>
              </div>
            </div>

            {/* Conference */}
            <div className="service-card fade-in">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="service-title">Conference</h3>
              <p className="service-description">
                Professional conference setup and management for seamless presentations, networking, and discussions.
              </p>
              <div className="service-features">
                <span className="feature-tag">Stage Design</span>
                <span className="feature-tag">Audio Visual</span>
                <span className="feature-tag">Delegate Management</span>
              </div>
            </div>

            {/* Mall Promotion */}
            <div className="service-card fade-in">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="service-title">Mall Promotion</h3>
              <p className="service-description">
                Eye-catching mall activations and promotional setups designed to maximize visibility and attract customers.
              </p>
              <div className="service-features">
                <span className="feature-tag">Product Demos</span>
                <span className="feature-tag">Brand Stalls</span>
                <span className="feature-tag">Interactive Installations</span>
              </div>
            </div>

            {/* Graphics Design */}
            <div className="service-card fade-in">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"/>
                </svg>
              </div>
              <h3 className="service-title">Graphics Design</h3>
              <p className="service-description">
                Creative visual designs that align with your brand identity and communicate your message effectively.
              </p>
              <div className="service-features">
                <span className="feature-tag">Branding</span>
                <span className="feature-tag">Print Media</span>
                <span className="feature-tag">Digital Graphics</span>
              </div>
            </div>


            {/* Interior & Exterior */}
            <div className="service-card fade-in">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="service-title">Interior & Exterior</h3>
              <p className="service-description">
                Bespoke design and setup for interior and exterior spaces to reflect your brand and create impact.
              </p>
              <div className="service-features">
                <span className="feature-tag">Retail Spaces</span>
                <span className="feature-tag">Outdoor Installations</span>
                <span className="feature-tag">Custom Fabrication</span>
              </div>
            </div>

          </div>

          <div className="cta-section fade-in">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Create Something Extraordinary?</h2>
              <p className="cta-description">
                Let's discuss how we can bring your vision to life with our comprehensive solutions.
              </p>
              <button className="cta-button"
                  onClick={() => navigate("/contact")} >
                <span className="button-text">Get Started Today</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Services;
