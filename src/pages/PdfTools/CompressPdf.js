import React from 'react'
import Upload from '../../components/Upload/Upload'

const CompressPdf = () => {
    return (
        <div>
            <Upload
                title={"Compress PDF"}
                subtitle={"Compress your PDF"}
                fileType={".pdf"}
                color={"red"}
            />
        </div>
    )
}

export default CompressPdf
