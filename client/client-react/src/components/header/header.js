import React from "react";
import Nav from "./nav";
import LoginButton from "./loginButton";

class Header extends React.Component {
  render() {
    return (
      
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="header__logo">
                <a >
                  <img src="img/logo-trans.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="header__nav">
                <Nav></Nav>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="header__nav_login">
              <LoginButton></LoginButton>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>
    );
  }
}

export default Header;
