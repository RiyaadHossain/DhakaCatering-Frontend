
import React from "react";
import ModalContent from "../PackageDetails.jsx/ModalContent";

export default function SignUPModal({
  token,
  setOpenModal,
  createOrderRequest,
  orderRequestDataGlobal,
}) {
  
  return (
    <div>
      <input type="checkbox" id="my-modal-order" className="modal-toggle" />
      <div className="modal modal-open">
        <div className="modal-box border-2 border-gray-400">
          <button
            onClick={() => setOpenModal(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <ModalContent
            token={token}
            customOrderPage={true}
            setOpenModal={setOpenModal}
            createOrderRequest={createOrderRequest}
            orderRequestDataGlobal={orderRequestDataGlobal}
          />
        </div>
      </div>
    </div>
  );
}
