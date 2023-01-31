import React from "react";
import Loading from "../../components/Loading";
import PackageCard from "../../components/PackageCard";
import { useGetPackagesQuery } from "../../features/package/packageAPI";

export default function SuggestedPackage({ foodId }) {
  const { data, isFetching } = useGetPackagesQuery();

  if (isFetching) return <Loading />;

  const packages = data.data.slice(0, 6).filter((item) => item._id !== foodId);

  return (
    <>
      {packages.length ? (
        <div className="mt-14">
          <h3 className="font-semibold text-2xl sm:border-l-[5px] border-l-0 text-center sm:text-left border-l-sky-600 pl-2">
            You Might Also Like
          </h3>
          <div className="mt-9 flex justify-center flex-wrap gap-8">
            {packages.map((item) => (
              <PackageCard item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
