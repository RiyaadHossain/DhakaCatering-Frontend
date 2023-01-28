import React from "react";
import FoodCard from "../../components/FoodCard";
import Loading from "../../components/Loading";
import { useGetItemsQuery } from "../../features/item/itemAPI";

export default function SuggestedItem({ foodId }) {
  const { data, isFetching } = useGetItemsQuery();

  if (isFetching) return <Loading />;
  const items = data.data.slice(0, 6).filter((item) => item._id !== foodId);

  return (
    <>
      {items.length && (
        <div className="mt-14">
          <h3 className="font-semibold text-2xl sm:border-l-[5px] border-l-0 text-center sm:text-left border-l-sky-600 pl-2">
            You Might Also Like
          </h3>
          <div className="mt-9 flex justify-center flex-wrap gap-8">
            {items.map((item) => (
              <FoodCard item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
