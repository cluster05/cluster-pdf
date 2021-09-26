import React from 'react';
import { FaPrint } from 'react-icons/fa';

const PDFPrinter = ({ file }) => {

  const print = () => {
    const pdfFrame = document.createElement('iframe');
    pdfFrame.style.visibility = 'hidden';
    pdfFrame.src = file;

    document.body.appendChild(pdfFrame);

    pdfFrame.contentWindow.focus();
    pdfFrame.contentWindow.print();
  };
  return (
      <FaPrint onClick={print} title={"download"}/>          
  );
};

export default PDFPrinter;
