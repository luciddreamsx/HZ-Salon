import { useState } from "react";

const photoCandidates = (slug) => [
  `/hairstyles/${slug}.png`,
  `/hairstyles/${slug}.jpg`,
  `/hairstyles/${slug}.webp`,
  
];

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
        setI((prev) => {
          if (prev < urls.length - 1) return prev + 1;
          return prev; // stop at last image
        });
      }}
    />
  );
}