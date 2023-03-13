import "./ImageWithDescription.css";

export const ImageWithDescription = ({ image, description, title }) => {
  return (
    <section className="iwd">
      <img src={image} alt={`${image}`} className="iwd__image" />
      <div className="iwd__info">
        <h3 className="iwd__info__title">{title}</h3>
        <p className="iwd__info__description" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </section>
  );
};
