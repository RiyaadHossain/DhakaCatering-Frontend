import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WhatsApp() {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000);
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://wa.me/+8801703790978"
      className={`fixed ${
        shake && "shake"
      } z-50 inline-block bg-emerald-600 left-3 p-2 rounded-full bottom-3`}
    >
      <AiOutlineWhatsApp className="text-4xl text-slate-50" />
    </a>
  );
}
