import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import PhoneIcon from "@material-ui/icons/Phone";
import ButtonBase from "@material-ui/core/ButtonBase";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { useEffect, useState } from "react";
import { getOnlyUserById, updateUser } from "../../api/UserAPI";

const images = [
  {
    url:
      "https://www.ticketsource.co.uk/brochure/images/pages/ticketmanagement/tickets.png",
    title: "My Tickets",
    width: "40%",
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
}));

export default function ProfilePage(props) {
  const classes = useStyles();
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  useEffect(
    () =>
      getOnlyUserById("60842ddd2220808854d9d74d")
        .then((res) => res.data)
        .then((res) => setUser(res)),
    []
  );

  return !user ? (
    <div>Loading</div>
  ) : (
    <>
      <Typography align="center">
        <TextField
          className={classes.margin}
          onChange={(event) => setFirstName(event.target.value)}
          id="input-with-icon-textfield"
          label="First Name"
          defaultValue={user.firstName} //TODO
          value={firstName}
          InputProps={{
            style: { fontSize: 15 },
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </Typography>

      <Typography align="center">
        <TextField
          className={classes.margin}
          onChange={(event) => setLastName(event.target.value)}
          id="input-with-icon-textfield"
          label="Last Name"
          defaultValue={user.lastName} //TODO
          value={lastName}
          InputProps={{
            style: { fontSize: 15 },
            startAdornment: (
              <InputAdornment position="start">
                <PeopleIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </Typography>

      <Typography align="center">
        <TextField
          className={classes.margin}
          onChange={(event) => setUserId(event.target.value)}
          id="input-with-icon-textfield"
          label="ID"
          defaultValue={user.userId} //TODO
          value={userId}
          InputProps={{
            style: { fontSize: 15 },
            startAdornment: (
              <InputAdornment position="start">
                <BrandingWatermarkIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </Typography>

      <Typography align="center">
        <TextField
          className={classes.margin}
          onChange={(event) => setEmail(event.target.value)}
          id="input-with-icon-textfield"
          label="Email"
          defaultValue={user.email} //TODO
          value={email}
          InputProps={{
            style: { fontSize: 15 },
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </Typography>

      {/* <Typography align="center">
        <TextField
          className={classes.margin}
          onChange={(event) => setPassword(event.target.value)}
          id="input-with-icon-textfield"
          label="Password"
          defaultValue={user.password} //TODO
          value={password}
          InputProps={{
            style: { fontSize: 15 },
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </Typography> */}

      <Typography align="center">
        <TextField
          className={classes.margin}
          onChange={(event) => setPhoneNumber(event.target.value)}
          id="input-with-icon-textfield"
          label="Phone Number"
          defaultValue={user.phoneNumber} //TODO
          value={phoneNumber}
          InputProps={{
            style: { fontSize: 15 },
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </Typography>
      <Typography align="center">
        <Button
          onClick={() => {
            updateUser(firstName, lastName, userId, email, password, phoneNumber);
          }}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Typography>

      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
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
          </ButtonBase>
        ))}
      </div>
    </>
  );
}
