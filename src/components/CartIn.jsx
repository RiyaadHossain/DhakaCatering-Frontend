import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function CartIn() {
  const navigate = useNavigate();

  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <div className="cursor-pointer relative">
            <HiShoppingCart className="text-2xl" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">
              5
            </span>
          </div>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact border border-gray-300 shadow-lg bg-gray-100 dropdown-content w-60"
      >
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-sky-600 font-semibold">Subtotal: $999</span>
          <div className="card-actions">
            <button
              onClick={() => navigate("cart")}
              className="btn btn-primary btn-sm btn-block"
            >
              View cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
