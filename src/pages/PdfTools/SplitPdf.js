import React from 'react'
import Upload from '../../components/Upload/Upload';

const SplitPdf = () => {
    return (
        <div>
            <Upload
                title={"Split PDF"}
                subtitle={"Split your PDF online."}
                fileType={".pdf"}
                color={"red"}
            />
        </div>
    )
}

export default SplitPdf
