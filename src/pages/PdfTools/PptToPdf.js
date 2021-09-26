import React from 'react'
import Upload from '../../components/Upload/Upload';

const PptToPdf = () => {

    const APIRequestBody = {
        from: 'office',
        to: 'pdf',
        fromType : 'ppt',
        toType :'pdf',
    }

    return (
        <div>
            <Upload
                title={"PowerPoint Presentation to PDF"}
                subtitle={"Convert your PowerPoint Presentation to PDF online."}
                fileType={".ppt"}
                color={"yellow"}
                APIRequestBody={APIRequestBody}
                baseUrl={"http://localhost:8080/document/convert"}
            />
        </div>
    )
}

export default PptToPdf
