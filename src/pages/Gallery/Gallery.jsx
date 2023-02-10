import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/gallery.jpg";
import Slieder from "../../components/Slieder";
import GalleryPhoto from "../../components/GalleryPhoto";
import { useGetGalleryQuery } from "../../features/gallery/galleryAPI";
import Loading from "../../components/Loading";

export default function Gallery() {

  const { data, isFetching } = useGetGalleryQuery();
  if (isFetching) return <Loading />;
  console.log(data);

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Gallery" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 mt-14 gap-6">
        <div className=" text-center">
          <h2 className="text-2xl font-bold mb-2">
            Things That makes us Great
          </h2>
          <p className="max-w-lg mx-auto text-slate-500 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            nihil non nemo officiis, nisi laborum odio aliquid ipsum illo
            numquam tempora, est rem rerum exercitationem laudantium earum
            obcaecati id debitis sunt accusamus voluptates praesentium eius!
          </p>
        </div>
        <div className="">
          <iframe
            className="w-full rounded-md h-[220px] md:h-[520px]"
            src="https://www.youtube.com/embed/bV_NdUZEmnE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h3 className="text-center mt-12 text-3xl font-bold">Our Work</h3>
      <Slieder />
      <h3 className="text-center mt-12 text-3xl mb-5 font-bold">Our Story</h3>
      <div className="gallery">
        {data.gallery.map((gallery, i) => (
          <GalleryPhoto key={i} gallery={gallery} />
        ))}
      </div>
    </div>
  );
}
