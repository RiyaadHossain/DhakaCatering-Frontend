import React from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { useDeleteReviewMutation } from "../features/review/reviewAPI";
import { getToken } from "../utils/token";

export default function ReviewCard({ review, user }) {
  console.log(review, user);
  const token = getToken();
  const [
    deleteReview,
    { isLoading: deleteLoading, isError: deleteError, isSuccess: deleteSucess },
  ] = useDeleteReviewMutation();

  useEffect(() => {
    if (deleteLoading)
      toast.loading("Deleting...", { id: "deleteLoad", duration: 800 });
    if (deleteSucess)
      toast.success("Deleted your Review successfully", { id: "deleteSucc" });
    if (deleteError)
      toast.error("Sorry! Cloudn't delete your review", { id: "deleteErr" });
  }, [deleteLoading, deleteSucess, deleteError]);

  const deleteHandle = (id) => {
    deleteReview({ id, token });
  };

  return (
    <div className="mb-6 max-w-2xl relative bg-slate-200 p-5 rounded-md">
      <div>
        <h3 className="font-semibold text-lg mb-1">{review.name}</h3>
        <p className="font-light max-w-[650px]">{review.review}</p>
      </div>
      {review.userId === user?._id && (
        <button
          onClick={() => deleteHandle(review._id)}
          className="absolute top-2 right-2"
        >
          <TiDelete className="text-3xl text-red-600" />
        </button>
      )}
    </div>
  );
}
