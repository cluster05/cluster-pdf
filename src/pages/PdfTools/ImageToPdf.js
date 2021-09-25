import React from 'react'
import Upload from '../../components/Upload/Upload';

const ImageToPdf = () => {

    const APIRequestBody = {
        from: 'image',
        to: 'pdf',
        fromType : 'gif',
        toType :'pdf',
    }

    return (
        <div className="">
            <Upload
                title={"Image to PDF"}
                subtitle={"Convert your JPG, JPEG, PNG, BITMAP to PDF online."}
                fileType={"image/*"}
                color={"indigo"}
                APIRequestBody={APIRequestBody}
            />
        </div>
    )
}

export default ImageToPdf
