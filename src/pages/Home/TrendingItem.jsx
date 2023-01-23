import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../../components/FoodCard";

export default function TrendingItem() {
  const navigate = useNavigate();

  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="section-title border-l-[5px] pl-3 border-orange-600 inline-block">
          Trending Items
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-8 px-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
      <div className="text-center mt-10">
        <button onClick={() => navigate("menu")} className="btn btn-wide">
          See More
        </button>
      </div>
    </div>
  );
}
