import React from "react";
// import { Link } from "react-router-dom";
// import LoginButton from "./loginButton";


class Nav extends React.Component {
  render() {
    return (
      <nav className="header__menu mobile-menu">
        <ul>
          <li>
          <a className="nav-link" href="/" style={{textShadow: '2px 1px #000000'}}>
            Home
          </a>
          </li>
          <li>
          <a className="nav-link" href="/AboutUs"   style={{textShadow: '2px 1px #000000'}}>
            About Us
            </a>
          </li>
          <li>
          <a className="nav-link" href="/HowItWorks"   style={{textShadow: '2px 1px #000000'}}>
              How It Works
            </a>
          </li>
          <li>
          <a className="nav-link" href="/Contact"   style={{textShadow: '2px 1px #000000'}}>
            Contact Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
