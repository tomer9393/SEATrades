import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";

function Nav (props){

  const auth = useContext(AuthContext);
  const user = props.user;
  //const [user, setUser] = useState(auth.user);
  // useEffect(() => {
  //   getOnlyUserById(auth.userId).then((res) => {
  //     setUser(res.data);
  //   });
  // }, [auth]);
  console.log(user);
  return !user ? (
    <>
    
      <nav  className="header__menu mobile-menu">
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/Contact">Contact Us</a></li>
      </ul>
      <div id="vl" className="header__menu_vl"></div>
      <ul>
          <li><a href="/SignIn" className="login-btn"><i className="fa fa-user-o" /> Sign In </a>
          </li>
      </ul>
    </nav>
    </>
  ) : (
    <>
    <nav  className="header__menu mobile-menu">
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/Contact">Contact Us</a></li>
      </ul>
      <div id="vl" className="header__menu_vl"></div>
      <ul>
      <li><a style={{textTransform: 'capitalize'}}>{user.firstName + ' ' + user.lastName}</a>
      <ul className="dropdown">
        <li><a className="fa fa-user"></a><a href="/Profile">My Profile</a></li>
        <li><a className="fa fa-ticket"></a><a href="/MyTickets">My Tickets</a></li>
        <li><a className="fa fa-sign-out"></a><a href="/" onClick={() =>{ auth.logout(); window.parent.location = "/" }}>Log out</a></li>
      </ul>
    </li>
    </ul>
    </nav>
    </>
    );
}

export default Nav;
