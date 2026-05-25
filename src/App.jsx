import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import Appearance from "./pages/appearance.jsx";
import Promos from "./pages/promos.jsx";
import Hairstyle from "./pages/Hairstyle.jsx";
import HairstyleDetail from "./pages/HairstyleDetail.jsx";
import Stylists from "./pages/Stylists.jsx";
import Booking from "./pages/Booking.jsx";

function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const navClass = ({ isActive }) =>
    `nav__link${isActive ? " nav__link--active" : ""}`;

  return (
    <div className="app-shell hz-bg">
      <header className="navbar">
        <NavLink to="/" className="navbar__logo" onClick={close}>
          <span className="navbar__mark">HZ</span>
          <span className="navbar__name">
            Salon
            <small>Hairstyle &amp; Appearance</small>
          </span>
        </NavLink>

        <button
          type="button"
          className={`burger${open ? " burger--open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav${open ? " nav--open" : ""}`}>
          <NavLink to="/" className={navClass} end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass} onClick={close}>
            About
          </NavLink>
          <NavLink to="/services" className={navClass} onClick={close}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navClass} onClick={close}>
            Contact
          </NavLink>
          <NavLink to="/stylists" className="nav__cta" onClick={close}>
            Book now
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hairstyle" element={<Hairstyle />} />
          <Route path="/hairstyle/:slug" element={<HairstyleDetail />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stylists" element={<Stylists />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__copy">© 2026 HZ Salon. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
