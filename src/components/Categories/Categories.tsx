import "./Categories.css";

import { CategoryCard } from "../CategoryCard/CategoryCard";

export interface Category {
  name: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Oficina",
    image: "office",
  },
  {
    name: "Hogar",
    image: "home",
  },
  {
    name: "Cocina",
    image: "kitchen",
  },
];

export const Categories = () => {
  const getCategories = () =>
    CATEGORIES.map((category) => <CategoryCard category={category} />);

  return (
    <section className="categories">
      <h2 className="text-center">Categorias</h2>
      <div className="category-list">{getCategories()}</div>
    </section>
  );
};
