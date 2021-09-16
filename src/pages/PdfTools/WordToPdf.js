import React from 'react'
import { VscFile } from 'react-icons/vsc';
import UplaodFile from './../../components/UploadFile/UploadFile';

const WordToPdf = () => {
    return (
        <div>
            <div className="my-10 flex items-center flex-col">
                <h1 className="text-4xl tracking-wide">Word to PDF</h1>
                <p className="max-w-3xl  text-2xl my-4 tracking-wide font-medium text-center">Convert your DOC to PDF online.</p>
            </div>
            <div className="mt-28 flex items-center justify-center" >
                <div className="min-w-max max-w-5xl w-full border-blue-400 bg-blue-500 rounded" style={{ borderWidth: '16px' }}>
                    <div className="flex items-center py-16 flex-col border-4 border-gray-600 rounded-md border-dashed">
                        <span className="text-6xl my-4 text-gray-100">
                            <VscFile />
                        </span>
                        <UplaodFile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordToPdf
