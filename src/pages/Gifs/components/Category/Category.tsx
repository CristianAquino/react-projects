import { randomColor } from "@app/helpers/getColors.helper";
import { CategoryLi, CategoryLink, CategoryUl } from "./styled-components";

export type CategoryProps = {
  options: string[];
};

const Category = ({ options }: CategoryProps) => {
  return (
    <section>
      <CategoryUl>
        {options.map((option) => {
          let color = randomColor();
          return (
            <CategoryLi key={option} $colorLink={color}>
              <CategoryLink to={option} aria-label={`link to ${option}`}>
                {option}
              </CategoryLink>
            </CategoryLi>
          );
        })}
      </CategoryUl>
    </section>
  );
};

export default Category;
