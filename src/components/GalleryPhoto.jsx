import React from "react";
import img from "../assets/images/hero-image-1.jpg";

export default function GalleryPhoto() {
  return (
    <div className="photo">
      <div className="border top"></div>
      <div className="border bottom"></div>
      <div className="border left"></div>
      <div className="border right"></div>
      <img src={img} alt="" />
      <div className="photo_content">
        <h2 className="font-semibold text-lg">Ifter Party</h2>
        <h4 className="font-light">14 Feb, 2022</h4>
      </div>
    </div>
  );
}
