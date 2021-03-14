import React from "react"

const CategoryCard = (props) => {
    return (
        <a href={props.category_id} className="font-medium hover:font-bold py-4">
            <li className="inline-block bg-white mr-3 p-4 shadow-sm hover:shadow-md rounded-lg border-gray-100 border-2">
                <span type="img" className="text-center pr-2">{props.category_emoji}</span>
                <span>{props.category_name}</span>
            </li>
        </a>
    )
}

export default CategoryCard
