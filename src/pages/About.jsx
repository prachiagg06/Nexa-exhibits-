import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">About</span>
            <span className="title-highlight">NEXA EXHIBITS</span>
          </h1>
          <p className="hero-subtitle">Innovating Events. Elevating Experiences.</p>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="about-content">
        <div className="content-container">
          <div className="content-grid">
            <div className="content-section fade-in">
              <h2 className="section-title">
                <span className="title-number">01</span>
                Who We Are
              </h2>
              <div className="content-text">
                <p>
                  NEXA EXHIBITS is a premier event production company specializing in exhibitions, trade shows, brand activations, and corporate experiences.
                  We are more than just an event service provider — we are your creative partner in transforming concepts into captivating spaces that connect, inspire, and leave a lasting impact.
                </p>
                <div className="highlight-box">
                  <p>Driven by passion, precision, and creativity, NEXA EXHIBITS is where brands shine brighter and audiences engage deeper.</p>
                </div>
              </div>
            </div>

            <div className="content-section fade-in">
              <h2 className="section-title">
                <span className="title-number">02</span>
                Our Mission
              </h2>
              <div className="content-text">
                <p>
                  From intimate showcases to large-scale expos, our focus is on innovation, quality, and attention to detail — ensuring every project reflects your brand’s story in the most compelling way.
                </p>
                <div className="mission-values">
                  <div className="value-item">
                    <div className="value-icon">🎨</div>
                    <span>Creative Innovation</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">⚡</div>
                    <span>Technical Excellence</span>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🎯</div>
                    <span>Perfect Execution</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section fade-in">
              <h2 className="section-title">
                <span className="title-number">03</span>
                Why Choose Us?
              </h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3>Custom-Built Experiences</h3>
                  <p>Every exhibition booth and experience is crafted specifically for your brand and objectives.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3>Proven Experience</h3>
                  <p>A decade of experience across diverse industries, from tech startups to Fortune 500 companies.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <h3>End-to-End Management</h3>
                  <p>From initial concept to final execution, we handle every aspect of your event production.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3>Attention to Detail</h3>
                  <p>Our meticulous approach ensures every element contributes to your event's success.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <h3>On-Time Delivery</h3>
                  <p>Our commitment to timelines ensures your event is ready, without compromise.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <h3>Innovative Designs</h3>
                  <p>We push creative boundaries to design spaces that captivate and inspire.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-section fade-in">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Events Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries Reached</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;