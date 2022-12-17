import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="mx-4 mt-4">
      <div className="navbar bg-base-300 shadow-md px-2 rounded-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content shadow-md mt-5 p-2 bg-base-200 rounded-box w-52 flex gap-3"
            >
              <li className="hover-bordered font-semibold flex justify-center content-center">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li className="font-semibold hover-bordered flex justify-center content-center">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="font-semibold flex hover-bordered justify-center content-center">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="font-semibold flex justify-center hover-bordered content-center">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn hidden sm:flex btn-ghost font-bold normal-case text-xl"
          >
            Dhaka Catering
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">
            <li className="hover-bordered font-semibold flex justify-center content-center">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className="font-semibold hover-bordered flex justify-center content-center">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="font-semibold flex hover-bordered justify-center content-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-semibold flex justify-center hover-bordered content-center">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div onClick={() => navigate('cart')} className="mr-5 cursor-pointer relative">
            <HiShoppingCart className="text-2xl" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-black">
              5
            </span>
          </div>
          <div className="mr-5 cursor-pointer relative">
            <BiUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
