import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PackageCard from "../../components/PackageCard";
import { useGetPackagesQuery } from "../../features/package/packageAPI";

export default function Packages() {
  const navigate = useNavigate();
  const { data, isFetching /* isError */ } = useGetPackagesQuery();

  if (isFetching) return <Loading />;

  const packages = data?.data?.filter((item) => item.status === "active");

  const reload = () => window.location.reload();

  return (
    <div className="py-16">
      {packages?.length ? (
        <>
          <h2 className="section-title">Standard Packages</h2>
          <div className="flex justify-center flex-wrap gap-8 px-4">
            {packages.slice(0, 3).map((item) => (
              <PackageCard key={item._id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate("/menu")} className="btn btn-wide">
              See More
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-2xl font-semibold flex items-center gap-4 flex-col">
          Due to Internal Server Error Packages can't be visible now
          <button onClick={reload} className="btn btn-wide mx-auto">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
