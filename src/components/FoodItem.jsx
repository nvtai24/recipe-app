export default function FoodItem({ food, onFoodSelect }) {
  const getRecipeType = () => {
    if (food.vegetarian) return "Vegetarian";
    if (food.vegan) return "Vegan";
    if (food.glutenFree) return "Gluten Free";
    return "Regular";
  };

  const handleClick = () => {
    onFoodSelect(food);
  };

  return (
    <div
      className="card h-100 shadow-sm border-0 hover-shadow"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <span className="position-absolute top-0 end-0 m-2 badge bg-white text-primary border">
          {getRecipeType()}
        </span>
        <img
          className="card-img-top"
          src={food.image}
          alt={food.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-dark mb-3">{food.title}</h5>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {food.readyInMinutes && (
            <span className="badge bg-light text-dark border">
              ⏱️ {food.readyInMinutes} min
            </span>
          )}
          {food.servings && (
            <span className="badge bg-light text-dark border">
              👥 {food.servings} servings
            </span>
          )}
          {food.vegetarian && (
            <span className="badge bg-success text-white">🥗 Vegetarian</span>
          )}
          {food.glutenFree && (
            <span className="badge bg-warning text-dark">🌾 Gluten Free</span>
          )}
          {food.dairyFree && (
            <span className="badge bg-info text-white">🥛 Dairy Free</span>
          )}
        </div>

        <div className="mt-auto">
          <button className="btn btn-primary w-100">
            <span className="me-2">👁️</span>
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
