// src/pages/index.js

import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
  <>
    <p>{data.markdownRemark.frontmatter.title}</p>
  </>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      frontmatter {
        title
      }
    }
  }
`
