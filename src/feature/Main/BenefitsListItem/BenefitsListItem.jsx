import "./BenefitsListItem.css";

export const BenefitsListItem = ({ benefit }) => {
  return (
    <div className="benefits__list__item" key={benefit.id}>
      <img src={benefit.image} alt={benefit.title} className="benefits__list__item__image" />
      <div className="benefits__list__item__title" dangerouslySetInnerHTML={{ __html: benefit.title }}></div>
    </div>
  );
};
