import React from "react";
import AnalyticsCard from "./AnalyticsCard";

const Opration = ({ opration }) => {
  return (
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
  );
};

export default Opration;
