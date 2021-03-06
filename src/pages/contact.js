import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail">
          <h1 className="post-title">Get in Touch</h1>
          <p>Let's work on something! &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"></input>
            <div>
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email"/>
            </div>
            <div>
              <label>Message</label>
              <textarea name="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`