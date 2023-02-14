import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";
import IconSpinner from "./IconSpinner";
import { useGetWishlistsQuery } from "../features/wishlist/wishlistAPI";
import { useUserPersistencyQuery } from "../features/auth/authAPI";

export default function WishListIn() {
  let userExist = false;
  const token = getToken();
  const navigate = useNavigate();
  let { data: user, isFetching: userFetching } = useUserPersistencyQuery(token);
  const { data, isFetching } = useGetWishlistsQuery(token);
  if (isFetching || userFetching) return <IconSpinner />;
  if (user?.data) {
    user = user?.data;
    userExist = Object.keys(user)?.length;
  }
  const totalWishlists = data?.wishLists?.length;

  const navigateWishlist = () => {
    if (!userExist) {
      navigate("/signin");
      return;
    }
    navigate("wishlist");
  };

  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <div className="cursor-pointer relative">
            <AiOutlineHeart className="text-3xl" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">
              {totalWishlists ? totalWishlists : 0}
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
            {totalWishlists ? totalWishlists : 0}{" "}
            {totalWishlists > 1 ? "Items" : "Item"}
          </span>
          <span className="font-light text-sm">
            You can save your favourite Item for future order
          </span>
          {/* <span className="text-sky-600 font-semibold">Subtotal: $999</span> */}
          <div className="card-actions">
            {totalWishlists ? (
              <button
                onClick={navigateWishlist}
                className="btn btn-primary btn-sm btn-block"
              >
                View Items
              </button>
            ) : (
              <p className="btn btn-disabled text-slate-700 btn-primary btn-sm btn-block">
                No Item Wishlisted
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
