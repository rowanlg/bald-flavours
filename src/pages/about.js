import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import AboutPageContent from "../components/aboutPageContent"

const AboutPage = ({
  data: {
    site,
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{`About | ${site.siteMetadata.title}`}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      
        <AboutPageContent />
   
      
    </Layout>
  )
}

export default AboutPage
export const pageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
