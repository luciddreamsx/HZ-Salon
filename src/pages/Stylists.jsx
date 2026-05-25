import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { HAIRSTYLES } from "../data/hairstyles.js";
import { HairstyleImage } from "../components/HairstyleImage.jsx";
import "./Stylists.css";
const stylists = [
  {
    
    id: "1",
    image: "/1.png",
    ratingStars: 4,
    ratesLabel: "4.1k rates",
    name: "Alex Rivera",
    skill: "Precision cuts & fades",
    speciality: "Color correction",
  },
  {
    id: "2",
    image: "/2.png",
    ratingStars: 4,
    ratesLabel: "4.1k rates",
    name: "Jordan Lee",
    skill: "Texture & styling",
    speciality: "Men’s grooming",
  },
  {
    id: "3",
    image: "/3.png",
    ratingStars: 4,
    ratesLabel: "4.1k rates",
    name: "Sam Cruz",
    skill: "Long layers & treatments",
    speciality: "Bridal styling",
  },
];

function StarRow({ filled }) {
  return (
    <span className="stylist-card__stars" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={
            n <= filled
              ? "stylist-card__star--on"
              : "stylist-card__star--off"
          }
        >
          ★
        </span>
      ))}
    </span>
  );
}

const Stylists = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedStylistId, setSelectedStylistId] = useState(null);

  const hairstyleSlug = searchParams.get("hairstyle");
  const preselectedHair = hairstyleSlug
    ? HAIRSTYLES.find((h) => h.slug === hairstyleSlug)
    : null;

  useEffect(() => {
    const sid = searchParams.get("stylist");
    if (sid && stylists.some((s) => s.id === sid)) {
      setSelectedStylistId(sid);
    }
    if (!preselectedHair && window.location.hash === "#choose-style") {
      requestAnimationFrame(() => {
        document.getElementById("choose-style")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [searchParams, preselectedHair]);

  const handlePickStylist = (id) => {
    if (preselectedHair) {
      const p = new URLSearchParams();
      p.set("hairstyle", preselectedHair.slug);
      p.set("stylist", id);
      navigate(`/booking?${p.toString()}`);
      return;
    }

    setSelectedStylistId(id);
    document.getElementById("choose-style")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /** Pag-click sa hairstyle → booking form (presyo makita gihapon sa summary sa tuo) */
  const bookingHref = (slug) => {
    const p = new URLSearchParams();
    p.set("hairstyle", slug);
    if (selectedStylistId) p.set("stylist", selectedStylistId);
    return `/booking?${p.toString()}`;
  };

  return (
    <div className="stylists-page">
      {preselectedHair ? (
        <div className="stylists-page__top">
          <button
            type="button"
            className="stylists-back"
            onClick={() => navigate("/hairstyle")}
          >
            ← Back to Haircuts
          </button>
        </div>
      ) : null}

      <span className="section-eyebrow">Book now</span>
      <h1 className="stylists-title">Choose Your Stylist</h1>

      {preselectedHair ? (
        <div className="stylists-selected-hair">
          <div className="stylists-selected-hair__media">
            <HairstyleImage slug={preselectedHair.slug} alt={preselectedHair.title} />
          </div>
          <div className="stylists-selected-hair__info">
            <p className="stylists-selected-hair__label">Your haircut</p>
            <p className="stylists-selected-hair__title">{preselectedHair.title}</p>
            <p className="stylists-selected-hair__price">{preselectedHair.price}</p>
          </div>
        </div>
      ) : null}

      <p className="stylists-intro">
        {preselectedHair
          ? "Pilia ang stylist aron makapadayon sa booking."
          : "Select a stylist, then pick your hairstyle to finalize your booking."}
      </p>

      <section id="stylists-section" aria-label="Choose a stylist">
        <div className="stylists-grid">
          {stylists.map((s) => (
            <article
              key={s.id}
              className={`stylist-card ${
                selectedStylistId === s.id ? "stylist-card--selected" : ""
              }`}
            >
              <div className="stylist-card__image-wrap">
                <img src={s.image} alt="" loading="lazy" />
              </div>

              <div className="stylist-card__ratings">
                <span className="stylist-card__ratings-label">Ratings</span>
                <StarRow filled={s.ratingStars} />
                <span className="stylist-card__rates-count">{s.ratesLabel}</span>
              </div>

              <p className="stylist-card__label">Name:</p>
              <p className="stylist-card__value">{s.name}</p>

              <p className="stylist-card__label">Skill:</p>
              <p className="stylist-card__value">{s.skill}</p>

              <p className="stylist-card__label">Speciality:</p>
              <p className="stylist-card__value">{s.speciality}</p>

              <button
                type="button"
                className="stylist-card__pick"
                onClick={() => handlePickStylist(s.id)}
              >
                {preselectedHair ? "Book with this stylist" : "Choose Hairstylelist"}
              </button>
            </article>
          ))}
        </div>
      </section>

      {!preselectedHair ? (
      <section
        id="choose-style"
        className="stylists-pick"
        aria-label="Choose a hairstyle"
      >
        <h2 className="stylists-pick__title">Hairstyle list</h2>
        <p className="stylists-pick__hint">
          {selectedStylistId
            ? "Pilia ang haircut — mo-open ang finalize booking form."
            : "Choose the hairstylelist that you like and choose the hairstyle that you want."}
        </p>

        <div className="stylists-pick__grid">
          {HAIRSTYLES.map(({ slug, title, price }) => (
            <Link
              key={slug}
              to={bookingHref(slug)}
              className="stylists-pick__card"
            >
              <div className="stylists-pick__media">
                <HairstyleImage slug={slug} alt={title} />
              </div>
              <span className="stylists-pick__name">{title}</span>
              <span className="stylists-pick__price">{price}</span>
            </Link>
          ))}
        </div>
      </section>
      ) : null}
    </div>
  );
};

export default Stylists;
