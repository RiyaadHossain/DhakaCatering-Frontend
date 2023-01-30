import React from "react";
import { useForm } from "react-hook-form";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import SelectItems from "./ItemModal";
import { useState } from "react";
import { useCreateOrderRequestMutation } from "../../features/orderRequest/orderRequestAPI";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getToken } from "../../utils/token";

export default function Order() {
  const token = getToken();
  let [selItems, setSelItems] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);
  const [createOrderRequest, { isSuccess }] = useCreateOrderRequestMutation();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess)
      toast.success("Your order request is submitted", { id: "succ" });
  }, [isSuccess]);

  const handleOrder = (orderRequestData) => {
    if (!selItems.length || !totalPrice)
      return toast.error("You Can't make any empty request", { id: "err" });

    const allItems = selItems.map((item) => {
      return { id: item._id, qty: item.qty, totalPrice: item.totalPrice };
    });
    orderRequestData = { ...orderRequestData, allItems, totalPrice };
    createOrderRequest({ orderRequestData, token });
    reset();
    selItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Order" />
      <h4 className="text-xl md:text-2xl font-bold text-center pt-20 pb-5 mb-5 md:mb-10">
        Please Make the Customize Order
      </h4>
      <div className="flex items-center justify-center px-4 md:px-8 max-w-4xl mx-auto">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-xl bg-gray-200">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleOrder)}>
              <div className="flex gap-3 md:gap-6 flex-wrap">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">
                      Package Name{" "}
                      <span className="text-xs text-error font-semibold">
                        *
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Give a package name"
                    {...register("name", { required: true })}
                    className="input input-bordered rounded-md"
                  />
                  {errors.name && (
                    <span className="text-error text-xs text-left mt-1">
                      Package Name is required
                    </span>
                  )}
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">
                      Category{" "}
                      <span className="text-xs text-error font-semibold">
                        *
                      </span>
                    </span>
                  </label>
                  <select
                    defaultValue="Empty"
                    {...register("category", { required: true })}
                    className="select select-bordered rounded-md w-full max-w-xs"
                  >
                    <option disabled value="Empty">
                      Select a Category
                    </option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Iftari">Iftari</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birtday">Birtday</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.category && (
                    <span className="text-error text-xs text-left mt-1">
                      Category is required
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">
                    Select Item{" "}
                    <span className="text-xs text-error font-semibold">*</span>
                  </span>
                </label>
                <label htmlFor="my-modal" className="btn rounded-md">
                  Select Items
                </label>
                {errors.items && (
                  <span className="text-error text-xs text-left mt-1">
                    Package Name is required
                  </span>
                )}
              </div>
              <div className="mt-4 flex">
                <p>
                  <span className="font-semibold">Items Selected:</span>{" "}
                  {selItems.length}
                </p>
                <p>
                  <span className="font-semibold"> Price:</span> {totalPrice}
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info btn-wide mx-auto rounded-lg">
                  Order Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SelectItems
        selItems={selItems}
        setSelItems={setSelItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}
