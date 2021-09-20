import React from 'react'
import { VscFile } from "react-icons/vsc";

const UploadFile = ({ fileChangeHandler,fileType }) => {

    return (
        <div className="text-xl text-white  flex flex-col items-center">
            <span className="text-6xl my-4 text-gray-100">
                <VscFile />
            </span>
        <div className="flex flex-col items-center">
            <label for="file" className="px-8 py-4 rounded  bg-gray-50 cursor-pointer  flex items-center">
                <input type="file" id="file" name="file" accept={fileType} className="hidden" onChange={fileChangeHandler} />
                <span className="m-1 text-2xl text-gray-600"> <VscFile /> </span>
                <span className="ml-2 font-semibold tracking-wide text-sm uppercase text-black">
                    Choose  File from here
                </span>
            </label>
        </div>
        </div>
    )
}

export default UploadFile
