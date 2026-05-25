import { Link, useParams, Navigate, useSearchParams } from "react-router-dom";
import {
  HAIRSTYLES,
  DEFAULT_BOOK_NOTE,
} from "../data/hairstyles.js";
import { HairstyleImage } from "../components/HairstyleImage.jsx";
import { StylelistCard } from "../components/StylelistCard.jsx";
import { STYLIST_BY_ID } from "../data/stylists.js";
import "./HairstyleDetail.css";

const HairstyleDetail = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const stylistId = searchParams.get("stylist");
  const stylistName = stylistId ? STYLIST_BY_ID[stylistId] : null;

  const item = HAIRSTYLES.find((h) => h.slug === slug);

  if (!item) {
    return <Navigate to="/hairstyle" replace />;
  }

  const note = item.note ?? DEFAULT_BOOK_NOTE;

  const bookingParams = new URLSearchParams();
  bookingParams.set("hairstyle", item.slug);
  if (stylistId) bookingParams.set("stylist", stylistId);

  /** Na-pili na ang haircut — stylist una, booking last */
  const bookTo = stylistId
    ? `/booking?${bookingParams.toString()}`
    : `/stylists?hairstyle=${encodeURIComponent(item.slug)}`;

  return (
    <div className="style-detail">
      <Link className="style-detail__back" to="/hairstyle">
        ← Back to Hairstyle
      </Link>

      <h1 className="style-detail__title">{item.title}</h1>

      {stylistName ? (
        <p className="style-detail__stylist-line">
          Stylist that you choose: <strong>{stylistName}</strong>
        </p>
      ) : null}

      <p className="style-detail__lead">
        Example result — the actual look will depend on your hair and consultation.
      </p>

      <div className="style-detail__layout">
        <figure className="style-detail__figure">
          <div className="style-detail__media">
            <HairstyleImage
              slug={item.slug}
              alt={`${item.title} example`}
              className="style-detail__photo"
            />
          </div>
        </figure>

        <StylelistCard price={item.price} note={note} bookTo={bookTo} />
      </div>
    </div>
  );
};

export default HairstyleDetail;
