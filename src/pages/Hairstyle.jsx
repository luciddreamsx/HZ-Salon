import { Link, useNavigate } from "react-router-dom";
import { HairstyleImage } from "../components/HairstyleImage.jsx";
import { HAIRSTYLES } from "../data/hairstyles.js";
import "./appearance.css";
import "./Hairstyle.css";

const Hairstyles = () => {
  const navigate = useNavigate();

  return (
    <div className="appearance-page">
      <button
        type="button"
        className="appearance-back"
        onClick={() => navigate("/services")}
      >
        ← Back
      </button>

      <h1 className="appearance-title">Haircuts</h1>

      <div className="appearance-grid appearance-grid--haircuts">
        {HAIRSTYLES.map(({ slug, title }) => (
          <Link
            key={slug}
            to={`/hairstyle/${slug}`}
            className="appearance-card appearance-card--link"
          >
            <div className="appearance-card__panel">
              <HairstyleImage slug={slug} alt={title} />
            </div>
            <h3>{title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hairstyles;
