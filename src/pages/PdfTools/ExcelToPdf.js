import React from 'react'
import Upload from '../../components/Upload/Upload'
const ExcelToPdf = () => {
    return (
        <div>
            <Upload
                title={"Excel to PDF"}
                subtitle={"Convert your Excel File to PDF online."}
                fileType={".xls,.xlsx"}
                color={"green"}
            />
        </div>
    )
}

export default ExcelToPdf
