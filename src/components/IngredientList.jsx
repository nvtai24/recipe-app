import IngredientItem from "./IngredientItem";

export default function IngredientList({ ingredients }) {
  if (!ingredients || ingredients.length === 0) {
    return (
      <div className="text-center text-muted">
        <p>No ingredient information available.</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {ingredients.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} />
      ))}
    </div>
  );
}
