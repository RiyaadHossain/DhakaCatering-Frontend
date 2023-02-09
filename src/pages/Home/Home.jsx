import React from "react";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Foods from "./Foods";
// import MostSold from "./MostSold";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
// import TrendingItem from "./TrendingItem";
import MessengerCustomerChat from "react-messenger-customer-chat";
import SliderSection from "./SliderSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Packages />
      <SliderSection />
      <Foods />
      {/* <TrendingItem /> */}
      {/* <MostSold/> */}
      <FAQ />
      <Testimonials />
      <MessengerCustomerChat pageId="428900680898387" appId="696927455446849" />
    </div>
  );
}
