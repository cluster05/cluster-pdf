import axios from 'axios';
import React, { useState } from 'react'
import { VscFile } from "react-icons/vsc";

const UploadFile = ({ fileType }) => {

    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);

    const onFileChange = async (event) => {
        setLoading(true)
        if (!event.target.files[0]) {
            console.log('file not found');
            return
        }
        setFile(event.target.files[0]);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const responseUplaod = await axios.post(
                'http://localhost:8080/document',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            const url = responseUplaod.data.url;

            const responseConvert = await axios.post('http://localhost:8080/document/convert', {
                from: 'office',
                to: 'pdf',
                url
            })
            const convertedUrl = responseConvert.data.url;

            setLoading(false);
            alert("suceessfully conveted")
        } catch (error) {
            setLoading(false)
            setFile('')
            console.log(error);
        }
    }


    return (
        <div className="flex flex-col items-center">
            {loading ? "loading..." : ''}
            <label for="file" className="px-8 py-4 rounded  bg-gray-50 cursor-pointer  flex items-center">
                <input type="file" id="file" name="file" accept={fileType} className="hidden" onChange={onFileChange} />
                <span className="m-1 text-2xl text-gray-600"> <VscFile /> </span>
                <span className="ml-2 font-semibold tracking-wide text-sm uppercase">
                    Choose  File from here
                </span>
            </label>
        </div>
    )
}

export default UploadFile
