import "./CategoriesSectionItem.css";

export const CategoriesSectionItem = ({ category }) => {
  return (
    <div
      className="category__section__item"
      key={category.id}
      style={{
        color: category.color ? `var(--${category.color})` : `var(--white)`,
        backgroundColor: `var(--${category.background})`,
        flexDirection: category.id % 2 ? "row" : "row-reverse",
      }}
    >
      <div className="category__section__item__image__container">
        <img src={category.image} alt={category.title} className="category__section__item__image" />
      </div>
      <div className="category__section__item__info">
        <h3 className="category__section__item__info__title" dangerouslySetInnerHTML={{ __html: category.title }}></h3>
        {category.description && (
          <p
            className="category__section__item__info__description"
            dangerouslySetInnerHTML={{ __html: category.description }}
          ></p>
        )}
      </div>
    </div>
  );
};
