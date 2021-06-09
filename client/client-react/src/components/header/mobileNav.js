import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getUserById } from "../../api/UserAPI";
import { useProfile } from "../hooks/profile-hook";
import {Link} from "react-router-dom";


function Mnav (props){
  return (
    <>
    <nav  className="header__menu mobile-menu">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Profile"><i className="fa fa-user" />&ensp;My Profile</Link></li>
          <li><Link to="/MyTickets"><i className="fa fa-ticket" />&ensp;My Tickets</Link></li>
          <li><Link to="/mySEATrades"><i className="fa fa-lightbulb-o" />&ensp;SEATrades</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Mnav;
