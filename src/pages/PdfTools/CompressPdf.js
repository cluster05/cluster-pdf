import React from 'react'
import Upload from '../../components/Upload/Upload'

const CompressPdf = () => {

    const APIRequestBody = {
           
    }

    return (
        <div>
            <Upload
                title={"Compress PDF"}
                subtitle={"Compress your PDF"}
                fileType={".pdf"}
                color={"red"}
                body={APIRequestBody}
                baseUrl={"http://localhost:8080/document/compress"}
            />
        </div>
    )
}

export default CompressPdf
