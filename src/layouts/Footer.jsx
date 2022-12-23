import React from "react";
import { IoFastFoodSharp } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-slate-900 text-stone-200">
      <div>
        <IoFastFoodSharp className="text-5xl"/>
        <p className="font-semibold">
          Dhaka Catering Ltd. <br />
          Providing reliable food since 1992
        </p>
        <p className="font-thin">Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <span>
            <FaFacebookMessenger className="text-2xl"/>
          </span>
          <span>
            <BsFacebook className="text-2xl"/>
          </span>
          <span>
            <FaInstagram className="text-2xl"/>
          </span>
        </div>
      </div>
    </footer>
  );
}
