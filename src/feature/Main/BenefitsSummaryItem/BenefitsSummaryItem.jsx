import "./BenefitsSummaryItem.css";

export const BenefitsSummaryItem = ({ benefit }) => {
  return (
    <div className="benefits__summary__item">
      <div
        className="benefits__summary__item__title"
        dangerouslySetInnerHTML={{ __html: benefit.title }}
        style={{ backgroundColor: `var(--${benefit.background})` }}
      ></div>
      <div className="benefits__summary__item__description">{benefit.description}</div>
    </div>
  );
};
