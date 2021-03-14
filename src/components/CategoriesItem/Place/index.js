import React from "react"

const Place = (props) => {
    return (
        <li className="border-gray-400 flex flex-row mb-2">
        <div
            className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"><span role="img">{props.icon}</span></div>
            <div className="flex-1 pl-1">
                <div className="">
                    <h3 className="font-bold text-lg md:py-1 inline-block mr-2">{props.name} </h3>
                </div>
                <div className="text-gray-600 text-sm">{props.description}</div>
            </div>
        </div>
    </li>
    )
}

export default Place
