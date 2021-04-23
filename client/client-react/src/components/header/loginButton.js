import React from "react";
import { Link } from "react-router-dom";
import {SignIn} from "../signInPage/signInPage"

class LoginButton extends React.Component {
  render() {
    return (
      <Link to="/SignIn">
      <div className="header__menu__right">
      <a className="login-btn">
        <i className="fa fa-user" />
      </a>
    </div>
    </Link>
    );
  }
}

export default LoginButton;