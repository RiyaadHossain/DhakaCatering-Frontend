import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../components/PageBanner";
import signup from '../../assets/images/signin.jpg';

export default function SignIn() {
  return (
    <>
      <PageBanner bg_img={signup} title="Sign In" />
      <div className="hero pt-12 min-h-screen bg-base-200 pb-12">
        <div className="hero-content gap-5 md:gap-14 flex-col lg:flex-row">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold">Sign In now!</h1>
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

                <label className="label">
                  <span className="label-text-alt">
                    Don't have any account?{" "}
                    <Link className=" link link-hover link-info" to="/signup">
                      Sign Up
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6 flex flex-col gap-3">
                <button className="btn">Sign In</button>
                <button className="btn">Continue With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
