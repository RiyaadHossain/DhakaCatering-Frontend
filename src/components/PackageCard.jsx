import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PackageCard({ item }) {
  const navigate = useNavigate();
  console.log(item);
  const { name, price, image, category, description } = item;

  return (
    <div className="card w-96 h-[600px] bg-base-100 rounded-lg shadow-xl hover:-translate-y-3 transition-all">
      <figure>
        <img src={image.url} alt={image.title} />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-success badge-sm">{category}</div>
        </div>
          <p className="text-md">
            {description}
          </p>
        <div className="card-actions items-center mt-2 justify-end">
          <p className="text-2xl font-semibold">{price}৳</p>
          <div className="tooltip tooltip-accent" data-tip="Add to Cart">
            <button className="btn btn-info flex justify-center items-center btn-square">
              <FaCartPlus className="text-xl" />
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate(`/package/${item._id}`)}
          className="btn btn-outline btn-info mt-3"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
