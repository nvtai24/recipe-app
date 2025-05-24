import IngredientItem from "./IngredientItem";
import styles from "./IngredientList.module.css";

export default function IngredientList({ ingredients }) {
  return (
    <div>
      {ingredients.map((item) => (
        <IngredientItem ingredient={item} />
      ))}
    </div>
  );
}
