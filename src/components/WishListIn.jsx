import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGetWishlistsQuery } from "../features/wishlist/wishlist";
import { getToken } from "../utils/token";
import IconSpinner from "./IconSpinner";

export default function WishListIn() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useGetWishlistsQuery(token);

  if (isFetching) return <IconSpinner />;
  const totalWishlists = data.wishLists.length;

  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <div className="cursor-pointer relative">
            <AiOutlineHeart className="text-3xl" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">
              {totalWishlists}
            </span>
          </div>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact border border-gray-300 shadow-lg bg-gray-100 dropdown-content w-60"
      >
        <div className="card-body">
          <span className="font-bold text-lg">
            {totalWishlists} {totalWishlists > 1 ? "Items" : "Item"}
          </span>
          <span className="font-light text-sm">
            You can save your favourite Item for future order
          </span>
          {/* <span className="text-sky-600 font-semibold">Subtotal: $999</span> */}
          <div className="card-actions">
            <button
              onClick={() => navigate("wishlist")}
              className="btn btn-primary btn-sm btn-block"
            >
              View Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
