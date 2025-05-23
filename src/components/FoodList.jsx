import FoodItem from "./FoodItem";

export default function FoodList({ foods }) {
  return (
    <div className="food-list">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
