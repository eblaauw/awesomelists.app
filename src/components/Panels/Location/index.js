import { Link } from "gatsby"
import * as React from "react"

// markup
const LocationPanel = (props) => {
    return (
        <Link to={props.country_link}>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100 hover:bg-gray-200">
            <div className="text-center">
                <span className="text-5xl block" role="img">{props.country_emoji}</span>
                <span className="block text-gray-700 pt-2">{props.city}</span>
            </div>
        </div>
        </Link>
    )
}

export default LocationPanel
