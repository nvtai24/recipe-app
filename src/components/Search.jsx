import { useEffect, useState } from "react";

export default function Search({ foods, setFoods }) {
  const [query, setQuery] = useState("pizza");
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "6a0b1330f2c047318e1700709dcda932";

  const handleSearch = async (searchQuery = query) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch(`${URL}?query=${searchQuery}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoods(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  // Expose search function globally for suggestions
  useEffect(() => {
    window.triggerSearch = (searchTerm) => {
      setQuery(searchTerm);
      handleSearch(searchTerm);
    };
  }, []);

  return (
    <div className="bg-white shadow-sm border-bottom">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="text-center mb-4">
              <h1 className="display-4 fw-bold text-primary mb-3">
                Search Recipes
              </h1>
              <p className="lead text-muted">
                Discover thousands of delicious recipes from around the world
              </p>
            </div>

            <form onSubmit={handleSubmit} className="d-flex gap-3">
              <input
                className="form-control form-control-lg"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter dish name, ingredients, or keywords..."
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg px-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <>
                    <span className="me-2">🔍</span>
                    Search
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
