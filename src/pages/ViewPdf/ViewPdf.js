import React , { useState ,useEffect} from 'react'
import { useLocation} from 'react-router'
import FailedTOLoad from './FailedTOLoad';
import Loader from './LoadingPDF';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import { AWS_BUCKET_URL } from "../../config";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const ViewPdf = () => {

    const useQuery=() =>{
      return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const filename = query.get('filename');
    const backUrl = query.get('opration');
    const downloadUrl = `${AWS_BUCKET_URL}/${filename}`;

    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pdfLoadingError, setPdfLoadingError] = useState(false);

    useEffect(() => {
      
      window.innerWidth < 500 ? setScale(0.5) : setScale(window.innerWidth / 800);
      
      if(scale >= 2){
        setScale(2);
      }

    }, [scale])

    const  onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setIsLoading(false);
    }

    const  onDocumentLoadError =  ()=>{
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
