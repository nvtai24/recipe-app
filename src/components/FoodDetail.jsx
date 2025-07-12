import { useEffect, useState } from "react";
import IngredientList from "./IngredientList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "6a0b1330f2c047318e1700709dcda932";

  useEffect(() => {
    if (!foodId) return;

    setIsLoading(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [foodId]);

  // Clean up instruction text by removing step numbers
  const cleanInstructionText = (text) => {
    // Remove common step number patterns like "1.", "Step 1:", etc.
    return text
      .replace(/^\d+\.\s*/, "") // Remove "1. " at start
      .replace(/^Step\s+\d+:\s*/i, "") // Remove "Step 1: " at start
      .replace(/^\d+\)\s*/, "") // Remove "1) " at start
      .trim();
  };

  if (!foodId) {
    return (
      <div className="text-center py-5">
        <div className="display-1 mb-4">🍽️</div>
        <h3 className="h2 text-primary mb-3">Select a Recipe</h3>
        <p className="lead text-muted">
          Choose a recipe from the list to view detailed instructions
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3>Loading recipe...</h3>
      </div>
    );
  }

  if (!food) {
    return (
      <div className="text-center py-5">
        <div className="display-1 mb-4">❌</div>
        <h3 className="h2 text-primary mb-3">Not Found</h3>
        <p className="lead text-muted">
          Unable to load recipe information. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Recipe Header */}
      <div className="position-relative">
        <img
          src={food.image}
          alt={food.title}
          className="w-100"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div
          className="position-absolute bottom-0 start-0 end-0 p-4 text-white"
          style={{
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
          }}
        >
          <h1 className="display-6 fw-bold mb-3">{food.title}</h1>

          <div className="row g-3">
            <div className="col-md-3 col-6">
              <div className="bg-white bg-opacity-25 rounded p-3 text-center">
                <div className="small opacity-75">Time</div>
                <div className="fw-bold">⏱️ {food.readyInMinutes} min</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="bg-white bg-opacity-25 rounded p-3 text-center">
                <div className="small opacity-75">Servings</div>
                <div className="fw-bold">👥 {food.servings} people</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="bg-white bg-opacity-25 rounded p-3 text-center">
                <div className="small opacity-75">Type</div>
                <div className="fw-bold">
                  {food.vegetarian ? "🥗 Vegetarian" : "🍖 Non-Vegetarian"}
                </div>
              </div>
            </div>
            {food.pricePerServing && (
              <div className="col-md-3 col-6">
                <div className="bg-white bg-opacity-25 rounded p-3 text-center">
                  <div className="small opacity-75">Cost</div>
                  <div className="fw-bold">
                    💰 ${(food.pricePerServing / 100).toFixed(2)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-4">
        <div className="row g-4">
          {/* Ingredients */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0 d-flex align-items-center">
                  <span className="me-2">🧑‍🍳</span>
                  Ingredients
                </h2>
              </div>
              <div className="card-body">
                <IngredientList ingredients={food.extendedIngredients} />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0 d-flex align-items-center">
                  <span className="me-2">📝</span>
                  Instructions
                </h2>
              </div>
              <div className="card-body">
                {food.analyzedInstructions &&
                food.analyzedInstructions.length > 0 ? (
                  <ol className="list-group list-group-numbered">
                    {food.analyzedInstructions[0].steps.map((step, index) => (
                      <li key={index} className="list-group-item border-0">
                        {cleanInstructionText(step.step)}
                      </li>
                    ))}
                  </ol>
                ) : food.instructions ? (
                  <div>
                    {food.instructions.split("\n").map((instruction, index) => {
                      const cleanedInstruction =
                        cleanInstructionText(instruction);
                      if (cleanedInstruction.trim()) {
                        return (
                          <p key={index} className="mb-3">
                            {cleanedInstruction}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <p className="text-muted">
                    No detailed instructions available for this recipe.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
