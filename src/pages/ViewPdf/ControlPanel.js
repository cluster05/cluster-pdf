import React from 'react';
import PDFPrinter from './PDFPrinter.js';
import { FaDownload, FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import './ControlPanel.css';

const ControlPanel = (props) => {
  const { file, scale, setScale } = props;

  
  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className=" m-3 px-5 py-4 text-black bg-gray-100 rounded w-auto flex items-center justify-between">
      <div className="flex justify-between items-center">
        <span
            onClick={zoomOut}
            className="icon"
        >
          <FaSearchMinus/>
        </span>
        <span>{(scale * 100).toFixed()}%</span>
        <span
            onClick={zoomIn}
            className="icon"
        >
          <FaSearchPlus/>
        </span>
        
      </div>
      <div className="icon ">
        <a href={file} download={true} title="download" target="_blank" rel="noreferrer">
          <FaDownload/>
        </a>
      </div>
      <div className="icon ">
        <PDFPrinter file={file}/>
      </div>
    </div>
  );
};

export default ControlPanel;
