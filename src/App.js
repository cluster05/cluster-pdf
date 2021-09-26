import React from "react";
import Router from "./Router";
import Navbar from "./utils/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Router/>
    </React.Fragment>
  );
}

export default App;
