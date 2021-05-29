import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

export default function PaymentForm(props) {
  const [nameOnCard, setnameOnCard] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expDate, setexpDate] = useState("");
  const [cvv, setcvv] = useState("");
  // const [isInvalidNumber, setIsInvalidNumber] = useState();

  // const numberPattern= new RegExp(/^[0-9\b]+$/);

  // const isNumberValid = numberPattern.test(cardNumber,cvv,expDate);
  //   if (!isNumberValid&&cvv&&expDate) {
  //     setIsInvalidNumber(true);
  //   }

    

  const shouldDisableNext = !(nameOnCard && cardNumber && expDate && cvv);
  props.setDisableNext(shouldDisableNext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
           
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            onChange={(event) => setnameOnCard(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            onChange={(event) => setcardNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            onChange={(event) => setexpDate(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={(event) => setcvv(event.target.value)}
          
          />
            {/* {isInvalidNumber && (
              <div style={{ color: "red" }}>
                Please enter valid phone number
              </div>
            )} */}
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
