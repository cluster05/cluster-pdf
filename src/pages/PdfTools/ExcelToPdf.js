import React from 'react'
import Upload from '../../components/Upload/Upload'
const ExcelToPdf = () => {

    const APIRequestBody = {
        from: 'office',
        to: 'pdf',
        fromType : 'excel',
        toType :'pdf',
    }

    return (
        <div>
            <Upload
                title={"Excel to PDF"}
                subtitle={"Convert your Excel File to PDF online."}
                fileType={".xls,.xlsx"}
                color={"green"}
                APIRequestBody={APIRequestBody}
            />
        </div>
    )
}

export default ExcelToPdf
