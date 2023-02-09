import React from "react";
import { useNavigate } from "react-router-dom";
import Slieder from "../../components/Slieder";

export default function SliderSection() {
  const navigate = useNavigate();
  return (
    <div className="py-16 px-5">
      <h2 className="section-title">Successful Stories</h2>
      <Slieder />
      <div className="text-center mt-10">
        <button onClick={() => navigate("/gallery")} className="btn btn-wide">
          More Stories
        </button>
      </div>
    </div>
  );
}
