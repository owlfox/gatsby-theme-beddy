import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
  
  `)
  console.log(data)
  return (
    <Layout title={data.site.siteMetadata.title}>
      
    </Layout>
  )
}
export default EventsTemplate