import React from "react";
import AnalyticsCard from "./AnalyticsCard";

const Year = ({ data }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <h1 className="m-4 font-black text-6xl">Year</h1>
      <div className="flex items-center flex-wrap">
        {data.y.map((ele) => {
          return (
            <AnalyticsCard
              key={`year_${ele.year}`}
              title={`Year ${ele.year}`}
              count={ele.count}
            />
          );
        })}
      </div>
      <h1 className="m-4 font-black text-6xl">Month</h1>
      <div className="flex items-center flex-wrap">
        {data.m.map((ele) => {
          return (
            <AnalyticsCard
              key={`month_${ele.month}`}
              title={monthNames[ele.month - 1]}
              count={ele.count}
            />
          );
        })}
      </div>
      <h1 className="m-4 font-black text-6xl">Week</h1>
      <div className="flex items-center flex-wrap">
        {data.w.map((ele) => {
          return (
            <AnalyticsCard
              key={`week_${ele.week}`}
              title={ele.week}
              count={ele.count}
            />
          );
        })}
      </div>
      <h1 className="m-4 font-black text-6xl">Day</h1>
      <div className="flex items-center flex-wrap">
        {data.d.map((ele) => {
          return (
            <AnalyticsCard
              key={`day_${ele.day}`}
              title={ele.day}
              count={ele.count}
            />
          );
        })}
      </div>
      <h1 className="m-4 font-black text-6xl">Hours</h1>
      <div className="flex items-center flex-wrap">
        {data.h.map((ele) => {
          return (
            <AnalyticsCard
              key={`hour_${ele.hour}`}
              title={ele.hour}
              count={ele.count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Year;
