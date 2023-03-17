import "./InfrastructureItem.css";

export const InfrastructureItem = ({ item }) => {
  return (
    <div className="infrastructure__item">
      <div className="infrastructure__item__image__container">
        <img className="infrastructure__item__image" src={item.image} alt={`${item.title}`} />
        <img className="infrastructure__item__image__mobile" src={item.mobileImage} alt={`${item.title}`} />
      </div>
      <div className="infrastructure__item__info">
        <h3 className="infrastructure__item__info__title">{item.title}</h3>
        <div className="infrastructure__item__info__description">
          <h4 className="infrastructure__item__info__description__title">Brief description</h4>
          <p
            className="infrastructure__item__info__description__text"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></p>
        </div>
      </div>
    </div>
  );
};
