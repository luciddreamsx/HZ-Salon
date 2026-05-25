import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-page page">
      <div className="contact-page__glow" aria-hidden="true" />

      <div className="contact-card">
        <h1>
          Contact Us @ <span>HZ Salon</span>
        </h1>

        <div className="contact-block">
          <p className="contact-block__label">Location</p>
          <p>Brgy 2, Guanzon St. Gingoog City</p>
        </div>

        <div className="contact-block">
          <p className="contact-block__label">Operating hours</p>
          <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
          <p>Saturday: 9:00 AM – 5:00 PM</p>
          <p>Sunday: 10:00 AM – 6:00 PM</p>
        </div>

        <div className="contact-block">
          <p className="contact-block__label">Call us</p>
          <p>(+63) 991-234-5678</p>
          <p style={{ wordBreak: "break-word" }}>
            HZ SALON, HAIRSTYLE AND APPEARANCE@hzsalon.com
          </p>
        </div>

        <hr className="contact-divider" />
      </div>
    </section>
  );
};

export default Contact;
