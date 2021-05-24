import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getUserById } from "../../api/UserAPI";
import { useProfile } from "../hooks/profile-hook";
import {Link} from "react-router-dom";


export function UserProfile (props){
  const auth = useContext(AuthContext);
  const [userProfile, setUser] = useState();
  const userId=props.Id;
  console.log(userId);
  useEffect(() => {
    getUserById(userId).then((res) => {
      setUser(res.data);
    });
  }, [userId]);
  //const user = userProfile;
  // console.log(auth)
  // const userId = props.Id;
   console.log(userProfile)
  // const user = useProfile(userId);
  // console.log(user);
  return (
    <>
    <ul>
    {/* <li><a style={{textTransform: 'capitalize'}}>{userProfile.firstName + ' ' + userProfile.lastName}</a> */}
    <li><a style={{textTransform: 'capitalize'}}>My Profile</a>
    <ul className="dropdown">
      <li><a className="fa fa-user"></a><Link to="/Profile">My Profile</Link></li>
      <li><a className="fa fa-ticket"></a><Link to="/MyTickets">My Tickets</Link></li>
      <li><a className="fa fa-sign-out"></a><Link to="/" onClick={() =>{ auth.logout(); window.parent.location = "/" }}>Log out</Link></li>
    </ul>
  </li>
  </ul>
  </>
    );
}

export function SignIn (props){
  return (
    <>
      <ul>
          <li><Link to="/SignIn" className="login-btn"><i className="fa fa-user-o" /> Sign In </Link>
          </li>
      </ul>
    </>
    );
}

export function LoginButton (props){
  const Id = props.Id;
  console.log(Id)
  if(Id == false){
      return <SignIn></SignIn>
  }else {
    return <UserProfile Id={Id}></UserProfile>
  }
}

class Nav extends React.Component{

  // shouldComponentUpdate() {
  //   console.log('Nav - shouldComponentUpdate lifecycle');

  //   return false;
  // }

  constructor(props) {
    super(props);
  }
  //var auth = userProfile

  render() {
  var isLoggedIn = this.props.token;
  console.log(this.props.token)
  console.log('NAV Render lifecycle')
  console.log(isLoggedIn)
  if(isLoggedIn == false){
    var Id = false
  }else {
    Id = this.props.userId;
    console.log(Id)
  }
  return (
    <>
      <nav  className="header__menu mobile-menu">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
      <div id="vl" className="header__menu_vl"></div>
      <LoginButton Id={Id}></LoginButton>
    </nav>
    </>
    );
  }
}


export default Nav;
