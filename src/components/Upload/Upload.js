import React from 'react'
import { VscFile } from 'react-icons/vsc';
import UplaodFile from './UploadFile';

const Upload = ({ title, subtitle, color, fileType }) => {

    const classes = `min-w-max max-w-5xl w-full rounded border-${color}-400 bg-${color}-500 `;

    return (
        <div>
            <div className="my-10 flex items-center flex-col">
                <h1 className="text-4xl tracking-wide">{title}</h1>
                <p className="max-w-3xl  text-2xl my-4 tracking-wide font-light text-center">{subtitle}</p>
            </div>
            <div className="mt-28 flex items-center justify-center" >
                <div className={classes} style={{ borderWidth: '16px' }}>
                    <div className="flex items-center py-16 flex-col border-4 border-gray-600 rounded-md border-dashed">
                        <span className="text-6xl my-4 text-gray-100">
                            <VscFile />
                        </span>
                        <UplaodFile fileType={fileType} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
