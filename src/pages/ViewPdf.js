import React from 'react'
import { useParams } from 'react-router'
const ViewPdf = () => {

    const { pdfId } = useParams();
    return (
        <div>
            {pdfId}
            View Pdf and downlaod from here... 
        </div>
    )
}

export default ViewPdf
