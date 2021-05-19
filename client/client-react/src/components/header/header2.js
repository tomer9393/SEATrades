import React from "react";
import Nav from "./nav3";
import LoginButton from "./loginButton2";
import { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";
import { useProfile } from "../hooks/profile-hook";

// function Profile() {
//   const auth = useContext(AuthContext);
//   const [user, setUser] = useState();
//   useEffect(() => {
//     getOnlyUserById(auth.userId).then((res) => {
//       setUser(res.data);
//     });
//   }, [auth]);
//   return {user};
// }


function Header (props) {
  //const user = props.userProfile;
  const auth = useContext(AuthContext);
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   getOnlyUserById(auth.userId).then((res) => {
  //     setUser(res.data);
  //   });
  // }, [auth]);
  console.log(auth);
  const user = useProfile(auth.userId);
  //console.log(user);
  
  // render() {
    return (
      <header className="header">
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-3 col-md-3">
                  <div className="header__logo">
                      <a href="/">
                        <img src="img/logo-trans2.png" alt=""/>
                        </a>
                  </div>
              </div>
              <div className="col-lg-9 col-md-9">
                  <div className="header__nav">
                    <Nav user={user}></Nav>
                  
                      {/* <div className="header__menu__right mobile-menu">
                      <LoginButton></LoginButton>
                      </div> */}
                  </div>
              </div>
          </div>
          <div id="mobile-menu-wrap"></div>
          {/* <div id="mobile-menu-wrap2"></div> */}
      </div>
    </header>
    );
  //}
}

export default Header;
