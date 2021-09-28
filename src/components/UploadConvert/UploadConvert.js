import React, { useState } from 'react'
import SelectFileUI from '../SelectFileUI';
import UploadLoading from '../UploadLoading';
import axios from 'axios';
import { useHistory } from 'react-router';
import { BACKEND_BASE_URL } from '../../config';

const UploadConvert = ({ componentMetadata , apiMetadeta }) => {

    const { title, subtitle, color, fileType} = componentMetadata;
    const { APIRequestBody } = apiMetadeta;

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [uplaodigStage, setUplaodigStage] = useState('uploading');

    const fileChangeHandler = async (event) => {
        
        const file = await event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        
        setLoading(true);
        setUplaodigStage('uploading')

        try {
            let response = await axios.post(
                `${BACKEND_BASE_URL}/upload`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
           
            setUplaodigStage('processing')
            
            let url = response.data.url;
            const urlSplited = url.split('.');
            const fromType = urlSplited[urlSplited.length-1];

            response = await axios.post(
                `${BACKEND_BASE_URL}/convert`,
                {
                    ...APIRequestBody,
                    fromType,
                    url
                }
            );
            
            setLoading(false);
            setUplaodigStage('uploading')
            
            if( history.location.pathname === '/pdf-to-image'){
                localStorage.setItem('images',JSON.stringify(response.data))
                history.push('/view-images');
                return
            }

            history.push(`/view-pdf?filename=${response.data.key}`);
                  
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
                           <SelectFileUI fileChangeHandler={fileChangeHandler} fileType={fileType} />
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadConvert
