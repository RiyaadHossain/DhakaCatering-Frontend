import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-3.jpg";
import food_img from "../../assets/images/hero-image-2.jpg";
import Navigation from "../../components/Navigation";
import { useParams } from "react-router-dom";
import { useGetPackageDetailsQuery } from "../../features/package/packageAPI";
import Loading from "../../components/Loading";

export default function PackageDetails() {
  const { id } = useParams();
  const { isFetching, data } = useGetPackageDetailsQuery(id);
  if (isFetching) return <Loading />;

  const {
    name,
    price,
    reviews,
    /* viewCount, sellCount, */ category,
    description,
    image,
    allItems,
  } = data?.data;

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title={name} />

      {/* ===================== First Section Start ===================== */}
      <div className="flex pt-16 flex-col md:flex-row flex-wrap items-center md:items-start gap-7 px-5 md:px-10">
        <div className="flex-1 mb-7 md:mb-0">
          <img
            className="rounded-md max-h-[500px] object-cover w-full"
            src={image.url || food_img}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">{name}</h3>
          <span className="badge badge-success badge-sm">{category}</span>
          {/*  <div className="flex gap-16 mt-7">
            <p className="font-bold text-lg">{price} ৳</p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
          </div> */}
          <div className="mt-4 max-w-[260px]">
            {allItems.items.map((item) => (
              <div className="flex justify-between items-center mt-1">
                <h2>{item.name}</h2>
                <span>{item.price}</span>
              </div>
            ))}
            <div className="mt-5 flex items-center justify-between">
              <p className="font-semibold text-lg">Total</p>
              <p className="font-semibold">{price}</p>
            </div>
          </div>
          <p className="pt-4 font-light max-w-lg">{description}</p>
          <div className="mt-5">
            <button className="btn rounded-md btn-wide">Add to Cart</button>
          </div>
        </div>
      </div>
      {/* ===================== First Section End ===================== */}

      <div className="mt-16 px-6">
        <Navigation reviews={reviews} foodId={id} />
        {/* <SuggestedFood /> */}
      </div>
    </div>
  );
}
