import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/about_bg.jpg";
import mission_bg from "../../assets/images/mission_bg.jpg";
import story_bg from "../../assets/images/story_bg.jpg";
import TeamCard from "../../components/TeamCard";
import kazi_jahangir from "../../assets/images/person1.jpg";
import kazi_shuvo from "../../assets/images/person2.jpg";
import riyad_hossain from "../../assets/images/riyad_hossain.JPG";
import cheif_chef from "../../assets/images/cheif_chef.jpg";

export default function About() {
  return (
    <div className="pb-14 bg-white">
      <PageBanner title="About" bg_img={bg_img} />
      <div className="pb-10 px-12 md:px-20 pt-16">
        {/* Our Mission */}
        <div className="flex flex-col mb-20 md:mb-12 md:flex-row gap-8 flex-wrap items-center justify-center">
          <div className="flex-1">
            <img src={mission_bg} className="mx-auto rounded-3xl" alt="" />
          </div>
          <div className="flex-1">
            <h4 className="text-3xl text-center md:text-left font-bold mb-4">
              Our Mission
            </h4>
            <p className="text-slate-600">
              A public eating establishment similar to a restaurant is mentioned
              in a 512 BC record from Ancient Egypt. It served only one dish, a
              plate of cereal, wild fowl, and onions. A forerunner of the modern
              restaurant is the thermopolium, an establishment in Ancient Greece
              and Ancient Rome that sold and served ready-to-eat food and
              beverages. These establishments were somewhat comparable to modern
              fast food restaurants. They were most often frequented by people
              who lacked private kitchens. In the Roman Empire they were popular
              among residents of insulae. In Pompeii, 158 thermopolia with
              service counters have been identified throughout the town.
            </p>
          </div>
        </div>
        {/* Our Story */}
        <div className="flex  mb-20 md:mb-24 flex-col md:flex-row-reverse gap-8 flex-wrap items-center justify-center">
          <div className="flex-1">
            <img src={story_bg} className="mx-auto rounded-3xl" alt="" />
          </div>
          <div className="flex-1">
            <h4 className="text-3xl text-center md:text-left font-bold mb-4">
              Our Story
            </h4>
            <p className="text-slate-600">
              A public eating establishment similar to a restaurant is mentioned
              in a 512 BC record from Ancient Egypt. It served only one dish, a
              plate of cereal, wild fowl, and onions. A forerunner of the modern
              restaurant is the thermopolium, an establishment in Ancient Greece
              and Ancient Rome that sold and served ready-to-eat food and
              beverages. These establishments were somewhat comparable to modern
              fast food restaurants. They were most often frequented by people
              who lacked private kitchens. In the Roman Empire they were popular
              among residents of insulae. In Pompeii, 158 thermopolia with
              service counters have been identified throughout the town.
            </p>
          </div>
        </div>
        {/* Our Team */}
        <div className="">
          <h4 className="text-3xl text-center font-bold mb-12">Our Team</h4>
          <div className="flex flex-wrap gap-8 justify-center">
            <TeamCard
              img={kazi_jahangir}
              name="Kazi Jahangir"
              profession="Founder & CEO"
            />
            <TeamCard
              img={kazi_shuvo}
              name="Kazi Shuvo"
              profession="Lead Manager"
            />
            <TeamCard
              img={riyad_hossain}
              name="Riyad Hossain"
              profession="Software Engineer"
            />
            <TeamCard
              img={cheif_chef}
              name="
              Tommy Miah"
              profession="Cheif Chef"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
