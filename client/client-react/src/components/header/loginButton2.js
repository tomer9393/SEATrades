import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    ? <div>
    <a className="login-btn" onClick={handleClick}>
      <i className="fa fa-user" />
    </a>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ horizontal: "center" }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      aria-haspopup="true"
      
      // disableScrollLock={true}
      //container={this.AnchorEl.parentNode}
    
    >
          
      {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
     <Link to="/Profile"> <MenuItem  onClick={handleClose}><AccountBoxIcon style={{margin:5}}/> {' '} My profile </MenuItem></Link> 
     <Link to="/MyTickets"><MenuItem onClick={handleClose} > <ConfirmationNumberIcon style={{margin:5}}/> My tickets</MenuItem></Link> 
      <MenuItem onClick={() =>{ auth.logout(); window.parent.location = "/" }} ><ExitToAppIcon style={{margin:5}}/>Logout</MenuItem>
    </Menu>
  </div>
  : <Link to="/SignIn">
    <div>
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
