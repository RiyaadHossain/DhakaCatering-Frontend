import React from "react";

export default function FeatureCard({ color, icon }) {
  return (
    <div className={`stats shadow bg-${color}-300 max-w-[300px]`}>
      <div className="stat flex items-center gap-5">
        <div className="text-4xl">{icon}</div>
        <div>
          <div className="stat-value text-2xl">Fresh Food</div>
          <div className="text-xs">21% more fresh and spicy foods are provided in Dhaka City</div>
        </div>
      </div>
    </div>
  );
}
