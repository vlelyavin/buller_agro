import "./ProductListItem.css";
import arrowIcon from "../../../assets/images/icons/arrowIcon.png";
import { Link } from "react-router-dom";

export const ProductListItem = ({ product }) => {
  return (
    <Link
      to={product.linkTo}
      className="product__list__item"
      key={product.id}
      style={{
        backgroundColor: `var(--${product.background})`,
        flexDirection: product.id % 2 === 0 ? "row-reverse" : "row",
      }}
    >
      <img src={product.img} alt={product.title} className="product__list__item__image" />
      <div className="product__list__item__info">
        <p className="product__list__item__info__title">{product.title}</p>
        <img src={arrowIcon} alt="arrowIcon" className="product__list__item__info__icon" />
      </div>
    </Link>
  );
};
