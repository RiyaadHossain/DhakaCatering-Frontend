import React from "react";

export default function GalleryPhoto({ gallery: { imgURL, title, date } }) {
  return (
    <div className="photo">
      <div className="border_ top"></div>
      <div className="border_ bottom"></div>
      <div className="border_ left"></div>
      <div className="border_ right"></div>
      <img src={imgURL} alt="" />
      <div className="photo_content">
        <h2 className="font-semibold text-lg">{title}</h2>
        <h4 className="font-light">{date}</h4>
      </div>
    </div>
  );
}
