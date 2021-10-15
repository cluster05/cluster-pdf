import React from "react";
import { useHistory } from "react-router";
import PageNotFoundImage from "../assets/pagenotfound.gif";

const PageUnderProcess = () => {
  const history = useHistory();

  const takeMeHome = () => {
    history.replace("/");
  };

  return (
    <React.Fragment>
      <div className="my-10 flex items-center flex-col">
        <h1 className="text-5xl font-medium tracking-wide">
          This Page is Under Process
        </h1>
      </div>
      <div className="mt-28 px-2  flex items-center justify-center">
        <div
          className="min-w-max max-w-5xl w-full rounded border-red-400 bg-red-500"
          style={{ borderWidth: "16px" }}
        >
          <div className="flex items-center py-16 flex-col border-4 border-gray-600 rounded-md border-dashed">
            <div className="text-xl text-white">
              <div className=" flex flex-col items-center">
                <div className="p-2 rounded bg-white">
                  <img
                    className="h-28 w-full rounded my-4 "
                    src={PageNotFoundImage}
                    alt="Processing your file logo"
                  />
                </div>
                <div
                  onClick={takeMeHome}
                  className="mt-5  px-3 py-2 rounded cursor-pointer capitalize shadow font-semibold text-white bg-red-400 hover:bg-red-300 flex items-center"
                >
                  Take me to Home Page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageUnderProcess;
