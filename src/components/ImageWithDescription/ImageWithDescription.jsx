import "./ImageWithDescription.css";

export const ImageWithDescription = ({ image, description, title }) => {
  return (
    <section className="iwd">
      <div className="iwd__image__container">
        <img src={image} alt={`${image}`} className="iwd__image" />
      </div>
      <div className="iwd__info">
        {title && <h3 className="iwd__info__title">{title}</h3>}
        {description && <p className="iwd__info__description" dangerouslySetInnerHTML={{ __html: description }}></p>}
      </div>
    </section>
  );
};
