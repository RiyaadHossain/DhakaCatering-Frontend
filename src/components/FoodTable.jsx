import React from "react";
import TableRow from "./TableRow";

export default function FoodTable({hidden}) {
  return (
    <div className={`overflow-x-auto w-full border rounded-t-xl ${hidden && "md:hidden"}`}>
      <table className="table w-full">
        {/* <!-- Head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {/* <!-- Body --> */}
        <tbody>
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
