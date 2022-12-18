import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-3.jpg";
import food_img from "../../assets/images/hero-image-2.jpg";
import Navigation from "./Navigation";
import SuggestedFood from "./SuggestedFood";

export default function FoodItem() {

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Chicken Burger" />

      {/* ===================== First Section Start ===================== */}
      <div className="flex pt-16 flex-col md:flex-row flex-wrap items-center md:items-start gap-7 px-5 md:px-10">
        <div className="flex-1 mb-7 md:mb-0">
          <img className="rounded-md" src={food_img} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">Chicken Burger</h3>
          <div className="flex gap-16 mt-7">
            <p className="font-bold">1035 ৳</p>
            <p>
              <span className="font-semibold">Category:</span> Fast Food
            </p>
          </div>
          <p className="pt-4 font-light">
            Science says that junk foods are full of calories, fat and excess
            sodium and having it even once can be bad for your health. For
            example, a single hamburger contains 500 calories, 25 grams of fat,
            40 grams of carbs, 10 grams of sugar, and 1,000 milligrams of
            sodium, which is enough to cause havoc in your system
          </p>
          <div className="mt-5">
            <button className="btn rounded-md btn-wide">Add to Cart</button>
          </div>
        </div>
      </div>
      {/* ===================== First Section End ===================== */}

      <div className="mt-16 px-12">
        <Navigation />
        <SuggestedFood/>
      </div>
    </div>
  );
}
