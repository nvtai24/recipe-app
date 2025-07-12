import { useEffect, useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import FoodDetail from "./components/FoodDetail";
import Modal from "./components/Modal";

function App() {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  return (
    <div className="min-vh-100 bg-light">
      <Nav />
      <div className="container-fluid px-0">
        <Search foods={foods} setFoods={setFoods} />
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <FoodList foods={foods} onFoodSelect={handleFoodSelect} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedFood?.title || "Recipe Details"}
      >
        {selectedFood && <FoodDetail foodId={selectedFood.id} />}
      </Modal>
    </div>
  );
}

export default App;
