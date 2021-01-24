import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        site {
          siteMetadata {
            about {
              title
              content
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="sub-headline">{data.site.siteMetadata.about.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about.content}}
        />
      </div>
    )}
  />
)