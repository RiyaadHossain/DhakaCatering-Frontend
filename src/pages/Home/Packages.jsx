import React from "react";
import Loading from "../../components/Loading";
import PackageCard from "../../components/PackageCard";
import { useGetPackagesQuery } from "../../features/package/packageAPI";

export default function Packages() {
  //   const navigate = useNavigate();
  const { data, isFetching, /* isError */ } = useGetPackagesQuery();

  if (isFetching) return <Loading />;

  const packages = data.data.filter((item) => item.status === "active");

  return (
    <div className="py-20">
      <h2 className="section-title">Standard Packages</h2>
      <div className="flex justify-center flex-wrap gap-8 px-4">
        {packages.map((item) => (
          <PackageCard item={item} />
        ))}
      </div>
      {/* <div className="text-center mt-10">
        <button onClick={() => navigate("menu")} className="btn btn-wide">
          See Details
        </button>
      </div> */}
    </div>
  );
}
