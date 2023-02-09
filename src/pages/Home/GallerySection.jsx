import React from "react";
import { useNavigate } from "react-router-dom";
import GalleryPhoto from "../../components/GalleryPhoto";

export default function GallerySection() {
  const navigate = useNavigate();
  return (
    <div className="py-16 px-5">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery">
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
      </div>
      <div className="text-center mt-10">
        <button onClick={() => navigate("/gallery")} className="btn btn-wide">
          More Stories
        </button>
      </div>
    </div>
  );
}
