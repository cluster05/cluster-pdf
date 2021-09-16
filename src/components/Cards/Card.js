import React from 'react'
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa'

const Card = ({ card }) => {
    return (
        <Link to={card.link}>
            <div className="p-4 h-32 pt-4 xl:max-w-sm  bg-gray-100 hover:bg-gray-50 border rounded flex justify-between items-start ">
                <div className="flex items-start">
                    <img className="h-14" src={card.from} alt={card.title} />
                    <div className="mx-2">
                        <h3 className="text-lg font-semibold tracking-wide">{card.title}</h3>
                        <p className=""> {card.descripion} </p>
                    </div>
                </div>
                <span className="m-2 text-xl">
                    <FaAngleRight />
                </span>
            </div>
        </Link>
    )
}

export default Card
