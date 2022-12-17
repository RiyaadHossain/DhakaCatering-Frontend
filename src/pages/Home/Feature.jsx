import React from "react";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";
import { IoRestaurant } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

export default function Feature() {
  return (
    <div className="pt-20 pb-8 flex justify-center items-center gap-8 md:gap-10 flex-wrap px-2">
      <div className={`stats shadow bg-orange-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <MdEmojiFoodBeverage />
          </div>
          <div>
            <div className="stat-value text-2xl">Fresh Food</div>
            <div className="text-xs">
              21% more fresh and spicy foods are provided in Dhaka City
            </div>
          </div>
        </div>
      </div>

      <div className={`stats shadow bg-sky-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <GrRestaurant />
          </div>
          <div>
            <div className="stat-value text-2xl">Fresh Food</div>
            <div className="text-xs">
              21% more fresh and spicy foods are provided in Dhaka City
            </div>
          </div>
        </div>
      </div>

      <div className={`stats shadow bg-indigo-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <IoRestaurant />
          </div>
          <div>
            <div className="stat-value text-2xl">Fresh Food</div>
            <div className="text-xs">
              21% more fresh and spicy foods are provided in Dhaka City
            </div>
          </div>
        </div>
      </div>

      <div className={`stats shadow bg-rose-300 max-w-[300px]`}>
        <div className="stat flex items-center gap-5">
          <div className="text-4xl">
            <MdFastfood />
          </div>
          <div>
            <div className="stat-value text-2xl">Fresh Food</div>
            <div className="text-xs">
              21% more fresh and spicy foods are provided in Dhaka City
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
