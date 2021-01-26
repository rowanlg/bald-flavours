import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const HomeCookingPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.tag === "Home Cooking") // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div
        className="centered-header"
      >
        <h1>Home Cooking</h1>
      </div>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default HomeCookingPage
export const homeCookingQuery = graphql`
  query homeCookingPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            tag
          }
        }
      }
    }
  }
`
