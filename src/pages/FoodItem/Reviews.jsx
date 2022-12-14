import React from "react";
import ReviewCard from "../../components/ReviewCard";

export default function Reviews() {
  return (
    <div>
      <div>
        <h3 className="font-semibold text-xl">Leave Your Experience:</h3>
        <form className="flex flex-col gap-3 md:gap-4 mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input border-slate-400 w-full max-w-xl rounded-md"
          />
          <textarea
            className="textarea border-slate-400 resize-none max-w-xl rounded-md"
            placeholder="Your Reviews"
            rows={5}
          ></textarea>
          <button className="btn md:btn-wide w-56 text-white">Submit</button>
        </form>
      </div>
      <div className="mt-12">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
