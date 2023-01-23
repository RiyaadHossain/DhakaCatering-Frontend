import React, { useState } from "react";
import Description from "../pages/FoodItem/Description";
import Reviews from "../pages/FoodItem/Reviews";

export default function Navigation() {
  const [navig, setNavig] = useState("des");

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
          <p>Reviews (7)</p>
        </button>
      </div>
      <div className="mt-8">
        {navig === "des" ? <Description /> : <Reviews />}
      </div>
    </div>
  );
}
