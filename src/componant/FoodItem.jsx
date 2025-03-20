import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  // Get the category and search term from Redux store
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search); // Access the search string correctly

  // Handle adding items to the cart with toast notifications
  const handleToast = (name) => {
    toast.success(`Added ${name} to cart`);
  };

  // Ensure search is always treated as a string, and handle the case when it's an empty object
  const safeSearch = String(search || "").toLowerCase(); // Convert search to string and lowercase

  const filteredFoods = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(safeSearch);
    } else {
      return (
        food.category === category &&
        food.name.toLowerCase().includes(safeSearch)
      );
    }
  });

  return (
    <div className="flex flex-wrap gap-15 justify-center lg:justify-start mx-10 my-10">
      {filteredFoods.length === 0 ? (
        <p>No items found</p> // Show message if no matching items
      ) : (
        filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            img={food.img}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))
      )}
    </div>
  );
};

export default FoodItem;
