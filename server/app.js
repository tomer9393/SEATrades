const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const categoryRoutes = require('./routes/category');
const eventRoutes = require('./routes/event');
const ticketRoutes = require('./routes/ticket');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const swapRoutes = require('./routes/swap');


require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

console.log(process.env.PORT);

app.use('/categories', categoryRoutes);
app.use('/events', eventRoutes);
app.use('/tickets', ticketRoutes);
app.use('/users', userRoutes);
app.use('/contacts', contactRoutes);
app.use('/swaps', swapRoutes);

const server = http.createServer(app);


server.listen(process.env.PORT);