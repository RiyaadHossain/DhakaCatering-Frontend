import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../components/PageBanner";
import signup from '../../assets/images/signin.jpg'; 

export default function SignUp() {
  return (
    <>
      <PageBanner bg_img={signup} title="Sign Up" />
      <div className="hero pt-12 min-h-screen bg-base-200 pb-12">
        <div className="hero-content gap-5 md:gap-14 flex-col lg:flex-row">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold">Sign Up Now!</h1>
            <p className="py-6 max-w-2xl ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Riyad Hossain"
                  className="input rounded-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="riyadhossain@gmail.com"
                  className="input rounded-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input rounded-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input rounded-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="01703790978"
                  className="input rounded-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Occupation</span>
                </label>
                <input
                  type="text"
                  placeholder="Businessman"
                  className="input rounded-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  rows={3}
                  type="text"
                  placeholder="PA-150, Bashtola Masgid, South Badda, Dhaka - 1224"
                  className="textarea rounded-md input-bordered resize-none"
                />
                <label className="label">
                  <span className="label-text-alt">
                    Already have an account? {" "}
                    <Link className=" link link-hover link-info" to="/signin"> 
                      Sign In
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6 flex flex-col gap-3">
                <button className="btn">Sign Up</button>
                <button className="btn">Continue With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
