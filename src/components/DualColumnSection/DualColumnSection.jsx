import "./DualColumnSection.css";

export const DualColumnSection = ({ firstColumn, secondColumn }) => {
  return (
    <>
      <div className="dual__column__section">
        <div className="dual__column__section__item">
          <img src={firstColumn.image} alt={firstColumn.title} className="dual__column__section__item__image" />
          {firstColumn.title && <h3 className="dual__column__section__item__title">{firstColumn.title}</h3>}
          <p
            className="dual__column__section__item__description"
            style={{ fontSize: firstColumn.fontSize }}
            dangerouslySetInnerHTML={{ __html: firstColumn.description }}
          ></p>
        </div>
        <div className="dual__column__section__item">
          <img src={secondColumn.image} alt={secondColumn.title} className="dual__column__section__item__image" />
          {secondColumn.title && <h3 className="dual__column__section__item__title">{secondColumn.title}</h3>}
          <p
            className="dual__column__section__item__description"
            style={{ fontSize: secondColumn.fontSize }}
            dangerouslySetInnerHTML={{ __html: secondColumn.description }}
          ></p>
        </div>
      </div>
    </>
  );
};
