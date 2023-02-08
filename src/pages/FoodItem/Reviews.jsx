import React from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { getToken } from "../../utils/token";
import Loading from "../../components/Loading";
import ReviewCard from "../../components/ReviewCard";
import { useUserPersistencyQuery } from "../../features/auth/authAPI";
import { usePostReviewMutation } from "../../features/review/reviewAPI";
import { useNavigate } from "react-router-dom";

export default function Reviews({ reviews, foodId }) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let userReview;
  const navigate = useNavigate();
  const token = getToken();
  let userReviewExist = false;
  const { data: user } = useUserPersistencyQuery(token);
  const [postReview, { isLoading, isError, isSuccess }] =
    usePostReviewMutation();

  useEffect(() => {
    if (isLoading)
      toast.loading("Posting...", { id: "postLoad", duration: 800 });
    if (isSuccess)
      toast.success("Posted your Review successfully", { id: "postSucc" });
    if (isError)
      toast.error("Sorry! Cloudn't post your review", { id: "postErr" });
  }, [isLoading, isSuccess, isError]);

  if (isLoading) return <Loading />;

  const handleReview = (reviewData) => {
    if (!token) return navigate("/signin");
    reviewData = {
      foodId,
      ...reviewData,
      name: user.data.fullName,
      userId: user.data._id,
    };

    postReview({ token, reviewData });
    reset();
  };

  if (Array.isArray(reviews)) {
    reviews = reviews?.filter((review) => review.foodId === foodId);
    userReview = reviews.filter((review) => review.userId === user?.data?._id);

    if (userReview.length > 1) {
      userReviewExist = true;
    }
  }

  return (
    <div>
      <div>
        <h3 className="font-semibold text-xl">Leave Your Experience:</h3>
        <form
          onSubmit={handleSubmit(handleReview)}
          className="flex flex-col gap-3 md:gap-4 mt-4"
        >
          <textarea
            rows={4}
            placeholder="Your Reviews"
            {...register("review", { required: true })}
            className="textarea border-slate-400 resize-none max-w-xl rounded-md"
          ></textarea>
          {errors.review && (
            <span className="text-error relative -top-2 text-xs text-left">
              Review is required
            </span>
          )}
          {userReviewExist && (
            <span className="text-error text-xs md:text-sm relative -top-2">
              You can't post more than two reviews
            </span>
          )}
          <button
            type="submit"
            className="btn md:btn-wide w-32 rounded-md text-white"
            disabled={userReviewExist}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-12 grid md:grid-cols-2 md:gap-6">
        {reviews?.length ? (
          reviews.map((review, i) => (
            <ReviewCard key={i} review={review} user={user?.data} />
          ))
        ) : (
          <p className="text-xl font-semibold text-slate-600">
            No Reviews yet!
          </p>
        )}
      </div>
    </div>
  );
}
