import React from "react";
import { useNavigate } from "react-router-dom";
import Bug_Fix from "../../assets/icon/Fixing-Bugs.svg"

export default function Error() {
  const navigate = useNavigate();
  const fixError = () => {
    navigate("/")
    window.location.reload()
  }

  return (
    <div className="bg-slate-200">
      <div className="flex items-center flex-col justify-center w-screen px-3 h-screen gap-3">
        <img src={Bug_Fix} alt="" className="w-h-56 h-56 mb-8"/>
        <h3 className="text-3xl font-semibold text-center">We're Extreamly Sorry!</h3>
        <p className=" text-center">
          Some Unexpected Error Occurred, Please contact Support
        </p>
        <button
          onClick={fixError}
          className="btn btn-wide btn-secondary rounded-md mt-2"
        >
          Go To Home
        </button>
      </div>
    </div>
  );
}
