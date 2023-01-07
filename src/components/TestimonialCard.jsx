import React from "react";
import user from "../assets/images/person2.jpg";

export default function TestimonialCard() {
  return (
    <div className="card w-96 bg-sky-700 text-slate-200">
      <div className="card-body">
        <div className="flex items-center flex-col gap-3">
          <img
            src={user}
            className="w-16 h-16 rounded-full object-cover border border-black"
            alt=""
          />
          <h2 className="font-bold text-white">Ariyan Khan</h2>
        </div>
        <p className="text-sm font-thin">
          From my childhood, I tested many food items throughout various
          restaurants in Dhaka. I guarantee Dhaka Catering provides the most
          delicious foods.
        </p>
      </div>
    </div>
  );
}
