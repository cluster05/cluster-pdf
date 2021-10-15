import React, { useState } from "react";
import Opration from "../../components/Analytics/Opration";
import Year from "../../components/Analytics/Year";
import { analyticsInstance } from "../../instance";

const Analytics = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [analyticsData, setAnalyticsData] = useState({});
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
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="mb-4 mr-10 flex justify-end items-center">
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
          className="px-3 py-2 rounded capitalize shadow font-semibold text-white bg-red-400 hover:bg-red-300 flex items-center"
        >
          <span>analytics</span>
        </button>
      </div>
      <hr />
      {analyticsData.opration ? (
        <div>
          <h1 className="m-4 font-black text-6xl">Opration</h1>

          <Opration opration={analyticsData.opration} />
          <Year data={analyticsData} />
        </div>
      ) : null}
    </div>
  );
};

export default Analytics;
