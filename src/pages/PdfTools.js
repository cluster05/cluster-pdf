import React from "react";
import Cards from "../components/Cards/Cards";


const PDFTools = () => {


  return (
    <div>
      <div className="my-10 flex items-center flex-col">
        <h1 className="text-6xl font-extrabold tracking-wide">All Clusterpdf Tools</h1>
        <p className="max-w-3xl  text-2xl my-8 tracking-wide font-medium text-center">Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.</p>
      </div>
      <Cards />
    </div>
  );
};

export default PDFTools;
