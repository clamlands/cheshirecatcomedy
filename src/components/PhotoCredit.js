export default function PhotoCredit({
  image,
  height,
  width,
  name,
  link,
  className,
}) {
  const classText = className ? `${className} pic fade` : "pic fade";
  return (
    <div className="image-overlay">
      <img
        src={image}
        width={width}
        height={height}
        alt="Cheshire Cat Comedy"
        className={classText}
        loading="lazy"
      />
      <div className="overlay-text">
        Photo by{" "}
        {link === "" ? (
          <span>{name}</span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="credit-link"
          >
            {name}
          </a>
        )}
      </div>
    </div>
  );
}
