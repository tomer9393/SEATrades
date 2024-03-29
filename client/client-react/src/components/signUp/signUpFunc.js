import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/http-hook";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userId, setUserId] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isUnvalidEmail, setIsUnvalidEmail] = useState();
  const [isUnvalidPhone, setIsUnvalidPhone] = useState();
  const [isUnvalidId, setIsUnvalidId] = useState();
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isExistingUser, setIsExistingUser] = useState();

  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  const PhonePattern= new RegExp(/^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/g);
  const idPattern= new RegExp(/^[0-9]{9}$/g);
  
  const authSubmitHandler = async (event) => {
    event.preventDefault(); 
    setIsExistingUser(false);
    setIsUnvalidEmail(false);
    setIsUnvalidPhone(false);
    setIsUnvalidId(false);
    setIsPasswordsMatch(false);

    const isEmailValid = emailPattern.test(email);
    if (!isEmailValid) {
      setIsUnvalidEmail(true);
    }

    const isPhoneValid = PhonePattern.test(phoneNumber);
    if (!isPhoneValid) {
      setIsUnvalidPhone(true);
    }

    const isIdValid = idPattern.test(userId);
    if (!isIdValid) {
      setIsUnvalidId(true);
    }
    const isSamePasswords = password === confirmPassword;
    setIsPasswordsMatch(isSamePasswords);

    if (isSamePasswords && isEmailValid && isPhoneValid &&isIdValid) {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userId: userId,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
          }),
        };
        fetch("http://193.106.55.117:8081/users/signup", requestOptions)
          .then((response) => {
            if (response.status === 422) {
              setIsExistingUser(true);
            }
            return response.json();
          })
          .then((response) => {
            if (response.userId && response.token) {
              auth.login(response.userId, response.token);
              history.push("/");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={authSubmitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="ID"
                name="id"
                autoComplete="email" //TODO
                onChange={(event) => setUserId(event.target.value)}
                
              />
              {isUnvalidId && (
                  <div style={{ color: "red" }}>
                    Please enter valid ID 
                  </div>
                )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value.toLowerCase())}
              />
              {isUnvalidEmail && (
                <div style={{ color: "red" }}>
                  Please enter valid email address
                </div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setConfirmPassword;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="confirm password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </Grid>
            {!isPasswordsMatch && (
              <div style={{ color: "red" }}>
                Password does not match. Try again
              </div>
            )}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phonerNumber"
                autoComplete="lname"
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
               {isUnvalidPhone && (
                <div style={{ color: "red" }}>
                  Please enter valid phone number
                </div>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {isExistingUser && (
            <div style={{ color: "red" }}>User already exists</div>
          )}
          <Grid container justify="flex-start">
            <Grid item>
              <Link href="/SignIn" variant="body2" style={{ color: "blue" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}