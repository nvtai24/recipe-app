import styles from "./IngredientItem.module.css";

export default function IngredientItem({ ingredient }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
          alt={ingredient.name}
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.itemName}>{ingredient.name}</div>
        <div className={styles.itemAmount}>
          {ingredient.amount} {ingredient.unit}
        </div>
      </div>
    </div>
  );
}
