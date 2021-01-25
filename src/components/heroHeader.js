import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div 
          className="headline"
          style={{width: "90%"}}
        >
          {data.site.siteMetadata.home.title}
        </div>
        <div 
          className="primary-content"
          style={{width: "90%"}} 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        {/*<Link to='/contact' className="button -primary">Get in touch &rarr;</Link>*/}
      </div>
    )}
  />
)