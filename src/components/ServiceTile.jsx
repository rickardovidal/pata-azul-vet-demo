export default function ServiceTile({ index, title, text, image }) {
  return (
    <article className="service-tile">
      {image && (
        <div className="service-tile-media">
          <picture>
            <source srcSet={`/assets/servicos/${image}.webp`} type="image/webp" />
            <img src={`/assets/servicos/${image}.jpg`} alt={title} loading="lazy" />
          </picture>
          <p className="service-index service-index-media">{String(index).padStart(2, "0")}</p>
        </div>
      )}
      <div className="service-tile-body">
        {!image && <p className="service-index">{String(index).padStart(2, "0")}</p>}
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
