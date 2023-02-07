import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-3.jpg";
import food_img from "../../assets/images/hero-image-2.jpg";
import Navigation from "../../components/Navigation";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPackageDetailsQuery } from "../../features/package/packageAPI";
import Loading from "../../components/Loading";
import { useCreateOrderMutation } from "../../features/order/orderAPI";
import { getToken } from "../../utils/token";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import SuggestedFood from "./SuggestedPackage";
import ModalContent from "./ModalContent";

export default function PackageDetails() {
  const token = getToken();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isFetching, data } = useGetPackageDetailsQuery(id);
  const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();

  useEffect(() => {
    if (isLoading)
      toast.loading("Proccessing...", { id: "load", duration: 800 });
    if (isSuccess) toast.success("Order Create", { id: "succ" });
  }, [isLoading, isSuccess]);

  if (isFetching) return <Loading />;

  const { _id, name, price, category, description, image, allItems } =
    data?.data;

  const handleOrder = () => {
    createOrder({ token, orderData: { foodId: _id, price } });
  };

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title={name} />

      {/* ===================== First Section Start ===================== */}
      <div className="flex pt-16 flex-col md:flex-row flex-wrap items-center md:items-start gap-7 px-5 md:px-10">
        <div className="flex-1 mb-7 md:mb-0">
          <img
            className="rounded-md max-h-[500px] object-cover w-full"
            src={image.url || food_img}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">{name}</h3>
          <span className="badge badge-success badge-sm">{category}</span>
          {/*  <div className="flex gap-16 mt-7">
            <p className="font-bold text-lg">{price} ৳</p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
          </div> */}
          <div className="mt-4 max-w-[260px]">
            {allItems.map((item) => (
              <div className="flex justify-between items-center mt-1">
                <h2>{item.id.name}</h2>
                <span>{item.qty}</span>
              </div>
            ))}

            <div className="mt-3 flex items-center justify-between">
              <p className="font-semibold text-lg">Total</p>
              <p className="font-semibold">{price}</p>
            </div>
          </div>
          <label
            htmlFor="my-modal-order"
            className="btn mt-5 rounded-md btn-wide"
          >
            Order Now
          </label>
          <p className="mt-2 text-sm font-semibold ">
            Didn't Like the package?{" "}
            <span onClick={() => navigate("/custom-order")} className="link">
              {" "}
              Make a custom Order
            </span>
          </p>
        </div>
      </div>
      {/* ===================== First Section End ===================== */}

      <div className="mt-16 px-6">
        <Navigation description={description} foodId={id} />
        <SuggestedFood foodId={_id} />
      </div>

      {/* Modal Content */}
      <input type="checkbox" id="my-modal-order" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-2 border-gray-400">
          <ModalContent handleOrder={handleOrder} token={token} id={_id} />
        </div>
      </div>
    </div>
  );
}
