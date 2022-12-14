import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function FoodCard() {
  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:-translate-y-3 transition-all">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">Shoes!</h2>
          <div className="badge badge-success badge-sm">Dinner</div>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions items-center mt-2 justify-end">
          <p className="text-2xl font-semibold">1050৳</p>
          <div className="tooltip tooltip-accent" data-tip="Add to Cart">
            <button className="btn btn-info flex justify-center items-center btn-square">
              <FaCartPlus className="text-xl" />
            </button>
          </div>
        </div>
        <button className="btn btn-outline btn-info mt-3">See Details</button>
      </div>
    </div>
  );
}
