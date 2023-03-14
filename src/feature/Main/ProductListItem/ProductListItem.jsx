import "./ProductListItem.css";
import arrowIcon from "../../../assets/images/icons/arrowIcon.png";
import { Link, useNavigate } from "react-router-dom";

export const ProductListItem = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = (pathname, event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate(pathname);
    }, 200);
  };
  return (
    <Link
      to={product.linkTo}
      onClick={(event) => handleClick(product.linkTo, event)}
      className="product__list__item"
      key={product.id}
      style={{
        backgroundColor: `var(--${product.background})`,
        flexDirection: product.id % 2 === 0 ? "row-reverse" : "row",
      }}
    >
      <div className="product__list__item__image__container">
        <img src={product.img} alt={product.title} className="product__list__item__image" />
      </div>
      <div className="product__list__item__info">
        <p className="product__list__item__info__title">{product.title}</p>
        <img src={arrowIcon} alt="arrowIcon" className="product__list__item__info__icon" />
      </div>
    </Link>
  );
};
