import { useEffect, useState } from "react";
import styles from "./FoodDetail.module.css";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "6a0b1330f2c047318e1700709dcda932";

  useEffect(() => {
    if (!foodId) return;

    setIsLoading(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }

    fetchFood();
  }, [foodId]);

  if (!foodId) {
    return <h1>Please select a food item</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!food) {
    return <h1>No data found</h1>;
  }

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} alt={food.title} className={styles.recipeImage} />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥗 Vegetarian" : "🍔 Non-Vegetarian"}
            </strong>
          </span>
        </div>

        <div>
          <span>
            <strong>💰 {food.pricePerServing} / Serving</strong>
          </span>
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {food.analyzedInstructions &&
              food.analyzedInstructions.length > 0 &&
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
