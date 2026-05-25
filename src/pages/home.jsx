import { Link } from "react-router-dom";
import "./home.css";

const GALLERY = [
  { src: "/2.png", alt: "Hair color and style" },
  { src: "/1.png", alt: "Precision haircut" },
  { src: "/3.png", alt: "Styling and makeup" },
];

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__overlay" aria-hidden="true" />
        <div className="home-hero__content">
          <h1>Indulge in the Ultimate Hair Experience</h1>
          <p>
            We&apos;re here to help you achieve your hair goals. Schedule your
            signature style session today.
          </p>
          <Link to="/services" className="home-hero__cta">
            Discover our services
          </Link>
        </div>
      </section>

      <div className="home-bar">
        <h2>Elevate your Style</h2>
      </div>

      <section className="home-showcase">
        <p className="home-showcase__intro">
          At HZ Salon, we offer a wide range of services to help you look and
          feel your best. From haircuts to color and styling.
        </p>

        <div className="home-showcase__gallery">
          {GALLERY.map((item, index) => (
            <figure
              key={item.src}
              className={`home-showcase__item${
                index < GALLERY.length - 1 ? " home-showcase__item--divider" : ""
              }`}
            >
              <div className="home-showcase__arch">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
