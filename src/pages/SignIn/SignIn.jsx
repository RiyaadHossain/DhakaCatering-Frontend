import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageBanner from "../../components/PageBanner";
import signup from "../../assets/images/signin.jpg";
import { useForm } from "react-hook-form";
import { useUserSignInMutation } from "../../features/auth/authAPI";
import { toast } from "react-hot-toast";
import { storeToken } from "../../utils/token";
import { userPersistencyReducer } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const navigate = useNavigate()
  const distaptch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signin, { data, isLoading, isSuccess, isError, error }] =
    useUserSignInMutation();

  const signinHandle = (useData) => {
    signin(useData);
    reset();
  };

  useEffect(() => {
    if (isLoading)
      toast.loading("Signing Up...", { id: "loading", duration: 800 });

    if (isSuccess) {
      storeToken(data.data.token);
      toast.success("Signed In", { id: "succ" });
      distaptch(userPersistencyReducer(data.data.user));
      navigate('/')
    }

    if (isError) toast.error(error.data.error, { id: "err" });
  }, [isLoading, isSuccess, isError, data, error, distaptch, navigate]);

  return (
    <>
      <PageBanner bg_img={signup} title="Sign In" />
      <div className="hero py-8 min-h-[80vh] bg-base-200">
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
              <form onSubmit={handleSubmit(signinHandle)}>
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
                  <button type="submit" className="btn">
                    Sign In
                  </button>
                  {/* <button className="btn">Continue With Google</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
