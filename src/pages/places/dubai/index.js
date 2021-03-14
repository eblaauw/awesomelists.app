import * as React from "react"
import Layout from "../../../components/Layouts"
import PlaceGuide from "../../../components/Layouts/PlaceGuide"
import data from "./data.json"

const Dubai = () => {
    return (
        <Layout>
        <PlaceGuide data={data} />
        </Layout>
    )
}

export default Dubai
