import React from 'react'
import Upload from '../../components/Upload/Upload';

const WordToPdf = () => {

    const APIRequestBody = {
        from: 'office',
        to: 'pdf',
        fromType : 'word',
        toType :'pdf',
    }

    return (
        <div>
            <Upload
                title={"Word to PDF"}
                subtitle={"Convert your DOC to PDF online."}
                fileType={".doc,.docx"}
                color={"blue"}
                APIRequestBody={APIRequestBody}
            />
        </div>
    )
}

export default WordToPdf
