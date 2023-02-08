import React from "react";
import Loading from "../../components/Loading";
import { useGetItemsQuery } from "../../features/item/itemAPI";
import SelectedItem from "./SelectedItem";

export default function ItemModal({
  totalPrice,
  setTotalPrice,
  selItems,
  setSelItems,
}) {
  const { data, isFetching } = useGetItemsQuery();
  if (isFetching) return <Loading />;

  let items = data.data.filter((item) => item.status === "active");

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);
    value = { ...value, totalPrice: value.price };
    if (checked) {
      selItems = [...selItems, value];
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

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-3xl">
          <div className=" flex items-center justify-between">
            <p>
              <span className="font-semibold text-lg">Total Price:</span> $
              {totalPrice}
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
            <p className="font-semibold mb-2 mt-10">Select More Items -</p>
            {/* ------------------ Table ------------------ */}
            <div className="overflow-x-auto w-full rounded-t-lg">
              <table className="table w-full border">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {unselectedItems.map((item) => (
                    <tr key={item._id}>
                      <th>
                        <label onClick={(e) => handleCheck(e)}>
                          <input
                            value={JSON.stringify({ ...item, qty: 1 })}
                            type="checkbox"
                            className="checkbox checkbox-sm"
                          />
                        </label>
                      </th>
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
                            <div className="font-bold">{item.name}</div>
                            <div className="badge badge-sm">
                              {item.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
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
