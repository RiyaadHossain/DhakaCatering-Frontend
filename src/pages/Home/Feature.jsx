import React from "react";
import FeatureCard from "../../components/FeatureCard";
import { MdEmojiFoodBeverage } from "react-icons/md"
import { GrRestaurant } from "react-icons/gr"
import { IoRestaurant } from "react-icons/io5"
import { MdFastfood } from "react-icons/md"

export default function Feature() {
  return (
    <div className="py-20 flex justify-center items-center gap-8 md:gap-10 flex-wrap px-2">
      <FeatureCard icon={<MdEmojiFoodBeverage/>} color='orange'/>
      <FeatureCard icon={<GrRestaurant/>} color='sky'/>
      <FeatureCard icon={<IoRestaurant/>} color='indigo'/>
      <FeatureCard icon={<MdFastfood/>} color='rose' className='text'/>
    </div>
  );
}
