import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

const Navigation = (props) => {
  return (
    <>
      <nav className="navigation"> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/homecooking">Home Cooking</Link>
        <Link to="/copywriting">Copywriting</Link>
        <Link to="/contact">Contact</Link>
        <ThemeChanger/>
      </nav>
      <div 
        className="toggle-mobile-nav"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav 
        className="mobile-navigation"
      > 
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/reviews">Reviews</Link>
        <Link className="nav-link" to="/homecooking">Home Cooking</Link>
        <Link className="nav-link" to="/copywriting">Copywriting</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <ThemeChanger />
      </nav>
    </>
  )
}
export default Navigation