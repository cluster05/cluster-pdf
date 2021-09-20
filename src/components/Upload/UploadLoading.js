import React from 'react'
import ScannigFile from '../../assets/scanning.gif'; 

const UploadLoading = () => {
    return (
    <div className="text-xl text-white  flex flex-col items-center">
        <img className="h-28 rounded my-4 " src={ScannigFile} alt="Processing your file logo"/>
        <p className="mt-4 text-2xl font-semibold "> Processing your file please wait... </p>
    </div>
    )
}

export default UploadLoading
