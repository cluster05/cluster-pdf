import React, { useState } from 'react'

const UploadFile = () => {

    const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const uplaodFile = () => {
        const formData = new FormData();
        formData.append("file", file)
    }

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={uplaodFile}> Uplaod file </button>
        </div>
    )
}

export default UploadFile
