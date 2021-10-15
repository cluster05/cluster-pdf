import React from "react";
import AnalyticsCard from "./AnalyticsCard";

const Opration = ({ opration }) => {
  return (
    <React.Fragment>
      <h1 className="m-4 font-black text-6xl">Opration</h1>
      <div className="flex items-center flex-wrap">
        {opration.map((ele) => {
          return (
            <AnalyticsCard
              key={ele.opration}
              title={ele.opration}
              count={ele.count}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Opration;
