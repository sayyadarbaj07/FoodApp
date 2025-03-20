import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const seletedCategories = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <>
      <div className="ml-6">
        <h3 className="text-xl font-semibold">Find the best food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`px-3 py-2 bg-green-100 font-bold rounded-xl hover:bg-green-500 hover:text-white ${
              seletedCategories === "All" && "bg-green-500 text-white"
            }`}
          >
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`px-3 py-2 bg-green-100 font-bold rounded-xl hover:bg-green-500 hover:text-white ${
                  seletedCategories === category && "bg-green-500 text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
