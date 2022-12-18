import React from "react";
import FoodCard from "../../components/FoodCard";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";

export default function Menu() {
  return (
    <div className="pb-10">
      <PageBanner bg_img={bg_img} title="Menu" />
      <div className="pt-16">
        <div className="mb-20 flex flex-wrap gap-8 md:gap-20 px-6 justify-center">
          <select className="select rounded-md bg-slate-700 text-white select-bordered w-full max-w-[250px] md:max-w-[300px]">
            <option selected>Filter by Category</option>
            <option>BreakFast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
          <div className="flex gap-3 flex-wrap ">
            <select className="select rounded-md bg-slate-700 text-white select-bordered mx-auto w-full max-w-[120px]">
              <option selected>Sort by</option>
              <option>BreakFast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered min-w-[310px] md:w-80"
                />
                <button className="btn btn-square bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-8 px-4 md:px-8 lg:px-24">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
        <div className="text-center mt-14">
          <div className="btn-group">
            <button className="btn">1</button>
            <button className="btn btn-active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
          </div>
        </div>
      </div>
    </div>
  );
}
