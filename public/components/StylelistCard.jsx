import { Link } from "react-router-dom";
import "./StylelistCard.css";

export function StylelistCard({ price, note, stylistId }) {
  return (
    <aside className="stylelist-card">
      <p className="stylelist-card__label">Price</p>
      <p className="stylelist-card__price">{price}</p>
      <p className="stylelist-card__note">{note}</p>

      {/* <Link
        to={`/stylists?stylist=${stylistId}#choose-style`}
        className="stylelist-card__cta"
      >
        Book karon
      </Link> */}
    </aside>
  );
}