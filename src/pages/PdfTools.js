import React from "react";
import pdfIcon from './../assets/pdf.png';
import excelIcon from './../assets/excel.png';
import imageIcon from './../assets/image.png';
import pptIcon from './../assets/ppt.png';
import wordIcon from './../assets/word.png';
import { Link } from "react-router-dom";
// import htmlIcon from './../assets/html.png';
// import xmlIcon from './../assets/xml.png';

const PDFTools = () => {

  const cards = [
    {
      title: 'Merge PDF',
      descripion: 'Combine multiple PDF\'s into one unified documents ',
      from: pdfIcon,
      to: pdfIcon,
      link: 'merge-pdf'
    },
    {
      title: 'Word to PDF',
      descripion: 'Convert Word document to PDF Files',
      from: wordIcon,
      to: pdfIcon,
      link: 'word-to-pdf'
    },
    {
      title: 'PPT to PDF',
      descripion: 'Convert PowerPoint presentation to PDF documents',
      from: pptIcon,
      to: pdfIcon,
      link: 'ppt-to-pdf'
    },
    {
      title: 'Excel to PDF',
      descripion: 'Convert Excek spreadsheets to PDF documents',
      from: excelIcon,
      to: pdfIcon,
      link: 'excel-to-pdf'
    },
    {
      title: 'Image to PDF',
      descripion: 'Transform JPG, PNG, GIF, and BMP to PDF',
      from: imageIcon,
      to: pdfIcon,
      link: 'image-to-pdf'
    },
  ]

  return (
    <div>
      <div className="my-10 flex items-center flex-col">
        <h1 className="text-5xl font-extrabold tracking-wide">All Clusterpdf Tools</h1>
        <p className="max-w-3xl text-2xl my-4 font-medium text-center">Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.</p>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-4">
          {
            cards.map(card => {
              return (
                <Link to={card.link}>
                  <div className="p-4 border rounded flex">
                    <img src={card.from} />
                    <div>
                      <h3>{card.title}</h3>
                      <p> {card.descripion} </p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>

      {/* <ul>
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
      </ul> */}
    </div>
  );
};

export default PDFTools;
