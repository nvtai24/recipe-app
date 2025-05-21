import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <div className="app">
      <Search foods={foods} setFoods={setFoods} />

      {foods.map((food) => (
        <div>
          <h5>{food.title}</h5>
          <img src={food.image} alt="" width="50px" />
        </div>
      ))}
    </div>
  );
}

export default App;
