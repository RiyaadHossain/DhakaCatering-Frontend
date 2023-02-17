import React from "react";
import { useNavigate } from "react-router-dom";
import GalleryPhoto from "../../components/GalleryPhoto";
import Loading from "../../components/Loading";
import { useGetGalleryQuery } from "../../features/gallery/galleryAPI";

export default function GallerySection() {
  const { data, isFetching } = useGetGalleryQuery();
  const navigate = useNavigate();
  if (isFetching) return <Loading />;
  console.log(data);
  return (
    <div className="py-16 px-5">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery">
        {data?.gallery?.map((gallery, i) => (
          <GalleryPhoto key={i} gallery={gallery} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button onClick={() => navigate("/gallery")} className="btn btn-wide">
          More Stories
        </button>
      </div>
    </div>
  );
}
