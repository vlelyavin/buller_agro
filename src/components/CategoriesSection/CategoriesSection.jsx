import { CategoriesSectionItem } from "../CategoriesSectionItem";
import { CategoriesContainer } from "../CategoriesContainer";

export const CategoriesSection = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoriesSectionItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};
