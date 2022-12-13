import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function FoodCard() {
  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:-translate-y-3 transition-all">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions items-center mt-2 justify-end">
          <p className="text-2xl font-semibold">1050৳</p>
          <button title="Add to Cart" className="btn btn-info btn-square">
            <FaCartPlus className="text-xl" />
          </button>
        </div>
        <button className="btn btn-outline btn-info mt-4">
          See Details
        </button>
      </div>
    </div>
  );
}
