import { Link } from "react-router-dom";
import { HairstyleImage } from "../components/HairstyleImage.jsx";
import { HAIRSTYLES } from "../data/hairstyles.js";
import "./Hairstyles.css";

const Hairstyles = () => {
  return (
    <div className="hairstyles-page">
      <header className="hairstyles-hero">
        <h1>Hairstyles</h1>
      </header>

      <div className="hairstyles-subbar">Women Hairstyles</div>

      <section className="hairstyles-grid-wrap" aria-label="Women hairstyles">
        <div className="hairstyles-grid">
          {HAIRSTYLES.map(({ slug, title }) => (
            <Link
              key={slug}
              to={`/hairstyle/${slug}`}
              className="hairstyle-card hairstyle-card--link"
            >
              <div className="hairstyle-card__media">
                <HairstyleImage slug={slug} alt={title} />
              </div>
              <h2 className="style-name">{title}</h2>
              <p className="style-popularity-label">Popularity rates:★★★★</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hairstyles;
