import React from "react";

export default function TeamCard({ img, name, profession }) {
  return (
    <div className="card w-72 bg-base-200 shadow-xl">
      <figure className="px-8 pt-8">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{profession}</p>
        <div className="card-actions">
          <button className="btn rounded-lg btn-block">See Profile</button>
        </div>
      </div>
    </div>
  );
}
