import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// import AddressForm from './AddressForm';
import PaymentForm from "./paymentForm";
import Review from "./review";
import YourSelection from "./yourSelection";
import { useState } from "react";
import { AuthContext } from "../context/auth-context";
import { createTicket } from "../../api/TicketAPI";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    fontSize: 20,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Your Selection", "Payment details", "Review your order"];

const getStepContent = (step, setDisableNext,FinalSeats,event) => {
  switch (step) {
    case 0:
      return <YourSelection setDisableNext={setDisableNext} FinalSeats={FinalSeats} event={event}/>;
    case 1:
      return <PaymentForm setDisableNext={setDisableNext} />;
    case 2:
      return <Review setDisableNext={setDisableNext}  FinalSeats={FinalSeats} event={event}/>;
    default:
      throw new Error("Unknown step");
  }
};

function SetSeatsInfo(event, row ,seat){
  var section;
  var price = event.minPrice;
  if(row=="A" || row=="B" || row=="C" || row=="D"){
    if(row=="D"){
      section="VIP"
      price = price + 100;
    }
    if(row=="A" || row=="B"){
      if(seat>4 && seat<19){
        section="VIP"
        price = price + 100;
      }else {
        section="B"
        price = price + 40
      }
    }
    if(row=="C"){
      if(seat>2 && seat<21){
        section="VIP"
        price = price + 100;
      }else {
        section="B"
        price = price + 40
      }
    }
  }else {section = "A"}

    const seatInfo = [section,row,seat,price];
    return seatInfo;
}

export default function Checkout(props) {
  const selectedSeats = props.selectedSeats;
  const event = props.event;
  const eventId = event._id;
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [disableNext, setDisableNext] = useState();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if(activeStep === steps.length-1){
      FinalSeats?.forEach((seat) => {
      const ticket = createTicket(userId, eventId, seat[0], seat[1], seat[2], seat[3]);
    })
     props.setPlaceOrder(true);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const FinalSeats = selectedSeats?.map((ticket) => (
    SetSeatsInfo(event, ticket[0],ticket[1])
  ));


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, setDisableNext,FinalSeats,event)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={disableNext}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
