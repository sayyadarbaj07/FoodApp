import React from "react";
import Navbar from "../componant/Navbar";
import CategoryMenu from "../componant/CategoryMenu";
import FoodItem from "../componant/FoodItem";
import Cart from "../componant/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
