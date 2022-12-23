import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="py-20 ">
      <h2 className="section-title px-2">What Others Say About Us</h2>
      <div className="flex flex-wrap gap-5 justify-center px-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
