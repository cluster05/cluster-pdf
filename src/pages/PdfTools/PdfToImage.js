import React from 'react'
import Upload from '../../components/Upload/Upload';

const PdfToImage = () => {
    
    const APIRequestBody = {
        from: 'pdf',
        to: 'image',
        fromType : 'pdf',
        toType :'png',
    }

    return (
        <div>
            <Upload
                title={"PDF to Image"}
                subtitle={"Convert your PDF into Images"}
                fileType={".pdf"}
                color={"red"}
                APIRequestBody={APIRequestBody}
                baseUrl={"http://localhost:8080/document/convert"}
            />
        </div>
    )
}

export default PdfToImage
