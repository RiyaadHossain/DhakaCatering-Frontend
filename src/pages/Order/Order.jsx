import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getToken } from "../../utils/token";
import ItemModal from "./ItemModal";
import SelectedItem from "./SelectedItem";
import SignUPModal from "./SignUPModal";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { useCreateOrderRequestMutation } from "../../features/orderRequest/orderRequestAPI";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const token = getToken();
  let orderRequestDataGlobal;
  const navigate = useNavigate();
  const [orderRequestInfo, setOrderRequestInfo] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  let [selItems, setSelItems] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);
  let [calculated, setCalculated] = useState(0);
  let [person, setPerson] = useState(0);
  const [createOrderRequest, { isSuccess }] = useCreateOrderRequestMutation();

  const privious = new Date();
  privious.setDate(privious.getDate() - 1);

  const disabledDays = [{ from: new Date(1900, 4, 18), to: privious }];

  const [date, setDate] = useState(new Date());

  let footer = <p className="text-sky-600 font-semibold">Please pick a day.</p>;
  if (date) {
    footer = (
      <p className="text-sky-600 font-semibold">
        You picked {format(date, "PP")}.
      </p>
    );
  }

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

    if (!date) {
      return toast.error("Please pick a date");
    }
    const calculatedPrice = totalPrice * person;
    orderRequestDataGlobal = {
      ...orderRequestData,
      date,
      person,
      allItems,
      totalPrice: calculatedPrice,
    };
    setOrderRequestInfo(orderRequestDataGlobal);
    if (!token) {
      setOpenModal(true);
    } else {
      createOrderRequest({ orderRequestData: orderRequestDataGlobal, token });
      reset();
      setSelItems([]);
      setTotalPrice(0);
      setPerson(0);
      setDate();
      setTimeout(() => {
        navigate("/");
      }, 800);
    }
  };

  const calculation = (person) => {
    setPerson(person);
    setCalculated(person * totalPrice);
  };

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Order" />
      <h4 className="text-xl md:text-2xl font-bold text-center pt-20 pb-5 mb-5 md:mb-10">
        Please Make the Customize Order
      </h4>
      <div className="flex items-center justify-center px-2 md:px-8 max-w-4xl mx-auto">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-xl border border-slate-500">
          <div className="card-body px-1 md:px-6">
            <form onSubmit={handleSubmit(handleOrder)}>
              <div className="flex gap-3 md:gap-6 flex-wrap flex-col md:flex-row">
                <DayPicker
                  disabled={disabledDays}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  footer={footer}
                />
                <div className="form-control">
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
                    className="input input-bordered rounded-md w-full bg-slate-200"
                  />
                  {errors.name && (
                    <span className="text-error text-xs text-left mt-1">
                      Package Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
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
                    className="select select-bordered rounded-md w-full bg-slate-200"
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

              <div className="form-control flex-1 mt-5">
                <label
                  htmlFor="my-modal"
                  className="btn rounded-md"
                  onClick={() => setPerson(0)}
                >
                  Select Items
                </label>
                {errors.items && (
                  <span className="text-error text-xs text-left mt-1">
                    Package Name is required
                  </span>
                )}
              </div>
              <div className="my-4">
                {!selItems.length && (
                  <span className="text-error text-sm">
                    Please select at least 1 item
                  </span>
                )}
                <SelectedItem
                  selItems={selItems}
                  setSelItems={setSelItems}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
                <div className="mt-3 flex justify-between mb-2 px-3">
                  <p className="font- text-lg">
                    Price: <span className="text-sm">(Per Person)</span>
                  </p>
                  <span className="font-semibold text-lg">{totalPrice}৳</span>
                </div>
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text mr-10">
                    Total Person{" "}
                    <span className="text-xs text-error font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  value={person}
                  disabled={!selItems.length}
                  placeholder="Minimum 50"
                  onChange={(e) => calculation(e.target.value)}
                  className="input input-bordered rounded-md w-full bg-slate-200"
                />
                {person < 50 && (
                  <span className="text-error text-xs text-left mt-1">
                    Person should be minimum 50
                  </span>
                )}
              </div>
              <div className="mt-3 flex justify-between mb-2 px-1">
                <p className="font- text-lg">Total Price:</p>
                <span className="font-semibold text-lg">{calculated}৳</span>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={person < 50}
                  type="submit"
                  className="btn btn-info btn-wide mx-auto rounded-lg"
                >
                  Order Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {openModal && (
        <SignUPModal
          token={token}
          setOpenModal={setOpenModal}
          createOrderRequest={createOrderRequest}
          orderRequestDataGlobal={orderRequestInfo}
        />
      )}
      <ItemModal
        selItems={selItems}
        totalPrice={totalPrice}
        setSelItems={setSelItems}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}
