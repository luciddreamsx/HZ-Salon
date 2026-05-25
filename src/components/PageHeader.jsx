export function PageHeader({ eyebrow, title, lead, align = "center" }) {
  return (
    <header
      className={`page-header ${align === "left" ? "page-header--left" : ""}`}
    >
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h1 className="page-header__title">{title}</h1>
      {lead ? <p className="page-header__lead">{lead}</p> : null}
    </header>
  );
}
