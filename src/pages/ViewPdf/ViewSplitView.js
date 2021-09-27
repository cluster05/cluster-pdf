import React , { useState } from 'react'
import FailedTOLoad from './FailedTOLoad';
import Loader from './LoadingPDF';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import { useHistory } from 'react-router';
import { VscLoading } from 'react-icons/vsc';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewSplitView = ({downloadUrl}) => {

    const history =  useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [checkBoxes, setCheckBoxes] = useState([]);

    const [isProcessingStart, setIsProcessingStart] = useState(false);

    const onDocumentLoadSuccess =({ numPages }) => {
        setIsLoading(false);
        setCheckBoxes(new Array(numPages).fill(false));
    }
  
    const onDocumentLoadError =() => {
    setIsLoading(false);
    }

    const changeHandler =(position) => {
       const updatedCheckedState = checkBoxes.map((item, index) =>
            index === position ? !item : item
        );
       setCheckBoxes(updatedCheckedState);
    }

    const processSplitPdf = async () =>{

        const pages = [];
        checkBoxes.forEach((ele,index)=>{
            if(ele){
                pages.push(index+1);
            }
        });

        if(pages.length === 0 ){
            alert('Please select pages');
            return;
        }
        setIsProcessingStart(true);
        try {
            const response = await axios.post(
                `${process.env.BACKEND_BASE_URL}/document/split`,
               {
                   url : downloadUrl,
                   pages
               }
            );
            
            history.push(`/view-pdf?filename=${response.data.key}`);
             
        } catch (error) {
            isProcessingStart(false);
            alert(error.response.data.message)
        }
    }

    return (
        <div className="flex flex-col items-center ">
              {
                isProcessingStart ? 
        
                    <button  className="px-5 py-2 rounded shadow text-xl font-semibold text-white bg-blue-400 hover:bg-blue-300 flex items-center">
                        <VscLoading className=" animate-spin"/> 
                        <span className="ml-3">Processing</span>
                    </button>:
                    <button onClick={processSplitPdf} className="px-5 py-2 rounded shadow text-xl font-semibold text-white bg-blue-400 hover:bg-blue-300 flex items-center">
                        Start spliting
                    </button>
            }
          <div className="mt-10">
            <Loader isLoading={isLoading} />
            <section
              id="pdf-section"
              className="flex flex-col items-center w-100"
            > 
              <Document
                file={downloadUrl}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                error={<FailedTOLoad backUrl={'/split-pdf'}/>}
              >
                {

                checkBoxes.map((checkbox,index)=>{
                    return(
                            <div key={`page_${index + 1}`} className="relative">
                                <input 
                                    type="checkbox" 
                                    checked={checkbox}  
                                    value={index}
                                    className="absolute top-1 left-1 z-40 w-8 h-8"
                                    onChange={()=>changeHandler(index)}
                                />
                                <Page
                                scale={0.5}
                                className="relative border shadow-md w-full h-full"
                                pageNumber={index + 1}
                                />
                            </div>
                        )})
                }
              </Document>
            </section>
          </div>
         
      </div>
  
      )
}

export default ViewSplitView
