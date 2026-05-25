import { useNavigate } from "react-router-dom";
import "./appearance.css";

const SERVICES = [
  { img: "/brows.png", alt: "New brows before and after", title: "New Brows" },
  { img: "/nose.png", alt: "Nose contour brush", title: "Nose Contour Brush" },
  { img: "/promo12.jpg", alt: "Special promo", title: "Special Promo" },
];

export default function Appearance() {
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

      <h1 className="appearance-title">Appearance</h1>

      <div className="appearance-grid">
        {SERVICES.map((item) => (
          <article key={item.title} className="appearance-card">
            <div className="appearance-card__panel">
              <img src={item.img} alt={item.alt} loading="lazy" />
            </div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
