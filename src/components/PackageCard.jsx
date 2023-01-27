import { toast } from "react-hot-toast";
import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import {
  useDeleteWishlistMutation,
  useGetWishlistsQuery,
  usePostWishlistMutation,
} from "../features/wishlist/wishlist";
import { getToken } from "../utils/token";
import { useSelector } from "react-redux";

export default function PackageCard({ item }) {
  let wishListed;
  const token = getToken();
  const navigate = useNavigate();
  const { _id, name, price, image, category, description } = item;
  const { data } = useGetWishlistsQuery(token);
  const [postWishlist, { isError, isSuccess, error }] =
    usePostWishlistMutation();
  const [deleteWishlist, { isSuccess: deleteSuccess }] =
    useDeleteWishlistMutation();
  const { user } = useSelector((state) => state.auth);
  const userExist = Object.keys(user).length;

  useEffect(() => {
    if (isSuccess) toast.success("Added to Wishlist", { id: "succ" });
    if (isError) toast.error(error.data.error, { id: "err" });
    if (deleteSuccess)
      toast.success("Removed from WishList", { id: "succDelete" });
  }, [isError, isSuccess, error, deleteSuccess]);

  const addWishlist = () => {
    if (!userExist) {
      navigate("/signin")
      return
    }
    postWishlist({ token, foodId: _id });
  };

  const removeWishlist = () => {
    deleteWishlist({ token, foodId: _id });
  };

  if (userExist) {
    wishListed = data.wishLists.find((item) => item.foodId === _id);
  }

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
        <p className="text-md">{description}</p>
        <div className="card-actions items-center mt-2 justify-end">
          <p className="text-2xl font-semibold">{price}৳</p>
          {wishListed ? (
            <div
              onClick={removeWishlist}
              className="tooltip tooltip-accent"
              data-tip="Add to Wishlist"
            >
              <AiFillHeart className="text-2xl text-red-600" />
            </div>
          ) : (
            <div
              onClick={addWishlist}
              className="tooltip tooltip-accent"
              data-tip="Add to Wishlist"
            >
              <AiOutlineHeart className="text-2xl text-red-600" />
            </div>
          )}
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
