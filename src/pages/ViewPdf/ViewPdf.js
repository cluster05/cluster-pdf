import React , { useState } from 'react'
import { useLocation} from 'react-router'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './ViewPdf.css';
import FailedTOLoad from './FailedTOLoad';
import LoadingPDF from './LoadingPDF';
import VPNavbar from './VPNavbar/VPNavbar';

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
    const filename = query.get('filename');
    const backUrl = query.get('opration');
    const downloadUrl = `http://localhost:8080/document/${filename}`;

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }


    return (
      <div>
        <VPNavbar opration={backUrl} downloadUrl={downloadUrl}/>
        <div className="flex justify-center">
          <Document
            file={downloadUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            error={<FailedTOLoad backUrl={backUrl}/>}
            loading={<LoadingPDF/>}
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
       
    </div>

    )
}

export default ViewPdf
