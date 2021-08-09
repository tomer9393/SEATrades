import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../../api/UserAPI";
import QRCode from "react-qr-code";
import {Link} from "react-router-dom";

const images = [
  {
    url:
      "https://www.ticketsource.co.uk/brochure/images/pages/ticketmanagement/tickets.png",
    title: "My Tickets",
    width: "40%",
    url2:
      "http://fwembassytheatre.org/wp-content/uploads/2016/11/Embassy-Theatre-FOH.jpg",
    title2: "My SEATrades",
    
    
  },
];

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
    // align: theme.align('center'),
    textSize: 300,
    width: 200,
    height: 0.5,
  },
  button: {
    margin: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    fontSize: 20,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  profileText: {
    listStyle: 'none',
    display: 'inline-block',
    fontSize: '21px',
    color: '#000000',
    marginLeft: '10px',
    fontFamily: '"Cairo", sans-serif',
    fontWeight: 'bold',
  },
}));

export default function ProfilePage(props) {
  const auth = useContext(AuthContext);
  const classes = useStyles();

  const [user, setUser] = useState();
  useEffect(() => {
    getUserById(auth.userId).then((res) => {
      setUser(res.data);
    });
  }, [auth]);

  
  return !user ? (
    <div>Loading</div>
  ) : (
    <>
        <section className="profile_spad">
        <div className="profile__container">
          <div className="profile__row">
            <div className="col-lg-4 col-md-4">
              <div className="profile__title">
                <h2>
                Profile Details
                </h2>
                <div className="col-lg-7 col-md-7">
                    <div className="profile__text">
                    <ul>
                        <li><i className="fa fa-user" ></i>FullName:<a className={classes.profileText} style={{textTransform: 'capitalize'}}>{user.firstName + ' ' + user.lastName}</a></li>
                        <li><i className="fa fa-id-card"></i> ID:<a className={classes.profileText}> {user.userId}</a></li>
                        <li><i className="fa fa-envelope"></i>E-Mail: <a className={classes.profileText}>{user.email}</a></li>
                        <li><i className="fa fa-phone"></i>Phone:<a className={classes.profileText}>{user.phoneNumber}</a></li>
                    </ul>
                    </div>
                </div>
              </div>
              
            </div>
            <div className="profile_vl"></div>
            <div className="col-lg-4 col-md-4">
            <div className="profile__title profile_Id">
                <h2 >
                Event ID
                </h2>
            <div className="col-lg-10 col-md-10">
            <div className="profile__div">
              <div className="team__item profile_Id_qr">
              <img src="/img/frame-QR.gif" ></img>
              <div><QRCode value={user.code} /></div>
              </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="profile_spad">
        <div className="profile__container">
          <div className="profile__row">
      <div className={classes.root}>
      
        {images.map((image) => (
          <ButtonBase 
            focusRipple
            key={image.title}
            // onclick={window.parent.location = "/"}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              margin:30,
            }}
            >
            <Link to='MyTickets'>
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span  className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
            </Link>
          </ButtonBase>
          
        ))}
      </div>

      
      <div className={classes.root}>
      
        {images.map((image) => (
          <ButtonBase 
            focusRipple
            key={image.title2}
            // onclick={window.parent.location = "/"}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              margin:30,
            }}
            >
            <Link to='MySEATrades'>
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url2})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span  className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title2}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
            </Link>
          </ButtonBase>
          
        ))}
      </div>
      </div>
        </div>
      </section>
      <section className="logout">
      <hr className="logout hr" style={{width: '70%'}}></hr>
      <Link to="/" onClick={() =>{ auth.logout(); window.parent.location = "/" }} className="primary-btn">Logout</Link>
      </section>
    </>
  );
}
