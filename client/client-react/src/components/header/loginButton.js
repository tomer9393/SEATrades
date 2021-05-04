import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const LoginButton = () => {
  const auth = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
<div>
  {
    auth.isLoggedIn
    ? <div className="header__menu__right">
    <a className="login-btn" onClick={handleClick}>
      <i className="fa fa-user" />
    </a>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
     <Link to="/Profile"><MenuItem onClick={handleClose} >My profile</MenuItem></Link> 
      <MenuItem onClick={() =>{ auth.logout(); window.parent.location = "/" }} >Logout</MenuItem>
    </Menu>
  </div>
  : <Link to="/SignIn">
    <div className="header__menu__right">
          <a className="login-btn" >
            <i className="fa fa-user" />
          </a>
          </div>
     
  </Link>

  }

</div>


      {/* <Link to={auth.isLoggedIn ? "/Profile" : "/SignIn"}>
        <div className="header__menu__right">
          <a className="login-btn" onClick={handleClick}>
            <i className="fa fa-user" />
          </a>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          > */}
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            {/* <MenuItem onClick={handleClose}>My profile</MenuItem>
            <MenuItem onClick={() =>{ auth.logout(); window.parent.location = "/" }} >Logout</MenuItem>
          </Menu>
        </div>
      </Link>
      <button onClick={() => auth.logout()}>Logout</button> */}
    </>
  );
};
export default LoginButton;
