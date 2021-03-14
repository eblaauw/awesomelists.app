import * as React from "react"
import Title from "../../components/Title"
import Layout from "../../components/Layouts"
import DescriptionPanel from "../../components/Panels/Description"
import LocationPanel from "../../components/Panels/Location"

const PlacesOverview = () => {
    return (
        <Layout>
            <Title title="🌍 List of awesome places around the world" />
            <DescriptionPanel type="color">
                <p className="font-normal">At awesomelists.app, we try to guide you on your new expat location. We do this with amazing guides. Guides include... <br /></p>
            </DescriptionPanel>
            <div>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                        Choose your location
    </p>
                    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                       <LocationPanel country_link="dubai" country_emoji="🇦🇪" city="Dubai, United Arab Emirates" />
                       <LocationPanel country_link="amsterdam" country_emoji="🇳🇱" city="Amsterdam, The Netherlands" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PlacesOverview
