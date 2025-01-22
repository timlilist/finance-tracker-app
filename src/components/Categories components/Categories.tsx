import "./categories.css";
import { CategoriesList } from "./CategoriesList";
import { NewCategory } from "./NewCategory";
import classNames from "classnames";

interface CategoriesProps {
  openMenu: boolean;
}

export const Categories = ({ openMenu }: CategoriesProps) => {
  const categoriesContainerClass = classNames("categoriesContainer", {
    "--active": openMenu,
  });
  return (
    <div className={categoriesContainerClass}>
      <div className="pageName">Categories</div>
      <div className="categoriesContent">
        <NewCategory />
        <CategoriesList />
      </div>
    </div>
  );
};
