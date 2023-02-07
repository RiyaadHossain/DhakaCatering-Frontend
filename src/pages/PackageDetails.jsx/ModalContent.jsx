import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserSignUpMutation } from "../../features/auth/authAPI";
import { storeToken } from "../../utils/token";

export default function ModalContent({ handleOrder, token, id }) {
  const navigate = useNavigate();
  const imgStorage_key = "b20e07a3b33d3ccbb413087c3d9d148d";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signup, { isLoading, isError, isSuccess, error, data }] =
    useUserSignUpMutation();

  const signinHandle = async (userData) => {
    const imageData = userData?.image[0];
    const formData = new FormData();
    formData.append("image", imageData);
    const URL = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
    const { data } = await axios.post(URL, formData);
    if (data.success) {
      userData = {
        ...userData,
        role: "User",
        imageUrl: data.data.url,
      };

      signup(userData);
    } else {
      toast.error("Something went wrong");
    }
    reset();
  };

  useEffect(() => {
    if (isLoading)
      toast.loading("Signing Up...", { id: "loading", duration: 800 });

    if (isSuccess) {
      storeToken(data.data.token);
      toast.success("Signed In", { id: "succ" });
      navigate(`/package/${id}`);
    }

    if (isError) toast.error(error.data.error, { id: "err" });
  }, [isLoading, isSuccess, isError, error, navigate, id, data]);

  return (
    <div>
      {token ? (
        <>
          <h3 className="font-bold text-xl text-center">
            To Confirm the Order
          </h3>
          <p className="py-4">
            Please contact with the following numbers:
            <br />
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold">GP:</span> 01703790978
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold">BL:</span> 01703790978
            </div>
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-order"
              className="btn rounded-md btn-error btn-sm"
            >
              Cancel
            </label>
            <label
              htmlFor="my-modal-order"
              onClick={handleOrder}
              className="btn rounded-md btn-success btn-sm"
            >
              Order
            </label>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center font-semibold text-2xl mb-3">
            Please Let us Know You
          </h3>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(signinHandle)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Riyad Hossain"
                    className="input rounded-md input-bordered"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="text-error text-xs text-left mt-1">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="file"
                    className="file-input rounded-md input-bordered"
                    {...register("image", { required: true })}
                  />
                  {errors.image && (
                    <span className="text-error text-xs text-left mt-1">
                      Image is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="riyadhossain.dev@gmail.com"
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
                    {...register("contactNumber", { required: true })}
                  />
                  {errors.contactNumber && (
                    <span className="text-error text-xs text-left mt-1">
                      Phone Number is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
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
                      For Exclusive Offers{" "}
                      <span className=" link  link-info">Sign Up</span>
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6 flex flex-col gap-3">
                  <button type="submit" className="btn">
                    Sign Up
                  </button>
                  {/* <button className="btn">Continue With Google</button> */}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
