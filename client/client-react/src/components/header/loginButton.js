import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const LoginButton = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Link to={auth.isLoggedIn ? "/Profile" : "/SignIn"}>
        <div className="header__menu__right">
          <a className="login-btn">
            <i className="fa fa-user" />
          </a>
        </div>
      </Link>
      <button onClick={() => auth.logout()}>Logout</button>
    </>
  );
};

export default LoginButton;
