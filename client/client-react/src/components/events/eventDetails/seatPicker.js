import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AuthContext } from "../context/auth-context";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function seatPicker() {
  //const auth = useContext(AuthContext);
  const classes = useStyles();
  const [seat, setSeat] = useState();
  const [row, setRow] = useState();
  const [section, setSection] = useState();
  const [isWrongSeat, setIsWrongSeat] = useState();
  const [isWrongRow, setIsWrongRow] = useState();
  const [isWrongSection, setIsWrongSection] = useState();
  const history = useHistory();

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        seat: seat,
        row: row,
        section: section
      }),
    };

    fetch("http://localhost:8081/users/login", requestOptions)
										  
      .then((response) => {
        setIsWrongSeat(false);
        setIsWrongRow(false);
        setIsWrongSection(false);

        switch (response.status) {
          case 403:
            setIsWrongRow(true);
            break;
          case 403:
            setIsWrongSeat(true);
            break;
          case 403:
            setIsWrongSection(true);
            break;
          default:
            return response.json();
        }
      })
      .then((response) => {
        // if (response.userId && response.token) {
        //   auth.login(response.userId, response.token);
        //   history.push("/");
        //   window.location.reload();
        // }
      })
      .catch((error) => {
							  
        console.log(error);
						   
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={authSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="seat"
            label="Seat Number"
            name="seat"
            //autoComplete="seat"
            autoFocus
            onChange={(event) => setSeat(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="row"
            label="Row Number"
            //type="password"
            id="row"
            //autoComplete="current-row"
            onChange={(event) => setRow(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="section"
            label="section"
            //type="password"
            id="section"
            //autoComplete="current-row"
            onChange={(event) => setSection(event.target.value)}
          />
          {isWrongSeat && (
            <div style={{ color: "red" }}>Seat does not exist</div>
          )}
          {isWrongRow && (
            <div style={{ color: "red" }}>Wrong row</div>
          )}
          {isWrongSection && (
            <div style={{ color: "red" }}>Wrong Section</div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reserve Seat
          </Button>
        </form>
      </div>
    </Container>
  );
}
