import React, { useContext , useState , useEffect } from "react";
// import { Link } from "react-router-dom";
import LoginButton from "./loginButton";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";

function Profile() {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState();
  useEffect(() => {
    getOnlyUserById(auth.userId).then((res) => {
      setUser(res.data);
    });
  }, [auth]);
  if (!user){
    return (
      <ul>
          <li><a href="/SignIn" className="login-btn"><i className="fa fa-user-o" /> Sign In </a></li>
      </ul>
    )
  }
  return (
    <ul>
    <li><a href="#" style={{textTransform: 'capitalize'}}>{user.firstName + ' ' + user.lastName}</a>
      <ul className="dropdown">
        <li><a className="fa fa-user"></a><a href="/Profile">My Profile</a></li>
        <li><a className="fa fa-ticket"></a><a href="/MyTickets">My Tickets</a></li>
        <li><a className="fa fa-sign-out"></a><a href="/" onClick={() =>{ auth.logout(); window.parent.location = "/" }}>Log out</a></li>
      </ul>
    </li>
    </ul>
     )
}


class Nav extends React.Component {
  render() {
    return (
    <nav  className="header__menu mobile-menu">
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/Contact">Contact Us</a></li>
          {/* <a className="header__menu_vl"></a>
          <Profile /> */}
      </ul>
      <div id="vl" className="header__menu_vl"></div>
      <Profile id="profile"/>
    </nav>
    
    );
  }
}

{/* <a href="#" className="login-btn"><i className="fa fa-user"></i></a> */}

export default Nav;
