import React from "react";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Foods from "./Foods";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feature/>
      <Foods />
      <FAQ/>
      <Testimonials/>
    </div>
  );
}
