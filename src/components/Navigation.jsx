import React, { useState } from "react";
import { useGetReviewsQuery } from "../features/review/reviewAPI";
import Description from "../pages/FoodItem/Description";
import Reviews from "../pages/FoodItem/Reviews";
import Loading from "./Loading";

export default function Navigation({ foodId, description }) {
  const [navig, setNavig] = useState("des");
  const { data, isFetching } = useGetReviewsQuery({ foodId });
  if (isFetching) return <Loading />;

  return (
    <div className="">
      <div className="btm-nav relative max-w-md">
        <button
          onClick={() => setNavig("des")}
          className={`${
            navig === "des" ? "active" : null
          } flex flex-row gap-2 bg-slate-200 mr-2`}
        >
          <p>Description</p>
        </button>
        <button
          onClick={() => setNavig("rev")}
          className={`${
            navig === "rev" ? "active" : null
          } flex flex-row gap-2 bg-slate-200 `}
        >
          <p>Reviews ({data?.reviews?.length || 0})</p>
        </button>
      </div>
      <div className="mt-8">
        {navig === "des" ? (
          <Description description={description} />
        ) : (
          <Reviews reviews={data?.reviews} foodId={foodId} />
        )}
      </div>
    </div>
  );
}
