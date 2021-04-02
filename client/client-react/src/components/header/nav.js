import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="header__menu mobile-menu">
        <ul>
          <li>
          <Link className="nav-link" to="/" style={{textShadow: '2px 1px #000000'}}>
            Home
          </Link>
            {/* <a href="./index.html">Home</a> */}
          </li>
          <li>
          <Link className="nav-link" to="/AboutUs" spy={true} smooth={true} style={{textShadow: '2px 1px #000000'}}>
            About Us
            </Link>
            {/* <a href="./listing.html">Listing</a> */}
          </li>
          <li>
          <Link className="nav-link" to="/Contact" spy={true} smooth={true} style={{textShadow: '2px 1px #000000'}}>
            Contact Us
            </Link>
            {/* <a href="#">Categories</a> */}
          </li>
          {/* <li>
            <a href="#">Pages</a>
            <ul className="dropdown">
              <li>
                <a href="./about.html">About</a>
              </li>
              <li>
                <a href="./listing-details.html">Listing Details</a>
              </li>
              <li>
                <a href="./blog-details.html">Blog Details</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <a href="./blog.html">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li> */}
        </ul>
      </nav>
    );
  }
}

export default Nav;
