import React from "react";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import { useGetPackagesQuery } from "../../features/package/packageAPI";
import PackageCard from "../../components/PackageCard";
import Loading from "../../components/Loading";

export default function Menu() {
  const { data, isFetching } = useGetPackagesQuery();
  if (isFetching) return <Loading />;

  return (
    <div className="pb-10">
      <PageBanner bg_img={bg_img} title="Menu" />
      <div className="pt-16">
        <div className="bg-slate-600 text-slate-50 w-10/12 mx-auto h-14 mb-12 flex items-center justify-between px-4 rounded-md font-bold">
          <h3 className="text-xl">Total Packages</h3>
          <span className="btn btn-circle btn-sm bg-slate-800 text-slate-50">{data.data.length}</span>
        </div>
        <div className="flex justify-center flex-wrap gap-8 px-4 md:px-8 lg:px-24">
          {data.data.map((item, i) => (
            <PackageCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
