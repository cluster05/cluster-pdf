import React from "react";

const Error = ({ error }) => {
  const buildDate = (data) => {
    const d = new Date(data);
    return d.toString();
  };

  return (
    <div className="mb-20 mx-4">
      <h1 className="m-4 font-black text-6xl">Failed Opration</h1>
      {error.map((ele) => {
        return (
          <div
            key={ele.timestamp}
            className="w-full  p-5 rounded border flex flex-col"
          >
            <p className="text-sm flex justify-between">
              <span className="py-1 sm px-2 font-bold bg-blue-500 text-white rounded">
                {ele.opration}
              </span>
              <span className="text-base"> {buildDate(ele.timestamp)}</span>
            </p>
            <pre className="my-3">{JSON.stringify(ele.failedReason)} </pre>
          </div>
        );
      })}
    </div>
  );
};

export default Error;
