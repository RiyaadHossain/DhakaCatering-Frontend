import React from "react";
// import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FoodCard({item}) {

  const navigate = useNavigate()
  // console.log(item);
  return (
    <div className="card w-80 bg-base-100 rounded-lg shadow-xl hover:-translate-y-3 transition-all">
      <figure>
        <img className="w-full h-52 object-cover" src={item.image.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{item.name}</h2>
          <div className="badge badge-success badge-sm">{item.category}</div>
        </div>
        <p>{item.description.slice(0, 80)}...</p>
        <div className="card-actions items-center mt-2 justify-end">
          {/* <p className="text-2xl font-semibold">{item.price}৳</p> */}
          {/* <div className="tooltip tooltip-accent" data-tip="Add to Cart">
            <button className="btn btn-info flex justify-center items-center btn-square">
              <FaCartPlus className="text-xl" />
            </button>
          </div> */}
        </div>
        <button onClick={() => navigate(`/food-item/${item._id}`)} className="btn btn-outline btn-info mt-3">See Details</button>
      </div>
    </div>
  );
}
