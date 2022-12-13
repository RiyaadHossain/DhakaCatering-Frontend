import React from "react";

export default function FAQBar({title, details}) {
  return (
    <div className="max-w-xl mx-auto mb-3">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {title}
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} {details}</p>
        </div>
      </div>
    </div>
  );
}
