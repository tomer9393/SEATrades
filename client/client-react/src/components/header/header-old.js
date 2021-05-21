import React from "react";
import Nav from "./nav";
//import LoginButton from "./loginButton";
import { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";


function User (props){
  const auth = useContext(AuthContext);
  //const user = props.user;
  const [user, setUser] = useState();
  useEffect(() => {
    getOnlyUserById(auth.userId).then((res) => {
      setUser(res.data);
    });
  }, [auth]);

  return user;
}

class Header extends React.Component {
  render() {
    return (
      
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <a >
                  <img src="img/logo-trans2.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="header__nav ">
                <Nav user={User()}></Nav>
              </div>
            </div>
            {/* <div className="col-lg-5 col-md-5">
              <div className="header__nav_login">
              <LoginButton></LoginButton> */}
              {/* <div className="header__menu__right">
                <a href="/" className="login-btn">
                  <i className="fa fa-user" />
                </a>
              </div> */}
              {/* </div>
            </div> */}
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>
    );
  }
}

export default Header;
