import React, { useState } from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import { useGetItemsQuery } from "../../features/item/itemAPI";
import Loading from "../../components/Loading";
import FoodCard from "../../components/FoodCard";

export default function AllItems() {
  const [filter, setFilter] = useState({ search: "", category: "" });
  const { data, isFetching } = useGetItemsQuery();
  if (isFetching) return <Loading />;

  const items = data.data.filter((item) => {
    if (filter.search && filter.category && !filter.category === "All") {
      const searchText = item.name
        .toLowerCase()
        .includes(filter.search.toLocaleLowerCase());

      const categorySelected = item.category === filter.category;
      if (searchText && categorySelected) {
        return item;
      }
    } else if (filter.search) {
      if (item.name.toLowerCase().includes(filter.search.toLocaleLowerCase())) {
        return item;
      }
    } else if (filter.category && !filter.category === "All") {
      if (item.category === filter.category) {
        return item;
      }
    } else {
      return item;
    }
    return null;
  });

  return (
    <div className="pb-10">
      <PageBanner bg_img={bg_img} title="Menu" />
      <div className="pt-16">
        <div className="flex flex-wrap justify-center gap-3">
          <div className="text-center mb-3 md:mb-0">
            <select
              onClick={(e) =>
                setFilter({ ...filter, category: e.target.value })
              }
              defaultValue=""
              className="select rounded-md bg-slate-700 text-white select-bordered w-full max-w-[250px] md:max-w-[300px]"
            >
              <option value="">Filter by Category</option>
              <option value="BreakFast">BreakFast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="All">All</option>
            </select>
          </div>
          <div className="form-control mb-8">
            <div className="input-group justify-center">
              <input
                onChange={(e) =>
                  setFilter({ ...filter, search: e.target.value })
                }
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
        <div className="flex justify-center flex-wrap gap-8 px-4 md:px-8 lg:px-24">
          {items.length ? (
            items.map((item) => <FoodCard item={item} />)
          ) : (
            <span className="text-lg">Ooops! No Items Found 😔</span>
          )}
        </div>

        {/* <div className="text-center mt-14">
          <div className="btn-group">
            <button className="btn">1</button>
            <button className="btn btn-active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
