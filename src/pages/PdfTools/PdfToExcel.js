import React from 'react'
import Upload from '../../components/Upload/Upload';

const PdfToExcel = () => {
    return (
        <div>
            <Upload
                title={"PDF to Excel"}
                subtitle={"Convert yout PDF into Excel Sheet."}
                fileType={".pdf"}
                color={"red"}
            />
        </div>
    )
}

export default PdfToExcel
