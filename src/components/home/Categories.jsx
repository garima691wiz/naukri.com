import CategoryCard from "./CategoryCard";
import { categories } from "../../utils/constants/categories";

// Component to render the category buttons
const CategoryList = () => {
  return (
    <div className="flex max-w-6xl flex-wrap justify-center gap-4 text-sm">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
