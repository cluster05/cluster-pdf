import React , { useState } from 'react'
import { useLocation} from 'react-router'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './ViewPdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

const ViewPdf = () => {


    const useQuery=() =>{
      return new URLSearchParams(useLocation().search);
    }

    const query = useQuery()
    
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }


    return (
      <div className="">
        <div className="flex justify-center">
          <Document
            file={`http://localhost:8080/document/${query.get('filename')}`}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                  className="border shadow-lg"
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  />
                  ),
                  )
                }
          </Document>
        </div>
        {/* <div className="col-span-2"> 
              <div className="bg-gray-100 h-full ">
                <div className="px-5 py-10">
                <h2 className="text-5xl font-bold"> ClusterPdf </h2>
                <p className="text-gray-800 font-medium text-xl my-2"> Conveted Word Document into PDF </p>
               
                <div className="border border-gray-800 mb-10"></div>
                <div className="flex items-center">
                  <p className="my-3 text-2xl"> pdf name goes here.pdf </p>
                  <button className="ml-5 px-2 py-1 capitalize rounded bg-green-500 text-white">change name</button>
                </div>
                  <div className="mt-10"></div>
                  <a  
                    className="px-8 py-3 text-2xl font-bold capitalize rounded bg-blue-600 text-white" 
                    download="filename"
                    href={`http://localhost:8080/document/${query.get('filename')}`}> download PDF </a>
                </div>
              </div>

         </div> */}
       
      </div>

    )
}

export default ViewPdf
