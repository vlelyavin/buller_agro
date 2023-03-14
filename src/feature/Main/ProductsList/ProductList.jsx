import { CaterogiesContainer } from "../../../components/CaterogiesContainer";
import petroleum from "../../../assets/images/products/petroleum.png";
import sunflowerOil from "../../../assets/images/products/sunflowerOil.png";
import grain from "../../../assets/images/products/grain.png";
import trading from "../../../assets/images/products/trading.png";
import "./ProductList.css";
import { ProductListItem } from "../ProductListItem";

export const ProductList = () => {
  const products = [
    { id: 1, title: "Petroleum Products", img: petroleum, background: "dimgray", linkTo: "petroleumProducts" },
    {
      id: 2,
      title: "Sunflower Oil",
      img: sunflowerOil,
      background: "orange",
      linkTo: "/sunflowerOil",
    },
    { id: 3, title: "Grain", img: grain, background: "lightgreen", linkTo: "/grain" },
    {
      id: 4,
      title: "Trading",
      img: trading,
      background: "green",
      // linkTo: "/sunflowerOil",
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
