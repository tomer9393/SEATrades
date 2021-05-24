import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getUserById } from "../../api/UserAPI";
import { useProfile } from "../hooks/profile-hook";
import {Link} from "react-router-dom";


function Nav (props){
  const auth = useContext(AuthContext);
  const user = props.user;

  return user ? (
    <>
    <nav  className="header__menu">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
      <div id="vl" className="header__menu_vl"></div>
          <ul>
          <li><a style={{textTransform: 'capitalize'}}>{user.firstName + ' ' + user.lastName}</a>
          <ul className="dropdown">
          <li><a className="fa fa-user"></a><Link to="/Profile">My Profile</Link></li>
            <li><a className="fa fa-ticket"></a><Link to="/MyTickets">My Tickets</Link></li>
            <li><a className="fa fa-sign-out"></a><Link to="/" onClick={() =>{ auth.logout(); window.parent.location = "/" }}>Log out</Link></li>
          </ul>
        </li>
        </ul>
    </nav>
    </>
  ) : (
    <>
    <nav  className="header__menu">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
      <div id="vl" className="header__menu_vl"></div>
          <ul>
          <li><Link to="/SignIn" className="login-btn"><i className="fa fa-user-o" /> Sign In </Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav;
