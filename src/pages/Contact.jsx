import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
        </div>
      </section>
      
      <div className="contact-content">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;