import React from 'react'
import ScannigFile from '../../assets/scanning.gif'; 
import UploadingFile from '../../assets/uploading.gif';

const UploadLoading = ({stage = 'uploading'}) => {
    return (
    <div className="text-xl text-white">
        {
            stage === 'uploading'?
            <div className=" flex flex-col items-center">
                <img className="h-28 rounded my-4 " src={UploadingFile} alt="Processing your file logo"/>
                <p className="mt-4 text-2xl font-semibold "> Uploading file ... </p>
            </div> :
            <div className=" flex flex-col items-center">
                 <img className="h-28 rounded my-4 " src={ScannigFile} alt="Processing your file logo"/>
                 <p className="mt-4 text-2xl font-semibold "> Processing your file please wait... </p>
            </div>
        }
       
    </div>
    )
}

export default UploadLoading
