import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

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

  props.setDisableNext(false);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Event Name" />
          <Typography variant="subtitle1" className={classes.total}>
            Omer Adam Show
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Location" />
          <Typography variant="subtitle1" className={classes.total}>
            Tel Aviv
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Date" />
          <Typography variant="subtitle1" className={classes.total}>
            06/04/2022
          </Typography>
        </ListItem>
        {/* <ListItemText primary={product.desc2} secondaryTypographyProps={"dddd"} />
            <ListItemText primary={product.desc3} secondary={"ddddd"} />
            <Typography variant="body2">{product.price}</Typography> */}
        {LocationSeat.map((LocationSeat) => (
          <ListItem className={classes.listItem} key={Location.name}>
            <ListItemText primary={LocationSeat.desc} secondary={"ffff"} />
            <ListItemText primary={LocationSeat.desc2} secondary={"222"} />
            <ListItemText primary={LocationSeat.desc3} secondary={"dddd"} />
          </ListItem>
        ))}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Price" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
