import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-hero">
        <span className="section-eyebrow">Our story</span>
        <h1>About HZ Salon</h1>
        <p>Where beauty meets confidence</p>
      </header>

      <section className="about-section">
        <h2>Welcome to HZ Salon</h2>
        <p>
          At HZ Salon, we believe that every client deserves to look and feel
          their best. Founded with a passion for creativity and self-expression,
          our salon offers a full range of hair, beauty, and wellness services
          tailored to your unique style.
        </p>
        <p>
          Our team of experienced stylists stays up-to-date with the latest
          trends, techniques, and products to ensure top-quality service every
          visit.
        </p>
        <p>
          Whether you&apos;re here for a fresh cut, bold color, relaxing
          treatment, or complete makeover — we deliver results that exceed
          expectations.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To enhance natural beauty and boost confidence by providing exceptional
          salon services in a friendly, professional setting.
        </p>
      </section>

      <section className="about-why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">Skilled &amp; certified stylists</div>
          <div className="why-card">High-quality products</div>
          <div className="why-card">Personalized consultations</div>
          <div className="why-card">Relaxing, hygienic space</div>
          <div className="why-card">Affordable luxury</div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Come visit us</h2>
        <p>Discover your best look at HZ Salon.</p>
        <p>Guanzon St., Gingoog City</p>
      </section>
    </div>
  );
};

export default About;
