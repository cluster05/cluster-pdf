import React from 'react'
import Upload from '../../components/Upload/Upload';

const PdfToPpt = () => {

    const APIRequestBody = {
        from: 'pdf',
        to: 'office',
        fromType : 'pdf',
        toType :'ppt',
    }

    return (
        <div>
               <Upload
                title={"PDF to PPT"}
                subtitle={"Convert yout PDF into PowerPoint Presentation."}
                fileType={".pdf"}
                color={"red"}
                APIRequestBody={APIRequestBody}
            />
        </div>
    )
}

export default PdfToPpt
