import React from 'react'
import ScannigFile from '../../assets/scanning.gif'; 
import UploadingFile from '../../assets/uploading.gif';

const UploadLoading = ({stage = 'uploading'}) => {
    return (
    <div className="text-xl text-white">
        {
            stage === 'uploading'?
            <div className=" flex flex-col items-center">
                 <div className="p-2 rounded bg-white">
                    <img className="h-28 w-full rounded my-4 " src={UploadingFile} alt="Processing your file logo"/>
                 </div>
                <p className="mt-4 text-2xl font-semibold "> Uploading </p>
            </div> :
            <div className=" flex flex-col items-center">
                 <div className="p-2 rounded bg-white">
                    <img className="h-28 w-full rounded my-4 " src={ScannigFile} alt="Processing your file logo"/>
                 </div>
                 <p className="mt-4 text-2xl font-semibold "> Converting </p>
            </div>
        }
       
    </div>
    )
}

export default UploadLoading
