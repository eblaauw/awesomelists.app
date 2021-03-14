import * as React from "react"
import Layout from "../components/Layouts"
import Title from "../components/Title"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
   <Layout>
     <Link to="/places" className="underline text-blue-400 hover:text-blue-800"><Title title="We're in beta. Discover places now."/></Link>
   </Layout>
  )
}

export default IndexPage
