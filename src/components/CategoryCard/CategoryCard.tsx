import { Category } from "../Categories/Categories";

interface Props {
  category: Category;
}

export const CategoryCard = ({ category }: Props) => {
  const { name, image } = category || {};

  const src = `/images/category_${image}.jpg`;
  const alt = `${name} category`;

  return (
    <a href="" className="category-card">
      <div>
        <img src={src} alt={alt} />
      </div>
      <span>{name}</span>
    </a>
  );
};
