import React from 'react'
import Upload from '../../components/Upload/Upload';

const PdfToExcel = () => {

    const APIRequestBody = {
        from: 'pdf',
        to: 'office',
        fromType : 'pdf',
        toType :'excel',
    }

    return (
        <div>
            <Upload
                title={"PDF to Excel"}
                subtitle={"Convert yout PDF into Excel Sheet."}
                fileType={".pdf"}
                color={"red"}
                APIRequestBody={APIRequestBody}
            />
        </div>
    )
}

export default PdfToExcel