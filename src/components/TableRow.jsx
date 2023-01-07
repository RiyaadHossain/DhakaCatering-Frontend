import React from "react";
import Food1 from "../assets/images/hero-image-1.jpg";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function TableRow() {
  return (
    <tr>
      <th className="text-right">1</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={Food1} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Mega Lunch Pack</div>
            <div className="badge badge-ghost badge-sm">Lunch</div>
          </div>
        </div>
      </td>
      <td>7pc</td>
      <td>$499</td>
      <th className="">
        <div className="flex items-center gap-2 text-lg">
          <button className="btn btn-error btn-xs md:btn-sm">
            <BsPlus className="text-lg text-white" />
          </button>
          <button className="btn btn-warning btn-xs md:btn-sm">
            <BiMinus className="text-lg text-white" />
          </button>
          <button className="btn btn-success btn-xs md:btn-sm">
            <MdDelete className="text-lg text-white" />
          </button>
        </div>
      </th>
    </tr>
  );
}
