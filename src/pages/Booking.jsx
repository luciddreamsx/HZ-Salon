import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HAIRSTYLES } from "../data/hairstyles.js";
import { STYLIST_BY_ID } from "../data/stylists.js";
import "./Booking.css";

const SALON = {
  address: "Brgy 2, Guanzon St. Gingoog City",
  phone: "(+63) 991-234-5678",
  email: "HZ SALON, HAIRSTYLE AND APPEARANCE@hzsalon.com",
};

const HOURS = [
  ["Mon – Fri", "9:00 AM – 7:00 PM"],
  ["Saturday", "9:00 AM – 5:00 PM"],
  ["Sunday", "9:00 AM – 6:00 PM"],
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const hairstyleSlug = searchParams.get("hairstyle") || "";
  const stylistId = searchParams.get("stylist") || "";

  const hair = useMemo(
    () => HAIRSTYLES.find((h) => h.slug === hairstyleSlug),
    [hairstyleSlug]
  );

  const stylistName = stylistId ? STYLIST_BY_ID[stylistId] : null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [scheduled, setScheduled] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You We Recieve Your Booking.");
  };

  return (
    <div className="booking-page">
      <div className="booking-page__inner">
        <Link
          className="booking-back"
          to={
            hairstyleSlug
              ? `/stylists?hairstyle=${encodeURIComponent(hairstyleSlug)}`
              : "/stylists"
          }
        >
          ← BACK TO STYLIST
        </Link>

        <h1 className="booking-page__title">Finalize Your Booking</h1>

        <div className="booking-shell">
          <div className="booking-form-card">
            <h2>Booking details</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-form__row">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>

              <label>
                <span>Phone No.</span>
                <input
                  type="tel"
                  placeholder="+63"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>

              <div className="booking-form__row">
                <label>
                  <span>Date</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <span>Scheduled</span>
                  <input
                    type="text"
                    placeholder="e.g. 2:00 PM"
                    value={scheduled}
                    onChange={(e) => setScheduled(e.target.value)}
                  />
                </label>
              </div>

              <label>
                <span>Service</span>
                <input
                  type="text"
                  readOnly
                  value={hair?.title ?? "(pilia ang hairstyle gikan sa listahan)"}
                />
              </label>

              <label>
                <span>Message us</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </label>

              <button type="submit" className="booking-form__submit">
                Submit
              </button>
            </form>
          </div>

          <aside className="booking-aside">
            <h2>
              Book with <span className="booking-aside__highlight">HZ Salon</span>
            </h2>

            <p className="booking-aside__block">
              <strong>Location</strong>
              {SALON.address}
            </p>

            <div className="booking-aside__block">
              <strong>Operating hours</strong>
              {HOURS.map(([day, time]) => (
                <div key={day}>
                  {day}: {time}
                </div>
              ))}
            </div>

            <p className="booking-aside__block">
              <strong>Reach us</strong>
              {SALON.phone}
              <br />
              {SALON.email}
            </p>

            <dl className="booking-summary">
              {hair ? (
                <>
                  <dt>Hairstyle</dt>
                  <dd>
                    {hair.title} — {hair.price}
                  </dd>
                </>
              ) : null}
              {stylistName ? (
                <>
                  <dt>Stylist</dt>
                  <dd>{stylistName}</dd>
                </>
              ) : (
                <>
                  <dt>Stylist</dt>
                  <dd>Pilia gikan sa stylists page (optional)</dd>
                </>
              )}
            </dl>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Booking;
