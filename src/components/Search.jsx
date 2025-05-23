import { useEffect, useState } from "react";
import styles from "./Search.module.css";

export default function Search({ foods, setFoods }) {
  const [query, setQuery] = useState("pizza");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "6a0b1330f2c047318e1700709dcda932";

  useEffect(() => {
    async function fetchFood() {
      // const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      // const data = await res.json();

      // console.log(data);

      // setFoods(data.results);

      let fakeFood = [
        {
          id: 1,
          title: "Pizza",
          image: "https://placehold.co/600x400",
        },
        {
          id: 2,
          title: "Burger",
          image: "https://placehold.co/600x400",
        },
      ];

      setFoods(fakeFood);
    }

    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter something to search..."
      />
    </div>
  );
}
