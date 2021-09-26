import React from 'react';
import pdfIcon from '../../assets/pdf.png';
import excelIcon from '../../assets/excel.png';
import imageIcon from '../../assets/image.png';
import pptIcon from '../../assets/ppt.png';
import wordIcon from '../../assets/word.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="py-5 border-b flex items-center justify-around">
            <div className="flex items-center">
                 <h2 className="text-gray-700 text-2xl font-extrabold cursor-pointer"> ClusterPdf </h2>
                <div>
                    <ul className="capitalize leading-10 flex items-center">
                        <li className="cursor-pointer mx-2 ml-10 relative">
                            <span className=" tools">
                                <span className="py-4"> tools </span>
                                <div className="menu rounded-md bg-gray-100 shadow absolute top-10 left-0 whitespace-nowrap">
                                    <ul className="px-6 py-4 ">
                                        <li className="px-1 py-2 hover:bg-gray-50 rounded-md flex items-center">  <img  className="w-6 mr-2 " src={wordIcon} />  <span>Word to PDF</span> </li>
                                        <li className="px-1 py-2 hover:bg-gray-50 rounded-md flex items-center">   <img  className="w-6 mr-2 " src={excelIcon} /> <span>Excel to PDF</span> </li>
                                        <li className="px-1 py-2 hover:bg-gray-50 rounded-md flex items-center"> <img  className="w-6 mr-2 " src={pptIcon} />   <span>PPT to PDF</span> </li>
                                        <li className="px-1 py-2 hover:bg-gray-50 rounded-md flex items-center"> <img  className="w-6 mr-2 " src={pdfIcon}/>  <span>PDF to Word</span> </li>
                                        <li className="px-1 py-2 hover:bg-gray-50 rounded-md flex items-center"> <img  className="w-6 mr-2 " src={pdfIcon}/>  <span>PDF to Excel</span> </li>
                                        <li className="px-1 py-2 hover:bg-gray-50 rounded-md flex items-center"> <img  className="w-6 mr-2 " src={pdfIcon}/>  <span>PDF to PPT</span> </li>
                                    </ul>
                            </div>
                            </span>
                           
                        </li>
                        <li className="cursor-pointer mx-2">compress</li>
                        <li className="cursor-pointer mx-2">convert</li>
                        <li className="cursor-pointer mx-2">merge</li>
                    </ul>
                </div>
            </div>

            <div >
                <p className="flex">
                    <span className="capitalize">ClusterPdf terms</span> 
                    <span className="ml-2 px-3  rounded-full text-sm text-white  bg-black flex justify-center items-center">new</span> 
                </p>
            </div>
        </div>
    )
}

export default Navbar
