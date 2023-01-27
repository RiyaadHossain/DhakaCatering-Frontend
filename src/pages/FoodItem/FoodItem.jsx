import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-3.jpg";
import food_img from "../../assets/images/hero-image-2.jpg";
import Navigation from "../../components/Navigation";
import { useGetItemDetailsQuery } from "../../features/item/itemAPI";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import SuggestedItem from "./SuggestedItem";

export default function FoodItem() {
  const { id } = useParams();
  const { data, isFetching } = useGetItemDetailsQuery(id);
  if (isFetching) return <Loading />;
  console.log(data.data);

  const { name, price, description, image, category, _id } = data?.data;

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Chicken Burger" />

      {/* ===================== First Section Start ===================== */}
      <div className="flex pt-16 flex-col md:flex-row flex-wrap items-center md:items-start gap-7 px-5 md:px-10">
        <div className="flex-1 mb-7 md:mb-0">
          <img
            className="rounded-md w-full object-cover max-h-[500px]"
            src={image.url || food_img}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">{name}</h3>
          <div className="flex gap-16 mt-7">
            <p className="font-bold">{price} ৳</p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
          </div>
          <p className="pt-4 font-light">{description}</p>
          {/* <div className="mt-5">
            <button className="btn rounded-md btn-wide">Add to Cart</button>
          </div> */}
        </div>
      </div>
      {/* ===================== First Section End ===================== */}

      <div className="mt-16 px-6">
        <Navigation foodId={_id} />
        <SuggestedItem foodId={_id} />
      </div>
    </div>
  );
}
