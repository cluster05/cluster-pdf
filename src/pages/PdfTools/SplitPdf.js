import React from 'react'
import Upload from '../../components/Upload/Upload';

const SplitPdf = () => {

    const APIRequestBody = {
        pages : []
    }

    return (
        <div>
            <Upload
                title={"Split PDF"}
                subtitle={"Split your PDF online."}
                fileType={".pdf"}
                color={"red"}
                APIRequestBody={APIRequestBody}
                baseUrl={"http://localhost:8080/document/split"}
            />
        </div>
    )
}

export default SplitPdf
