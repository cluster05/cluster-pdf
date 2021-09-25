import React from 'react'
import { Link } from 'react-router-dom'

const VPNavbar = ({ opration ,downloadUrl}) => {
    return (        
        <div className="px-4 py-5 bg-gray-100 sticky top-0 z-20 flex justify-around items-center">
            <Link to="/pdf-tools">
                <h2 className="text-3xl font-bold">ClusterPdf</h2>
            </Link>
            <span className="font-medium text-xl capitalize">  {opration} </span>
            <div className="">
                <a href={downloadUrl} download className="px-4 py-2 text-2xl font-semibold cursor-pointer capitalize rounded bg-blue-500 text-white"> download </a>
            </div>
        </div>
    )
}

export default VPNavbar
        