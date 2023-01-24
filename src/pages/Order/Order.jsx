import React from "react";
import { useForm } from "react-hook-form";
import { getToken } from "../../utils/token";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import { useUserPersistencyQuery } from "../../features/auth/authAPI";
import { useParams } from "react-router-dom";

export default function Order() {
  const token = getToken();
  const { id } = useParams();
  const { data } = useUserPersistencyQuery(token);

  const { fullName, email, contactNumber } = data?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { fullName, email, contactNumber } });

  console.log(id);
  const handleOrder = (orderData) => {
    console.log(orderData);
  };

  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Order" />
      <h4 className="text-xl md:text-2xl font-bold text-center pt-20 pb-5 mb-5 md:mb-10">
        Please Fill up the Form to Confirm Your Order
      </h4>
      <div className="flex items-center justify-center px-4 md:px-8">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-xl bg-gray-200">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleOrder)}>
              <div className="flex gap-3 md:gap-6 flex-wrap">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">
                      Name
                      <span className="text-xs text-error font-semibold">
                        *
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={fullName}
                    placeholder="Sakib ul Hasan"
                    {...register("fullName", { required: true })}
                    className="input input-bordered rounded-md"
                  />
                  {errors.fullName && (
                    <span className="text-error text-xs text-left mt-1">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">
                      Email{" "}
                      <span className="text-xs text-error font-semibold">
                        *
                      </span>
                    </span>
                  </label>
                  <input
                    disabled
                    type="text"
                    value={email}
                    placeholder="sakib@gmail.com"
                    {...register("email", { required: true })}
                    className="input input-bordered rounded-md"
                  />
                  {errors.email && (
                    <span className="text-error text-xs text-left mt-1">
                      Email is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-3 md:gap-6 flex-wrap">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">
                      Phone{" "}
                      <span className="text-xs text-error font-semibold">
                        *
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={contactNumber}
                    placeholder="01703790978"
                    {...register("number", { required: true })}
                    className="input input-bordered rounded-md"
                  />
                  {errors.number && (
                    <span className="text-error text-xs text-left mt-1">
                      Number is required
                    </span>
                  )}
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Additional Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="01703799952"
                    {...register("additionalNumber")}
                    className="input input-bordered rounded-md"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  rows={4}
                  type="text"
                  {...register("address")}
                  className="textarea resize-none rounded-md"
                  placeholder="PA-150, Bashtola Masgid, South Badda, Dhaka - 1224"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-wide mx-auto rounded-lg">
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
