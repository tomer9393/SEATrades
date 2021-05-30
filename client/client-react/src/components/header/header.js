import React from "react";
import Nav from "./webNav";
import Mnav from "./mobileNav";
import {Link} from "react-router-dom";

class Header extends React.Component{

  state = {
    loggedin: false,
  };

  componentDidMount() {
    this.setState({ loggedin: true });
  }

  constructor(props) {
    super(props);
  }

   render() {
    return (
      <header className="header">
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-3 col-md-3">
                  <div className="header__logo">
                      <Link to="/">
                        <img src="img/logo-trans2.png" alt=""/>
                        </Link>
                  </div>
              </div>
              <div className="col-lg-9 col-md-9">
                  <div id="web-menu" className="header__nav">
                    <Nav user={this.props.user}></Nav>
                  </div>
                  <div id="mobile-menu" className="header__nav">
                    <Mnav user={this.props.user}></Mnav>
                  </div>
              </div>
          </div>
          <div id="mobile-menu-wrap"></div>
      </div>
    </header>
    );
  }
}




export default Header;
