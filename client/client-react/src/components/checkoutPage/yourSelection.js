import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { format } from "date-fns";
import { selectProperties } from '@fluentui/utilities';


const Event = [
  { name: 'Event', desc: 'Event name',desc2:'Location',desc3:'Date' },
];

const LocationSeat = [
    { name: 'Location', desc: 'Section',desc2:'Row',desc3:'Seat' },
  ];
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
// //   { name: 'Shipping', desc: '', price: 'Free' },
// ];
// const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

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

export default function YourSelection(props) {
  const classes = useStyles();
  const selectedSeats = props.FinalSeats;
  const event = props.event;
  var date = new Date(event.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  props.setDisableNext(false);
  
  var finalPrice=0;
  selectedSeats?.forEach((s) => finalPrice = finalPrice + s[3])

  const InfoRows = selectedSeats?.map((seat) => (
    <ListItem className={classes.listItem} key={ seat[2]}>
    <ListItemText primary={'Section:'} secondary={seat[0]}/>
    <ListItemText primary={'Row:'} secondary={seat[1]} />
    <ListItemText primary={'Seat:'} secondary={seat[2]} />
    </ListItem>
    ));


  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Order summary
      </Typography> */}
      <List disablePadding >
      <ListItem className={classes.listItem}>
          <ListItemText primary="Event Name:" />
          <Typography variant="subtitle1" className={classes.total}>
            {event.name}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Location:" />
          <Typography variant="subtitle1" className={classes.total}>
          {event.location}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Date and Time:" />
          <Typography variant="subtitle1" className={classes.total}>
          {formattedDate} 20:30
          </Typography>
        </ListItem>
            {/* <ListItemText primary={product.desc2} secondaryTypographyProps={"dddd"} />
            <ListItemText primary={product.desc3} secondary={"ddddd"} />
            <Typography variant="body2">{product.price}</Typography> */}
             {/* {LocationSeat.map((LocationSeat) => ( */}
                {InfoRows}
          {/* <ListItem className={classes.listItem} key={ 'Location'}>
            <ListItemText primary={'Section'} secondary={"111"}/>
            <ListItemText primary={'Row'} secondary={"222"} />
            <ListItemText primary={'Seat'} secondary={"333"} />
            </ListItem> */}
            {/* ))} */}

            
        <ListItem className={classes.listItem}>
          <ListItemText primary="Price:" />
          <Typography variant="subtitle1" className={classes.total}>
            ₪{finalPrice}
          </Typography>
        </ListItem>
      </List>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid> */}
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      {/* </Grid> */}
    </React.Fragment>
  );
}