import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <div className="app">
      <Nav />
      <Search foods={foods} setFoods={setFoods} />
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
