import React from "react";
// import { useNavigate } from "react-router-dom";
import PageBanner from "../../components/PageBanner";
import bg_img from "../../assets/images/hero-image-2.jpg";
import WishlistCard from "./WishlistCard";
import { useGetWishlistsQuery } from "../../features/wishlist/wishlistAPI";
import { getToken } from "../../utils/token";
import Loading from "../../components/Loading";

export default function WishList() {
  const token = getToken();
  const { data, isFetching } = useGetWishlistsQuery(token);
  if (isFetching) return <Loading />;

  return (
    <div className="pb-10">
      <PageBanner title="WishList" bg_img={bg_img} />
      <div className="flex items-center gap-8 my-12 justify-center flex-wrap px-5">
        {data.wishLists.map((item) => (
          <WishlistCard item={item} />
        ))}
      </div>
    </div>
  );
}
