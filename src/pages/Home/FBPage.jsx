import React from "react";
import fbBg from "../../assets/images/mobileBg.png";

export default function FBPage() {
  return (
    <div
      style={{ backgroundImage: `url(${fbBg})` }}
      className=" h-[70vh] md:h-[50vh] bg-primary flex-col flex items-center justify-center"
    >
      <h3 className="text-2xl px-12 mb-2 md:text-3xl text-center font-bold">
        Like Our Official Facabook Page
      </h3>
      <p className="px-10 text-center leading-snug text-slate-700 text-sm md:text-base max-w-3xl">
        By liking a Facebook Page we get the Page's posts in our newsfeed. If
        it's an interesting post we can engage with it by liking it, by leaving
        a comment or by sharing it with our friends. Our engagement shows up in
        other people's newsfeeds, including that of the Page. So, let's say your
        Page were to like our Facebook Page.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/"
        className="btn btn-wide mx-auto mt-5"
      >
        Like Page
      </a>
    </div>
  );
}
