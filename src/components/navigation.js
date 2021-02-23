import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

const Navigation = (props) => {
  const [toggle, setToggle] = React.useState(false)
  return (
    <>
      <nav className="navigation"> 
        <div className="nav-hide-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/homecooking">Home Cooking</Link>
          {/* <Link to="/copywriting">Copywriting</Link> */}
          <Link to="/contact">Contact</Link>
        </div>
        <div
          style={toggle ? {opacity: "0"} : {}}
        >
          <ThemeChanger />
        </div>
      <div 
        className="toggle-mobile-nav"
        onClick={() => setToggle(!toggle)}
        style={toggle ? {position: "fixed"} : {}}
      >
        <div
          style={toggle ? {transform: "rotate(45deg)"} : {}}
        ></div>
        <div
          style={toggle ? {opacity: "0", transform: "translateX(5rem)"} : {}}
        ></div>
        <div
          style={toggle ? {transform: "rotate(-45deg)"} : {}}
        ></div>
      </div>
      </nav>
      <nav 
        className="mobile-navigation"
        style={toggle ? {} : {transform: "translate(-100vw, 0rem)"}}
      > 
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/reviews">Reviews</Link>
        <Link className="nav-link" to="/homecooking">Home Cooking</Link>
        {/* <Link className="nav-link" to="/copywriting">Copywriting</Link> */}
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
    </>
  )
}
export default Navigation