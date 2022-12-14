import React from "react";
import FoodCard from "../../components/FoodCard";

export default function SuggestedFood() {
  return (
    <div className="mt-14">
      <h3 className="font-semibold text-2xl sm:border-l-[5px] border-l-0 text-center sm:text-left border-l-sky-600 pl-2">
        You Might Also Like
      </h3>
      <div className="mt-9 flex justify-center flex-wrap gap-8">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}
