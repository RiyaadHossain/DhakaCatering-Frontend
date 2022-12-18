import React from "react";

function PageBanner({bg_img, title}) {
  return (
    <div
      className="hero min-h-[22vh] mt-6"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="hero-overlay bg-slate-800 bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
