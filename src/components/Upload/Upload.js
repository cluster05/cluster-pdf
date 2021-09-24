import React, { useState } from 'react'
import UplaodFile from './UploadFile';
import UploadLoading from './UploadLoading';
import axios from 'axios';
import { useHistory } from 'react-router';

const Upload = ({ title, subtitle, color, fileType,APIRequestBody }) => {

    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [uplaodigStage, setUplaodigStage] = useState('uploading');

    const fileChangeHandler = async (event) => {
        const file =await event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        setLoading(true);
        setUplaodigStage('uploading')

        try {
            let response = await axios.post(
                'http://localhost:8080/document/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
           
            setUplaodigStage('processing')
            let url = response.data.url;

            response = await axios.post(
                'http://localhost:8080/document/convert',
                {
                    ...APIRequestBody,
                    url
                }
            );
            
            setLoading(false);
            setUplaodigStage('uploading')
            url = response.data.url.split('/');
            const pdfId = url[url.length - 1];
            const splitSlash = history.location.pathname.split('/')
            const currentRoute = splitSlash[splitSlash.length-1] ;
            history.push(`/view-pdf?filename=${pdfId}&opration=${currentRoute}`);
          
            
        } catch (error) {
            setLoading(false);
            setUplaodigStage('uploading')
            alert(error.response.data.message)
        }

    }

    const classes = `min-w-max max-w-5xl w-full rounded border-${color}-400 bg-${color}-500 `;

    return (
        <div>
            <div className="my-10 flex items-center flex-col">
                <h1 className="text-4xl tracking-wide">{title}</h1>
                <p className="max-w-3xl  text-2xl my-4 tracking-wide font-light text-center">{subtitle}</p>
            </div>
            <div className="mt-28 px-2  flex items-center justify-center" >
                <div className={classes} style={{ borderWidth: '16px' }}>
                    <div className="flex items-center py-16 flex-col border-4 border-gray-600 rounded-md border-dashed">
                       
                       {
                           loading ? 
                           <UploadLoading stage={uplaodigStage}/> :
                           <UplaodFile fileChangeHandler={fileChangeHandler} fileType={fileType} />
                    
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
