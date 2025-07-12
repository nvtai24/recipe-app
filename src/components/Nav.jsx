export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <span className="fs-2 me-2">🍳</span>
          <span className="fw-bold text-primary fs-4">RecipeHub</span>
        </div>
        <div className="navbar-text text-muted d-none d-lg-block">
          Discover thousands of delicious recipes from around the world
        </div>
      </div>
    </nav>
  );
}
