import React, { useState } from 'react'
import { VscFile } from "react-icons/vsc";

const UploadFile = ({ fileType }) => {

    const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }


    return (
        <div className="flex flex-col items-center">
            <label for="file" className="px-8 py-4 rounded  bg-gray-50 cursor-pointer  flex items-center">
                <input type="file" id="file" name="file" accept={fileType} className="hidden" onChange={onFileChange} />
                <span className="m-1 text-2xl text-gray-600"> <VscFile /> </span>
                <span className="ml-2 font-semibold tracking-wide text-sm uppercase">
                    Choose  File from here
                </span>
            </label>
            {/* <p className="mt-4 font-medium text-white">or drop file here</p> */}
        </div>
    )
}

export default UploadFile
