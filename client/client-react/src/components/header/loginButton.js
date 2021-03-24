import React from "react";
import { Link } from "react-router-dom";

class LoginButton extends React.Component {
  render() {
    return (
      <Link to="/">
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
