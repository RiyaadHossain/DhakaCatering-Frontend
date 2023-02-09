import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/gallery.jpg";
import Slieder from "../../components/Slieder";

export default function Gallery() {
  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Gallery" />
      <h3 className="text-center mt-8 text-2xl font-bold">Our Work</h3>
      <Slieder />
    </div>
  );
}
