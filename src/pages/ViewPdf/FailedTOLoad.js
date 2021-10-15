import React from "react";
import { useHistory } from "react-router";

const FailedTOLoad = () => {
  const history = useHistory();

  const redirectTo = () => {
    history.push(`/`);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h2 className="text-2xl md:text-4xl font-bold">
        Error occured while fetching file...
      </h2>
      <button
        onClick={redirectTo}
        className=" mt-10 px-8 py-2 text-2xl rounded font-semibold border"
      >
        Try again
      </button>
    </div>
  );
};

export default FailedTOLoad;
