import React from "react";
import IconSpinner from "./IconSpinner";
import { HiUserCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { clearToken, getToken } from "../utils/token";
import { useUserPersistencyQuery } from "../features/auth/authAPI";

export default function ProfileIn() {
  const token = getToken();
  const navigate = useNavigate();
  const { data, isFetching } = useUserPersistencyQuery(token);
  let user = { fullName: "", imageUrl: "", email: "", occupation: "" };

  if (isFetching) return <IconSpinner />;

  if (data?.status === "success") {
    user.email = data?.data?.email;
    user.fullName = data?.data?.fullName;
    user.imageUrl = data?.data?.imageUrl;
    user.occupation = data?.data?.occupation;
  }

  const signOut = () => {
    clearToken()
    window.location.reload()
  }

  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <div className="cursor-pointer relative">
            {user.imageUrl  ? (
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="" src={user.imageUrl} />
                </div>
              </div>
            ) : (
              <HiUserCircle className="text-3xl" />
            )}
          </div>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact border border-gray-300 shadow-lg bg-gray-100 dropdown-content w-[300px] mx-auto items-center"
      >
        {!user.email ? (
          <div className="card-body">
            <span className="font-bold text-lg">Not Signed In</span>
            <div className="card-actions">
              <button
                onClick={() => navigate("signin")}
                className="btn btn-primary btn-sm btn-block"
              >
                Sign In
              </button>
            </div>
          </div>
        ) : (
          <div className="set-center flex-col gap-4 py-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.imageUrl} alt="" />
              </div>
            </div>
            <div className="set-center flex-col gap-2">
              <h4 className="text-2xl font-bold">{user.fullName}</h4>
              <span className="badge">{user.occupation}</span>
              <button
                onClick={signOut}
                className="btn btn-error btn-block mt-2"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
