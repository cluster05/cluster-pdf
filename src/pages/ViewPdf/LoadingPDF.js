import React from 'react'
import Loading from './../../assets/loading.gif'
const LoadingPDF = ({isLoading}) => {
    if(!isLoading) return null;
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <img className="w-40 h-w-40" src={Loading} alt="loading pdf icon"/>
        </div>
    )
}

export default LoadingPDF
