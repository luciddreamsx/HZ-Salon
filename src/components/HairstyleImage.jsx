import { useState } from "react";
import { HAIRSTYLE_IMAGE_FILES } from "../data/hairstyleImages.js";

const photoCandidates = (slug) => {
  const mapped = HAIRSTYLE_IMAGE_FILES[slug];
  const urls = [];
  if (mapped) urls.push(`/hairstyles/${mapped}`);
  urls.push(
    `/hairstyles/${slug}.png`,
    `/hairstyles/${slug}.jpg`,
    `/hairstyles/${slug}.webp`
  );
  return urls;
};

export function HairstyleImage({ slug, alt = "", className = "" }) {
  const urls = photoCandidates(slug);
  const [i, setI] = useState(0);

  return (
    <img
      className={className}
      src={urls[i]}
      alt={alt || slug}
      loading="lazy"
      decoding="async"
      onError={() => {
        setI((prev) => (prev < urls.length - 1 ? prev + 1 : prev));
      }}
    />
  );
}
