import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import Loading from "../../components/Loading";
import { useGetItemsQuery } from "../../features/item/itemAPI";

export default function Foods() {
  const navigate = useNavigate();
  const { data, isFetching } = useGetItemsQuery();

  if (isFetching) return <Loading />;

  const foods = data?.data;

  const reload = () => window.location.reload();

  return (
    <div className="py-16">
      {foods?.length ? (
        <>
          <h2 className="section-title">Discover Our Items</h2>
          <div className="flex justify-center flex-wrap gap-8 px-4">
            {data.data.slice(0, 3).map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("all-items")}
              className="btn btn-wide"
            >
              See More
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-2xl font-semibold">
          Due to Internal Server Error Packages can't be visible now
          <button onClick={reload} className="btn btn-wide mxau">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
