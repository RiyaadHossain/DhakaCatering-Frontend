import React from "react";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Foods from "./Foods";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import MessengerCustomerChat from "react-messenger-customer-chat";
import GallerySection from "./GallerySection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Packages />
      <GallerySection />
      <Foods />
      <FAQ />
      <Testimonials />
      <MessengerCustomerChat pageId="428900680898387" appId="696927455446849" />
    </div>
  );
}
