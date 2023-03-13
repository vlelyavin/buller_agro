import { CategoriesSectionItem } from "../CategoriesSectionItem";
import { CaterogiesContainer } from "../CaterogiesContainer";
import "./CategoriesSection.css";

export const CategoriesSection = ({ categories }) => {
  return (
    <CaterogiesContainer>
      {categories.map((category) => (
        <CategoriesSectionItem category={category} key={category.id} />
      ))}
    </CaterogiesContainer>
  );
};
