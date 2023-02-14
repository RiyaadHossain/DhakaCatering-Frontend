import React from "react";
import { useState } from "react";
import Loading from "../../components/Loading";
import { useGetItemsQuery } from "../../features/item/itemAPI";
import SelectedItem from "./SelectedItem";

export default function ItemModal({
  totalPrice,
  setTotalPrice,
  selItems,
  setSelItems,
}) {
  const [category, setCategory] = useState("");
  const { data, isFetching } = useGetItemsQuery();
  if (isFetching) return <Loading />;

  let items = data.data.filter((item) => item.status === "active");

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);
    value.gotDiscount =
      value.discountedPrice && value.price - value.discountedPrice;
    value.price = value.discountedPrice ? value.discountedPrice : value.price;
    value = { ...value, totalPrice: value.price };
    if (checked) {
      selItems = [...selItems, { ...value }];
      setSelItems(selItems);
    } else {
      selItems = selItems.filter((item) => item._id !== value._id);
      setSelItems(selItems);
    }

    totalPrice = 0;
    selItems.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    setTotalPrice(totalPrice);
  };

  const resetItems = () => {
    setSelItems([]);
    setTotalPrice(0);
  };

  const itemsId = selItems.map((item) => item._id);
  const unselectedItems = items.filter((item) => !itemsId.includes(item._id));
  let filteredItems = unselectedItems;
  if (category) {
    filteredItems = unselectedItems.filter(
      (item) => item.category === category
    );
  }
  if (category === "All" || category === "default") {
    filteredItems = unselectedItems;
  }

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box px-2 md:px-7 max-w-3xl">
          <div className=" flex items-center justify-between">
            <p>
              <span className="font-semibold text-lg">Total Price: </span>
              {totalPrice} ৳
            </p>
            <p className="btn btn-sm">{selItems.length}</p>
          </div>
          <div className="modal-action mt-10">
            <label
              onClick={resetItems}
              htmlFor="my-modal"
              className="btn rounded-md btn-sm btn-error"
            >
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn rounded-md btn-sm btn-success"
            >
              Confirm!
            </label>
          </div>
          <div className="py-4">
            <p className="font-semibold mb-2 mt-6">Selected Items -</p>
            <SelectedItem
              selItems={selItems}
              setSelItems={setSelItems}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
            <div className="flex flex-wrap items-center justify-between mt-10 mb-3">
              <p className="font-semibold mb-1">Select More Items -</p>
              <select
                defaultValue="default"
                onClick={(e) => setCategory(e.target.value)}
                className="select w-full md:max-w-[250px] rounded-md bg-slate-200 input-bordered "
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="All">All</option>
              </select>
            </div>
            {/* ------------------ Table ------------------ */}
            {/* <p className="text-info text-sm">*Swipe Left to view full Table</p> */}
            <div className="overflow-x-auto w-full rounded-t-lg">
              <table className="table w-full border">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  {filteredItems.length ? (
                    filteredItems.map((item) => (
                      <tr key={item._id}>
                        <label
                          className="flex justify-between"
                          onClick={(e) => handleCheck(e)}
                        >
                          <input
                            value={JSON.stringify({ ...item, qty: 1 })}
                            type="checkbox"
                            className="checkbox hidden"
                          />
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={item.image.url}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">
                                  {item.name}
                                  {item.discountedPrice ? (
                                    <span className="text-sm font-normal ml-2 bg-emerald-300 rounded-md px-2">
                                      {item.price - item.discountedPrice} tk Off
                                    </span>
                                  ) : null}
                                </div>
                                <div className="badge badge-sm">
                                  {item.category}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span
                              className={`${
                                item.discountedPrice && "text-xs line-through"
                              } `}
                            >
                              {item.price}
                            </span>
                            {item.discountedPrice && (
                              <>
                                <br /> {item.discountedPrice}
                              </>
                            )}
                          </td>
                        </label>
                      </tr>
                    ))
                  ) : (
                    <span className="text-center my-4 block">
                      No Item with {category} category
                    </span>
                  )}
                </tbody>
              </table>
            </div>
            {/* ------------------ Table ^ ------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
}
