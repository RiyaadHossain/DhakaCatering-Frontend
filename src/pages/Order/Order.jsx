import React from "react";
import bg_img from "../../assets/images/hero-image-2.jpg";
import PageBanner from "../../components/PageBanner";

export default function Order() {
  return (
    <div className="mb-14">
      <PageBanner bg_img={bg_img} title="Order" />
      <h4 className="text-xl md:text-2xl font-bold text-center pt-20 pb-5 mb-5 md:mb-10">Please Fill up the Form to Confirm Your Order</h4>
      <div className="flex items-center justify-center px-4 md:px-8">
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-xl bg-base-200">
          <div className="card-body">
            <div className="flex gap-3 md:gap-6 flex-wrap">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name <span className="text-xs text-error font-semibold">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Sakib ul Hasan"
                  className="input input-bordered rounded-md"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Email <span className="text-xs text-error font-semibold">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="sakib@gmail.com"
                  className="input input-bordered rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-3 md:gap-6 flex-wrap">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Phone <span className="text-xs text-error font-semibold">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="01703790978"
                  className="input input-bordered rounded-md"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Additional Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="01703799952"
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
                placeholder="PA-150, Bashtola Masgid, South Badda, Dhaka - 1224"
                className="textarea resize-none rounded-md"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-wide mx-auto rounded-lg">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
