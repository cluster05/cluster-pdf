import React, { useState } from "react";
import Error from "../../components/Analytics/Error";
import Opration from "../../components/Analytics/Opration";
import Year from "../../components/Analytics/Year";
import { analyticsInstance } from "../../instance";

const Analytics = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [analyticsData, setAnalyticsData] = useState({});
  const [view, setView] = useState(false);

  const getAnalyticsData = async () => {
    if (username.length < 5 && password.length < 5) {
      alert("invalid username and & passowrd");
      return;
    }
    try {
      const response = await analyticsInstance.post("/", {
        username,
        password,
      });
      setAnalyticsData(response.data);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="mb-4 mx-10 flex justify-between items-center">
        <div
          onClick={() => setView(!view)}
          className="px-3 py-2 rounded cursor-pointer capitalize shadow font-semibold text-white bg-blue-400 hover:bg-blue-500 flex items-center"
        >
          View {view ? "opration " : "year"} distribution
        </div>
        <div className="flex items-center">
          <input
            className="m-2 p-2  rounded border "
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            value={username}
          />
          <input
            className="m-2 p-2  rounded border "
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
          <button
            onClick={getAnalyticsData}
            className="px-3 py-2 rounded capitalize shadow font-semibold text-white bg-red-400 hover:bg-red-500 flex items-center"
          >
            <span>analytics</span>
          </button>
        </div>
      </div>
      <hr />
      {analyticsData.opration ? (
        <div>
          {view ? (
            <Year data={analyticsData} />
          ) : (
            <div>
              <Opration opration={analyticsData.opration} />
              <Error error={analyticsData.failed} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Analytics;
