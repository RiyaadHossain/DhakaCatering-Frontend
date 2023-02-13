import React from "react";

export default function SelectedItem({
  nobtn,
  selItems,
  setSelItems,
  setTotalPrice,
}) {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selItems.forEach((item) => {
      totalPrice += item.totalPrice;
    });
    setTotalPrice(totalPrice);
    return totalPrice;
  };

  const handleCheck = (e) => {
    let { checked, value } = e.target;
    value = JSON.parse(value);

    if (checked) {
      selItems = [...selItems, value];
      setSelItems(selItems);
    } else {
      selItems = selItems.filter((item) => item._id !== value._id);
      setSelItems(selItems);
    }

    calculateTotalPrice();
  };

  const increase = (id) => {
    const selectedItem = selItems.find((item) => item._id === id);
    const restItems = selItems.filter((item) => item._id !== id);
    selectedItem.qty = selectedItem.qty + 1;
    selectedItem.totalPrice = selectedItem.price * selectedItem.qty;
    setSelItems([...restItems, selectedItem]);

    calculateTotalPrice();
  };

  const decrease = (id) => {
    const selectedItem = selItems.find((item) => item._id === id);
    const restItems = selItems.filter((item) => item._id !== id);
    if (selectedItem.qty > 1) {
      selectedItem.qty = selectedItem.qty - 1;
    }
    selectedItem.totalPrice = selectedItem.price * selectedItem.qty;
    setSelItems([...restItems, selectedItem]);

    calculateTotalPrice();
  };

  selItems = selItems.sort((a, b) => {
    const id1 = a._id.replace(/[a-z]/gi, "");
    const id2 = b._id.replace(/[a-z]/gi, "");
    return id1 - id2;
  });

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full border rounded-t-lg">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            {!nobtn && <th></th>}
          </tr>
        </thead>
        <tbody>
          {/*  row  */}
          {selItems.map((item) => (
            <tr key={item._id}>
              <th>
                <label onClick={(e) => handleCheck(e)}>
                  <input
                    defaultChecked
                    value={JSON.stringify(item)}
                    type="checkbox"
                    className="checkbox checkbox-sm"
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{item.name}</div>{" "}
                    {item.discountedPrice && !nobtn ? (
                      <span className="text-sm font-normal ml-2 bg-emerald-300 rounded-md px-2">
                        {item.gotDiscount} tk Off
                      </span>
                    ) : null}
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={1}
                  className="max-w-[60px] rounded-md input input-sm input-bordered border-slate-400"
                />
              </td>
              {/* {item.qty} */}
              <td>
                {item.gotDiscount ? (
                  <>
                    <span className="line-through text-sm text-slate-500">
                      {item.totalPrice + item.gotDiscount * item.qty}
                    </span>
                    <br />
                  </>
                ) : null}
                {item.totalPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
