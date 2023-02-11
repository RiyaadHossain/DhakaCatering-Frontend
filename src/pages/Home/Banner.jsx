import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/hero-image-2.jpg";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div
      className="hero min-h-[85vh] mt-5 relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Feeling Hungry <span className="text-primary">?</span>
          </h1>
          <p className="mb-5 font-extralight">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => navigate("/custom-order")}
            className="btn btn-primary"
          >
            Custom Order
          </button>
        </div>
      </div>
      <div className="absolute bottom-5 md:bottom-8 right-auto md:right-8 text-slate-300 flex gap-3">
        <button className="social-icon">
          <BsFacebook className="text-2xl text-sky-600" />
        </button>
        <button className="social-icon">
          <BsInstagram className="text-2xl text-orange-600" />
        </button>
        <button className="social-icon">
          <BsYoutube className="text-2xl text-red-600" />
        </button>
      </div>
    </div>
  );
}
