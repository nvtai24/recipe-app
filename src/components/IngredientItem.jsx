export default function IngredientItem({ ingredient }) {
  // Format amount to remove unnecessary decimals
  const formatAmount = (amount) => {
    if (amount === Math.floor(amount)) {
      return Math.floor(amount);
    }
    return amount;
  };

  // Capitalize first letter of ingredient name
  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  // Get appropriate icon based on ingredient name
  const getIngredientIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("chicken") || lowerName.includes("meat"))
      return "🍗";
    if (lowerName.includes("fish") || lowerName.includes("salmon")) return "🐟";
    if (lowerName.includes("egg")) return "🥚";
    if (lowerName.includes("milk") || lowerName.includes("cream")) return "🥛";
    if (lowerName.includes("cheese")) return "🧀";
    if (lowerName.includes("bread") || lowerName.includes("flour")) return "🍞";
    if (lowerName.includes("tomato")) return "🍅";
    if (lowerName.includes("onion")) return "🧅";
    if (lowerName.includes("garlic")) return "🧄";
    if (lowerName.includes("pepper")) return "🌶️";
    if (lowerName.includes("salt")) return "🧂";
    if (lowerName.includes("oil") || lowerName.includes("butter")) return "🧈";
    if (lowerName.includes("sugar")) return "🍯";
    if (lowerName.includes("lemon") || lowerName.includes("lime")) return "🍋";
    if (lowerName.includes("apple")) return "🍎";
    if (lowerName.includes("banana")) return "🍌";
    if (lowerName.includes("carrot")) return "🥕";
    if (lowerName.includes("potato")) return "🥔";
    if (lowerName.includes("rice")) return "🍚";
    if (lowerName.includes("pasta") || lowerName.includes("noodle"))
      return "🍝";
    return "🍳"; // default icon
  };

  return (
    <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 border">
      <div
        className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center"
        style={{ width: "48px", height: "48px" }}
      >
        <span className="fs-4">{getIngredientIcon(ingredient.name)}</span>
      </div>
      <div className="flex-grow-1">
        <h6 className="mb-1 fw-bold text-dark">
          {capitalizeName(ingredient.name)}
        </h6>
        <span className="badge bg-primary-subtle text-primary">
          {formatAmount(ingredient.amount)} {ingredient.unit}
        </span>
      </div>
    </div>
  );
}
