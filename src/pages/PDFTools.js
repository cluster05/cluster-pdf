import React from "react";
import { Link } from "react-router-dom";

const PDFTools = () => {
  return (
    <div>
      <ul>
        <li className="mx-10 my-1 px-10 py-5 border cursor-pointer">
          <Link to="merge-pdf"> merge pdf </Link>
        </li>
        <li className="mx-10 my-1 px-10 py-5 border cursor-pointer">
          <Link to="word-to-pdf"> word to pdf </Link>
        </li>
        <li className="mx-10 my-1 px-10 py-5 border cursor-pointer">
          <Link to="ppt-to-pdf"> ppt to pdf </Link>
        </li>
        <li className="mx-10 my-1 px-10 py-5 border cursor-pointer">
          <Link to="excel-to-pdf"> excel to pdf </Link>
        </li>
      </ul>
    </div>
  );
};

export default PDFTools;
