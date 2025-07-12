import FoodItem from "./FoodItem";

export default function FoodList({ foods, onFoodSelect }) {
  const popularSearches = [
    "pizza",
    "pasta",
    "chicken",
    "salad",
    "dessert",
    "breakfast",
    "soup",
    "steak",
    "fish",
    "vegetarian",
  ];

  const handleSuggestionClick = (searchTerm) => {
    if (window.triggerSearch) {
      window.triggerSearch(searchTerm);
    }
  };

  if (!foods || foods.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="display-1 mb-4">🍽️</div>
        <h3 className="h2 text-primary mb-3">No recipes found</h3>
        <p className="lead text-muted mb-4">
          Search for your favorite dishes to see cooking recipes. Try popular
          searches below!
        </p>

        <div className="bg-light rounded-3 p-4">
          <h4 className="h5 mb-3">Popular Searches</h4>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleSuggestionClick(search)}
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <h2 className="h3 mb-0 d-flex align-items-center">
          <span className="me-2">🔍</span>
          Search Results
        </h2>
        <span className="badge bg-primary fs-6">
          <span className="me-1">📊</span>
          {foods.length} recipes found
        </span>
      </div>
      <div className="row g-4">
        {foods.map((food) => (
          <div key={food.id} className="col-lg-4 col-md-6 col-sm-12">
            <FoodItem food={food} onFoodSelect={onFoodSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}
