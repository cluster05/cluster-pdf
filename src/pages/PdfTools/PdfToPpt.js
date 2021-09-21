import React from 'react'
import Upload from '../../components/Upload/Upload';

const PdfToPpt = () => {
    return (
        <div>
               <Upload
                title={"PDF to PPT"}
                subtitle={"Convert yout PDF into PowerPoint Presentation."}
                fileType={".pdf"}
                color={"red"}
            />
        </div>
    )
}

export default PdfToPpt
