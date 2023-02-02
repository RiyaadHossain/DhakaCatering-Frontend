import React from "react";
import { useNavigate } from "react-router-dom";
import bg_img from "../../assets/images/hero-image-2.jpg";
import Loading from "../../components/Loading";
import { useGetPackagesQuery } from "../../features/package/packageAPI";

export default function WishlistCard({ item }) {
  const navigate = useNavigate();
  const { data, isFetching } = useGetPackagesQuery();
  if (isFetching) return <Loading />;

  item = data.data.find((packageItem) => packageItem._id === item.foodId);

  return (
    <div className="card w-96 h-[600px] bg-base-100 rounded-lg shadow-xl hover:-translate-y-3 transition-all">
      <figure>
        <img
          src={item.image.url || bg_img}
          alt=""
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{item.name}</h2>
          <div className="badge badge-success badge-sm">{item.category}</div>
        </div>
        <p className="text-md">{item.description}</p>
        <div className="flex items-center mt-2 justify-between">
          <p className="">
            <span className="text-base font-semibold">Total Item: </span>{" "}
            {item.allItems.length}
          </p>
          <p className="text-2xl font-semibold">{item.price}৳</p>
        </div>
        <div className="flex gap-3 mt-2 items-center">
          <button
            onClick={() => navigate(`/package/${item._id}`)}
            className="btn  btn-info flex-1"
          >
            See Details
          </button>
          <button
            onClick={() => navigate(`/package/${item._id}`)}
            className="btn btn-warning flex-1"
          >
            Make Order
          </button>
        </div>
      </div>
    </div>
  );
}
