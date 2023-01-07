import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import FoodTable from "../../components/FoodTable";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="pb-10">
      <PageBanner title="Cart" bg_img={bg_img} />
      <div className="flex flex-wrap gap-8 pt-20 pb-6 px-3 md:px-6">
        <div className="md:block hidden flexGrowBigScreen">
          <FoodTable />
        </div>
        <FoodTable hidden={true} />
        <div className="flex-1 mt-8 md:mt-0 px-3">
            <div className="flex justify-between items-center max-w-xs md:max-w-lg">
              <h4 className="font-semibold text-lg">Sub-total</h4>
              <p className="font-bold">$556</p>
            </div>
            <p className="mt-5 mb-4 md:max-w-lg">
              You have to pay the total amount by Cash, Bkash or Card. Also, you
              can order by directly talking with us on phone.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/order/1")}
                className="btn text-white rounded-md"
              >
                Checkout
              </button>
              <button
                onClick={() => navigate("/menu")}
                className="btn text-white rounded-md"
              >
                Continue Shopping
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
