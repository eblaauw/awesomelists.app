import * as React from "react"

// markup
const DescriptionPanel = ( { children } ) => {
    return (
        <div className="w-full">
            <div className="mt-8 md:mt-8 mb-8">
                <div className="shadow p-5 rounded-md">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DescriptionPanel
