import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import BFLogo from '../images/Bald_Flavours_Logo.png'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{/*{data.site.siteMetadata.title}*/}
            <img 
              src={BFLogo} 
              style={{width: '5rem'}}
            />
          </Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Bald Flavours &bull; Created by <a href="https://rowangordon.co.uk" target="_blank">Rowan Gordon</a></p>
      </footer>
    </div>
  )
}
