import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <div className="app">
      <Nav />
      <Search foods={foods} setFoods={setFoods} />

      <Container>
        <FoodList foods={foods} />
      </Container>
    </div>
  );
}

export default App;
