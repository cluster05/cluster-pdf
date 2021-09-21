import React , { useState } from 'react'
import { useParams } from 'react-router'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './ViewPdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

const ViewPdf = () => {


    const { pdfId } = useParams();
    
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
      <div className="">
         
        <div className=" flex justify-center h-full ">
          <Document
            className=" max-w-sm md:max-w-md lg:max-w-6xl flex flex-wrap justify-center"
            file={`http://localhost:8080/document/${pdfId}`}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                  className="border-2 m-5 rounded shadow-xl"
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  />
                  ),
                  )
                }
          </Document>
        </div>
        <div className=""> Hello </div>
       
      </div>

    )
}

export default ViewPdf
