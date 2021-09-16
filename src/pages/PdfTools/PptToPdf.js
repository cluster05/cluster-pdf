import React from 'react'
import Upload from '../../components/Upload/Upload';

const PptToPdf = () => {
    return (
        <div>
            <Upload
                title={"PowerPoint Presentation to PDF"}
                subtitle={"Convert your PowerPoint Presentation to PDF online."}
                fileType={".ppt"}
                color={"yellow"}
            />
        </div>
    )
}

export default PptToPdf
