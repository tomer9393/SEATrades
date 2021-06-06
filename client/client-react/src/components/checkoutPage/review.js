import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { format } from "date-fns";


const Event = [
  { name: "Event", desc: "Event name", desc2: "Location", desc3: "Date" },
];

const LocationSeat = [
  { name: "Location", desc: "Section", desc2: "Row", desc3: "Seat" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const selectedSeats = props.FinalSeats;
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  props.setDisableNext(false);
  var finalPrice=0;
  selectedSeats?.forEach((s) => finalPrice = finalPrice + s[3])

  const InfoRows = selectedSeats?.map((seat) => (
    <ListItem className={classes.listItem} key={ 'Location'}>
    <ListItemText primary={'Section'} secondary={seat[0]}/>
    <ListItemText primary={'Row'} secondary={seat[1]} />
    <ListItemText primary={'Seat'} secondary={seat[2]} />
    </ListItem>
    ));


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Event Name" />
          <Typography variant="subtitle1" className={classes.total}>
          {event.name}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Location" />
          <Typography variant="subtitle1" className={classes.total}>
          {event.location}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Date" />
          <Typography variant="subtitle1" className={classes.total}>
          {formattedDate} 20:30
          </Typography>
        </ListItem>
        {InfoRows}
        {/* <ListItemText primary={product.desc2} secondaryTypographyProps={"dddd"} />
            <ListItemText primary={product.desc3} secondary={"ddddd"} />
            <Typography variant="body2">{product.price}</Typography> */}
        {/* {LocationSeat.map((LocationSeat) => (
          <ListItem className={classes.listItem} key={Location.name}>
            <ListItemText primary={LocationSeat.desc} secondary={"ffff"} />
            <ListItemText primary={LocationSeat.desc2} secondary={"222"} />
            <ListItemText primary={LocationSeat.desc3} secondary={"dddd"} />
          </ListItem>
        ))} */}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Price" />
          <Typography variant="subtitle1" className={classes.total}>
            ₪{finalPrice}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
