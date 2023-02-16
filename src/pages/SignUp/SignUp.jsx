import React from "react";
import { useNavigate } from "react-router-dom";
import PageBanner from "../../components/PageBanner";
import signup from "../../assets/images/signin.jpg";
import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import { useUserSignUpMutation } from "../../features/auth/authAPI";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import { storeToken } from "../../utils/token";
import { userPersistencyReducer } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const navigate = useNavigate();
  const distaptch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  let errorMessage = useRef("Something went wrong");

  const [signupFunc, { isLoading, isError, isSuccess, error, data }] =
    useUserSignUpMutation();

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });

  useEffect(() => {
    if (password === confirmPassword && confirmPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const handleSignUp = async (userData) => {
    signupFunc(userData);
    reset();
  };

  useEffect(() => {
    if (isLoading)
      toast.loading("Signing Up...", { id: "loading", duration: 800 });

    if (error) {
      if (error.data.error.includes("duplicate key error"))
        errorMessage.current = "User with same credentials is exist";
    }

    if (isSuccess) {
      storeToken(data.data.token);
      toast.success("Signed In", { id: "succ" });
      distaptch(userPersistencyReducer(data.data.user));
      navigate("/");
    }
    if (isError)
      toast.error(error.data.error || errorMessage.current, { id: "err" });
  }, [
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    error,
    data,
    distaptch,
    navigate,
  ]);

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
              <form
                onSubmit={handleSubmit(handleSignUp)}
                className="flex flex-col gap-1"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Riyad Hossain"
                    className="input rounded-md input-bordered"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="text-error text-xs text-left mt-1">
                      Full Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="riyadhossain@gmail.com"
                    className="input rounded-md input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-error text-xs text-left mt-1">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="01703790978"
                    className="input rounded-md input-bordered"
                    {...register("contactNumber", {
                      required: true,
                      maxLength: 11,
                      minLength: 11,
                    })}
                  />
                  {errors.phone && (
                    <span className="text-error text-xs text-left mt-1">
                      Valid Bangladeshi number is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input rounded-md input-bordered"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-error text-xs text-left mt-1">
                      Password is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input rounded-md input-bordered"
                    {...register("confirmPassword", { required: true })}
                  />
                </div>

                <div className="form-control mt-6 flex flex-col gap-3">
                  <button type="submit" disabled={disabled} className="btn">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <div className="form-control">
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
                      Already have an account?{" "}
                      <Link className=" link link-hover link-info" to="/signin">
                        Sign In
                      </Link>
                    </span>
                  </label>
                </div> */
