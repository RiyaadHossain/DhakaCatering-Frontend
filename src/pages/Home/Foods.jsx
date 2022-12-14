import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../../components/FoodCard";

export default function Foods() {

  const navigate = useNavigate()

  return (
    <div className="py-20">
      <h2 className="section-title">
        Discover Our Food
      </h2>
      <div className="flex justify-center flex-wrap gap-8 px-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
      <div className="text-center mt-10">
        <button onClick={() => navigate('menu')} className="btn btn-wide">See More</button>
      </div>
    </div>
  );
}
