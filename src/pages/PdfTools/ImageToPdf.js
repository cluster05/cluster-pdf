import React from 'react'
import Upload from '../../components/Upload/Upload';

const ImageToPdf = () => {
    return (
        <div className="">
            <Upload
                title={"Image to PDF"}
                subtitle={"Convert your JPG, JPEG, PNG, BITMAP to PDF online."}
                fileType={"image/*"}
                color={"indigo"}
            />
        </div>
    )
}

export default ImageToPdf
