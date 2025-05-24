import styles from "./IngredientItem.module.css";

export default function IngredientItem({ ingredient }) {
  return (
    <div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
        alt={ingredient.name}
      />
      <h3>{ingredient.name}</h3>
      <h3>
        {ingredient.amount} {ingredient.unit}
      </h3>
    </div>
  );
}
