import React from 'react'
import Upload from '../../components/Upload/Upload';

const WordToPdf = () => {
    return (
        <div>
            <Upload
                title={"Word to PDF"}
                subtitle={"Convert your DOC to PDF online."}
                fileType={".doc,.docx"}
                color={"blue"}
            />
        </div>
    )
}

export default WordToPdf
