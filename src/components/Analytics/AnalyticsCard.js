import React from "react";

const AnalyticsCard = ({ title, count }) => {
  return (
    <div
      className="m-5 p-5 rounded border flex flex-col items-end"
      style={{ minWidth: "400px" }}
    >
      <p className="font-semibold text-xl"> {title} </p>
      <p className="m-4 font-black text-6xl"> {count} </p>
    </div>
  );
};

export default AnalyticsCard;
