import React from 'react'
import Upload from '../../components/Upload/Upload';


const PdfToWord = () => {

    const APIRequestBody = {
        from: 'pdf',
        to: 'office',
        fromType : 'pdf',
        toType :'excel',
    }

    return (
        <div>
               <Upload
                title={"PDF to Word"}
                subtitle={"Convert yout PDF into ExcelSheet."}
                fileType={".pdf"}
                color={"red"}
                APIRequestBody={APIRequestBody}
                baseUrl={"http://localhost:8080/document/convert"}
            />
        </div>
    )
}

export default PdfToWord
