// import "../styles/Contact.css";

// function Contact() {
//   return (
//     <div className="contact">
//       <section className="contact-hero">
//         <div className="hero-background"></div>
//         <div className="hero-content">
//           <h1 className="hero-title">Contact Us</h1>
//         </div>
//       </section>
      
//       <div className="contact-content">
//         <form>
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message"></textarea>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">CONTACT US</h1>
          <p className="hero-subtitle">Get in touch with us today</p>
        </div>
      </section>
             
      <div className="contact-content">
        <div className="contact-wrapper">
          {/* Contact Information Section */}
          <div className="contact-page-info">
            <h2>Get In Touch</h2>
            
            <div className="contact-page-details">
              <div className="contact-page-item">
                <div className="contact-page-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>Email</h4>
                  <p>nexaexhibits@gmail.com</p>
                </div>
              </div>

              <div className="contact-page-item">
                <div className="contact-page-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>Phone</h4>
                  <p>+91 9004534706</p>
                </div>
              </div>

              <div className="contact-page-item">
                <div className="contact-page-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>Office Address</h4>
                  <p>150-A/3rd Floor kilokari near Subhash Sharma park New Delhi-110014</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="contact-page-social">
              <h3>Follow Us</h3>
              <div className="contact-page-social-links">
                <a href="https://instagram.com/nexaexhibits" className="contact-page-social-btn instagram-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/17QvjYrvn9/" className="contact-page-social-btn facebook-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 
               23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.41
               c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24
               h-1.918c-1.505 0-1.796.715-1.796 1.764v2.309h3.587l-.467 3.696h-3.12V24
               h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Query Form Section */}
          <div className="contact-page-form-section">
            <h2>Reach out if any querry</h2>
            <div className="contact-page-form-container">
              <div className="contact-page-input-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="contact-page-input-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="contact-page-input-group">
                <input type="text" placeholder="Your contact number" required />
              </div>
              <div className="contact-page-input-group">
                <textarea placeholder="Your querry" required></textarea>
              </div>
              <button type="submit" className="contact-page-submit-btn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;