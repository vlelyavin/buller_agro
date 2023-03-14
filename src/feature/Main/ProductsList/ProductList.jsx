import { CaterogiesContainer } from "../../../components/CaterogiesContainer";
import petroleum from "../../../assets/images/products/petroleum.png";
import sunflowerOil from "../../../assets/images/products/sunflowerOil.png";
import grain from "../../../assets/images/products/grain.png";
import trading from "../../../assets/images/products/trading.png";
import { ProductListItem } from "../ProductListItem";
import { ROUTES } from "../../../constants/routes";
import "./ProductList.css";

export const ProductList = () => {
  const products = [
    { id: 1, title: "Petroleum Products", img: petroleum, background: "dimgray", linkTo: ROUTES.petroleum },
    {
      id: 2,
      title: "Sunflower Oil",
      img: sunflowerOil,
      background: "orange",
      linkTo: ROUTES.sunflowerOil,
    },
    { id: 3, title: "Grain", img: grain, background: "lightgreen", linkTo: ROUTES.grain },
    {
      id: 4,
      title: "Trading",
      img: trading,
      background: "green",
      linkTo: ROUTES.process,
    },
  ];
  return (
    <CaterogiesContainer>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </CaterogiesContainer>
  );
};
