import React from "react";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Foods from "./Foods";
import MostSold from "./MostSold";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import TrendingItem from "./TrendingItem";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Packages/>
      <Foods />
      <TrendingItem />
      <MostSold/>
      <FAQ/>
      <Testimonials/>
    </div>
  );
}
