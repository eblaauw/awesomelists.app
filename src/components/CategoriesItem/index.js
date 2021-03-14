import React from "react"
import Place from "./Place"
const CategoriesItem = (props) => {
    return (
        <>
            {props.data.categories.map((category) => (
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold relative font-title mt-16 pb-2">
                        <span role="img" class="pr-4">{category.category_emoji}</span>
                        <span>{category.category_name}</span>
                    </h3>
                    {category.places.map((place) => (
                        <Place name={place.name} icon={place.icon} description={place.description} />
                    ))}
                </div>
            ))}

        </>
    )
}

export default CategoriesItem
