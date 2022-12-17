import React from "react";
import Food1 from "../assets/images/hero-image-1.jpg";
import Food2 from "../assets/images/hero-image-3.jpg";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function FoodTable() {
  return (
    <div className="overflow-x-auto md:w-full w-">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr className="hover">
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar hidden md:flex">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={Food1} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Burger</div>
                  <span className="badge badge-ghost badge-sm">Fast Food</span>
                </div>
              </div>
            </td>
            <td>$399</td>
            <td>1x</td>
            <th className="">
              <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                <button className="btn btn-xs bg-success border-success">
                  <BsPlusLg className="text-white" />
                </button>
                <button className="btn btn-xs mx- bg-accent border-accent">
                  <BiMinus className="text-white" />
                </button>
                <button
                  className="btn tooltip tooltip-right btn-xs bg-red-600 border-red-600"
                  data-tip="Remove"
                >
                  <MdDelete className="text-white" />
                </button>
              </div>
            </th>
          </tr>
          {/* <!-- row 2 --> */}
          <tr className="hover">
            <th>2</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar hidden md:flex">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={Food2} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Burger</div>
                  <span className="badge badge-ghost badge-sm">Fast Food</span>
                </div>
              </div>
            </td>
            <td>$203</td>
            <td>2x</td>
            <th className="">
              <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                <button className="btn btn-xs bg-success border-success">
                  <BsPlusLg className="text-white" />
                </button>
                <button className="btn btn-xs mx- bg-accent border-accent">
                  <BiMinus className="text-white" />
                </button>
                <button
                  className="btn tooltip tooltip-right btn-xs bg-red-600 border-red-600"
                  data-tip="Remove"
                >
                  <MdDelete className="text-white" />
                </button>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
