import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
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
              className="menu menu-compact dropdown-content shadow-md mt-5 p-2 bg-base-200 rounded-box w-52 flex gap-5"
            >
              <li className="font-semibold flex justify-center content-center">
                <Link to="/">Home</Link>
              </li>
              <li className="font-semibold flex justify-center content-center">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="font-semibold flex justify-center content-center">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="font-semibold flex justify-center content-center">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <a href="web" className="btn btn-ghost font-bold normal-case text-xl">
            Dhaka Catering
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            <li className="font-semibold flex justify-center content-center">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold flex justify-center content-center">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="font-semibold flex justify-center content-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-semibold flex justify-center content-center">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-5 btn relative">
            <HiShoppingCart className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-primary w-5 h-5 rounded-full text-center text-sm font-semibold text-black">
              5
            </span>
          </div>
        </div>
      </div>
    </div>
    /* <div className="navbar bg-base-200 rounded-full mt-5 shadow-md">
      <div className="flex-1">
        <a href="web" className="btn btn-ghost font-bold normal-case text-xl">
          Dhaka Catering
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold flex justify-center content-center">
            <a href="web">Home</a>
          </li>
          <li className="font-semibold flex justify-center content-center">
            <a href="web">Menu</a>
          </li>
          <li className="font-semibold flex justify-center content-center">
            <a href="web">Contact</a>
          </li>
          <li className="font-semibold flex justify-center content-center">
            <a href="web">About</a>
          </li>
        </ul>
        
      </div>
    </div> */
  );
}
