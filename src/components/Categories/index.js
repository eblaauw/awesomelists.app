import React from "react"
import CategoryCard from "../CategoryCard"

const Categories = (props) => {
    console.log('props', props.data)
    return (
        <div className="relative">
            <div className="w-full">
                <ul className="overflow-x-scroll overflow-y-hidden whitespace-nowrap py-4">
                    {props.data.categories.map((category) => (
                        <CategoryCard category_emoji={category.category_emoji} category_name={category.category_name} />
                    ))}
                </ul>
            </div>
        
           
        </div>
    )
}

export default Categories
