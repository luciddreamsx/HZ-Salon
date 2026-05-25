import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const serviceCardProps = (path) => ({
    className: "service-card",
    onClick: () => navigate(path),
    role: "button",
    tabIndex: 0,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(path);
      }
    },
  });

  return (
    <section className="services-page">
      <div className="overlay" aria-hidden="true" />

      <h1 className="services-title">Services</h1>

      <div className="services-container">
        <div {...serviceCardProps("/appearance")}>
          <h3>Appearance</h3>
          <div className="card-content multi">
            <img src="/APPEAR.png" alt="" />
          </div>
        </div>

        <div {...serviceCardProps("/hairstyle")}>
          <h3>Haircuts</h3>
          <div className="card-content center">
            <img src="/hair.jpg" alt="" />
          </div>
        </div>

        <div {...serviceCardProps("/promos")}>
          <h3>Promos</h3>
          <p className="promo-text">Up to 25% off</p>
          <div className="card-content circle">
            <img src="/promo12.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
