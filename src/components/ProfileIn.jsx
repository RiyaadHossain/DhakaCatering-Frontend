import React from "react";
import { HiUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function ProfileIn() {
  const navigate = useNavigate();
  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <div className="cursor-pointer relative">
            <HiUserCircle className="text-2xl" />
          </div>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact border border-gray-300 shadow-lg bg-gray-100 dropdown-content w-80 mx-auto items-center"
      >
          <div className="set-center flex-col gap-4 py-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="set-center flex-col gap-2">
              <h4 className="text-2xl font-bold">Kazi Zamil</h4>
              <span className="badge">Studend</span>
              <button
                onClick={() => navigate("/profile")}
                className="btn btn-primary btn-block mt-2"
              >
                View Profile
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
