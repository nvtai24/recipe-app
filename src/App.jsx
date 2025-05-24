import { useEffect, useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foods, setFoods] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div className="app">
      <Nav />
      <Search foods={foods} setFoods={setFoods} />
      <Container>
        <InnerContainer>
          <FoodList foods={foods} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
