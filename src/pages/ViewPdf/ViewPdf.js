import React , { useState } from 'react'
import { useLocation} from 'react-router'
import FailedTOLoad from './FailedTOLoad';
import Loader from './LoadingPDF';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const ViewPdf = () => {

    const useQuery=() =>{
      return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const filename = query.get('filename');
    const backUrl = query.get('opration');
    const downloadUrl = `http://localhost:8080/document/${filename}`;

    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pdfLoadingError, setPdfLoadingError] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setIsLoading(false);
    }

    function onDocumentLoadError(error){
      setIsLoading(false);
      setPdfLoadingError(true);
    }

    return (
      <div>
        <div>
          <Loader isLoading={isLoading} />
          <section
            id="pdf-section"
            className="flex flex-col items-center w-100"
          > 
          {
            pdfLoadingError ? null :
            <ControlPanel
            scale={scale}
            setScale={setScale}
            file={downloadUrl}
            />
          }
            <Document
              file={downloadUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              error={<FailedTOLoad backUrl={backUrl}/>}
            >
              {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                  className="border shadow-md my-5"
                  scale={scale} 
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  />
                  ),
                  )
              }
            </Document>
          </section>
        </div>
       
    </div>

    )
}

export default ViewPdf
