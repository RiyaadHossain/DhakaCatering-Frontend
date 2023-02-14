import { toast } from "react-hot-toast";
import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import {
  useDeleteWishlistMutation,
  useGetWishlistsQuery,
  usePostWishlistMutation,
} from "../features/wishlist/wishlistAPI";
import { getToken } from "../utils/token";
import { useUpdateViewSellMutation } from "../features/package/packageAPI";
import { useUserPersistencyQuery } from "../features/auth/authAPI";

export default function PackageCard({ item }) {
  let wishListed;
  let userExist = false;
  const token = getToken();
  const navigate = useNavigate();
  const { _id, name, price, image, category, allItems } = item;
  const { data } = useGetWishlistsQuery(token);
  const { data: user } = useUserPersistencyQuery(token);
  const [handleVewCount] = useUpdateViewSellMutation();
  const [postWishlist, { isError, isSuccess, error }] =
    usePostWishlistMutation();
  const [deleteWishlist, { isSuccess: deleteSuccess }] =
    useDeleteWishlistMutation();

  if (user?.data) {
    userExist = Object.keys(user?.data).length;
  }

  useEffect(() => {
    if (isSuccess) toast.success("Added to Wishlist", { id: "succ" });
    if (isError) toast.error(error.data.error, { id: "err" });
    if (deleteSuccess)
      toast.success("Removed from WishList", { id: "succDelete" });
  }, [isError, isSuccess, error, deleteSuccess]);

  const addWishlist = () => {
    if (!userExist) {
      navigate("/signin");
      return;
    }
    postWishlist({ token, foodId: _id });
  };

  const removeWishlist = () => {
    deleteWishlist({ token, foodId: _id });
  };

  if (userExist) {
    wishListed = data?.wishLists?.find((item) => item.foodId === _id);
  }

  const handleDetails = () => {
    handleVewCount({
      packageData: { id: item._id, viewCount: 1 },
    });
    navigate(`/package/${item._id}`);
  };

  return (
    <div className="card w-96 h-[450px] bg-base-100 rounded-lg shadow-xl hover:-translate-y-3 transition-all">
      <figure>
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-32 object-cover"
        />
      </figure>
      <div className="card-body justify-between h-full">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-success badge-sm">{category}</div>
        </div>
        {/* <p className="text-md">{description}</p> */}
        <div>
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between max-w-xs mb-1"
            >
              <div>{item?.id?.name}</div>
              <div>{item.qty} </div>
            </div>
          ))}
        </div>
        <div>
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
            onClick={() => handleDetails()}
            className="btn btn-outline btn-block btn-info mt-3"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
