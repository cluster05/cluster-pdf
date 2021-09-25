import React from 'react'
import Loading from './../../assets/loading.gif'
const LoadingPDF = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <img className="w-40 h-w-40" src={Loading}/>
        </div>
    )
}

export default LoadingPDF
