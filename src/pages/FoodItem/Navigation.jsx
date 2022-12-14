import React from "react";
import { MdStars } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';

export default function Navigation() {
  return (
    <div className="btm-nav relative max-w-md">
      <button className="active">
        <TbFileDescription className="text-2xl"/> Description
      </button>
      <button>
        <MdStars className="text-2xl"/> Reviews
      </button>
    </div>
  );
}
