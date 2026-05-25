import { Link } from "react-router-dom";
import "./StylelistCard.css";

export function StylelistCard({ price, note, bookTo }) {
  return (
    <aside className="stylelist-card">
      <p className="stylelist-card__label">Price</p>
      <p className="stylelist-card__price">{price}</p>
      <p className="stylelist-card__note">{note}</p>

      {bookTo ? (
        <Link to={bookTo} className="stylelist-card__cta">
          Book now
        </Link>
      ) : null}
    </aside>
  );
}
