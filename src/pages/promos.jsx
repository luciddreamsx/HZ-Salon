import { useNavigate } from "react-router-dom";
import "./promos.css";

const images = [
  "makeover.png",
  "Hair.png",
  "Treat.png",
  "rebond.png",
  "botox.png",
];

const promos = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  img: images[i % images.length],
  title: `Promo ${i + 1}`,
  desc: "Limited time offer",
}));

const Promos = () => {
  const navigate = useNavigate();

  return (
    <div className="promo-page page">
      <div className="overlay" aria-hidden="true" />

      <button
        type="button"
        className="btn-ghost btn-back"
        onClick={() => navigate("/services")}
      >
        ← Back
      </button>

      <span className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
        Deals
      </span>
      <h2 className="promo-title">Promos</h2>

      <div className="promo-scroll">
        {promos.map((promo) => (
          <div key={promo.id} className="promo-card">
            <img src={promo.img} alt={promo.title} />
            <div className="promo-overlay">
              <h3>{promo.title}</h3>
              <p>{promo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promos;
