import React from 'react'
import Upload from '../../components/Upload/Upload';


const PdfToWord = () => {
    return (
        <div>
               <Upload
                title={"PDF to Word"}
                subtitle={"Convert yout PDF into ExcelSheet."}
                fileType={".pdf"}
                color={"red"}
            />
        </div>
    )
}

export default PdfToWord
