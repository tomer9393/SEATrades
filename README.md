# SEATrades

![footer-logo](https://user-images.githubusercontent.com/63789569/125190936-73028600-e248-11eb-9411-01f9a455b674.png)

<h3>This is our final project as a part of our Full Stack internship in our Computer Science degree studies at the College of Management Academic Studies.<h3>
<h3>We created a mobile responsive Web Application made for buying and trading event tickets in a secure platform.<h3><br>

  
## Table of Contents:
* [**Project Description**](#project-description)
* [**Related Work**](#related-work)
* [**How it Works**](#how-it-works)
* [**Functionality and Use-case**](#functionality-and-use-case)
* [**Use-case Videos**](#use-case-videos)
* [**Technologies Used**](#technologies-used)
* [**Demo**](#demo)
* [**How To Install**](#installation)
* [**TO DO**](#to-do)
  

## Project description
Have you ever bought an event ticket and could not attend? <br>
Bought a ticket to the Champions League final and suddenly find out that your best friend is getting married that day?<br>
You and your friends are going to see your favorite artist perform but you found out that your tickets are not in the same area?<br>
Have a ticket for a show but suddenly there is a rush at work and you prefer to go at a different time?<br>
<br>
We are happy to introduce to you – <strong>SEATrades!</strong> <br>
A reliable trading system for event tickets – music concerts, sports matches, festivals and more.<br>
A platform that centralizes a variety of trading options such as - buying, selling and exchanging tickets in a unified, convenient and user-friendly interface.<br>
With SEATrades every user has a uniqe QR code with all the user's information called an "EVENT-ID".<br> This EVENT ID is your entrance ticket to the event.<br>
Every user can buy an event ticket, And if the user would like to exchange his seat or sell it he can do it directlely in the platfrom.<br>
When a trade is confirmed, Our system is replacing each seat with its user's connected EVENT-ID and now you can use your new seat ticket with no worries of having a fake ticket. <br>
The procedure is transparent to the user and by that we are helping you to exchange or sell your seat ticket with no need to look for a buyer or handling any money issues.<br>
  
## Related Work
  
Today we have a lot of platforms for buying tickets directly from the production such as – <br>
Ticketmaster, Eventer, LiveNation and a lot more…<br>
These platforms show to the customers the description of the seats in the hall / stadium and allow them to choose a specific seat / area according to varying price range. <br>
These platforms issue a regular and non-unique ticket to the customer, allowing forgeries and profiteering.<br>
On top of that, these platforms do not allow a secure interface for exchanging / selling the ticket between customers and demand high fees in case of cancellations.<br>
In addition to these platforms, there are platforms for buying second-hand tickets from private individuals such as Viagogo which serve as a mediator between seller and buyer. This method is not safe, as a seller can sell the same ticket to many customers without inspection or supervision which leads to a situation where the first user to use the ticket is the only one who got to use it. And all the other buyers who try to enter with this ticket will not be admitted.
<br>
<br>
SEATrades is here to fix that by issuing a unique ticket to each customer and providing an easy access platform for customers who want to exchange / sell their ticket in an anonymous process that is conducted safely without the need for a physical meeting with the buyer or handling money transfers.
<br>
  
  
## How it Works
  ![how it works](https://user-images.githubusercontent.com/63789569/125192685-cb8a5100-e251-11eb-9636-cb1df8c55c61.png)


## Functionality and Use-case:
<h3>For Users -</h3>
<strong>1. Registration and Login page</strong><br>
When a new customer is registering to the platform:<br>
 <ul>
•	The customer inputs all his information such as: ID, Birthdate, phone number etc...<br>
•	The system generates a unique QR-code with that customer’s info and that becomes the customer’s “EVENT ID”.<br>
•	For each event this customer purchase a ticket – the system will connect that ticket to the customer’s “EVENT ID”.<br>
</ul>
     
<strong>2. User's profile page</strong><br>
• User's profile page will list the user's information and "EVENT ID" QR code. This QR code is shown at the venue entrance for ticket validation.<br>
•	"My Tickets" area will list all event tickets for that user. With the option of setting it as a “tradable seat” and the option to offer another customer to trade their seats.<br>
•	"My SEATrades" area will list:<br>
  <ul>
  My SEATrade Alerts -  A list of seats that other customers offered to trade with <strong>YOUR</strong> tradable seats.<br>
  My SEATrade Requests - A list of requests you made to trade your seat with <strong>OTHERS</strong> tradable seats.<br>
  </ul>

<strong>3. Home Page</strong><br>
Events search bar, Categoty pages and listing of popular (most sold) events in each category.

<strong>4. Search Page</strong><br>
When a customer is searching for an event a full list of all the events regarding his search will appear.

<strong>5. Event Page</strong><br>
Each event will show the event details such as: date, location, artist etc... and the venue map next to a dropdown list of all the available seats.
<br> 

<h3>For Admins - </h3>
  
  ****** UPDATE ******
  <br> <br> <br> <br> 

## Use-case Videos
  <h3>Use case for:</h3>
  <h4>Signup | Login | Home Page | Category Page | Search Page | Event Page & Ticket Purchase. </h4>
  

https://user-images.githubusercontent.com/63789569/125195110-eadaab80-e25c-11eb-8ec8-979f0c830837.mp4
  

<br><br>
  
<h3>Use case for:</h3>
<h4>My Tickets Page | My SEATrades Page | Set seat for trade | Request a Seat trade & Request status |</h4>
<h4>Seat Trade alert, Confirming Trade & List the traded seat ticket. </h4>

https://user-images.githubusercontent.com/63789569/125195208-63416c80-e25d-11eb-94a2-4230661de5e8.mp4

<br><br>
  
## Technologies Used

<ul>
  <li><a >Server Side:  </a><a href="https://nodejs.org/en/">Node.js(JavaScript)<a><br></li>
   <li><a >Database:  </a><a href="https://www.mongodb.com/cloud">MongoDB Atlas(CloudService)<a><br></li>
   <li><a >Client Side - Users: </a><a href="https://reactjs.org/">React JS(JavaScript)<a><br></li>
   <li><a >Client Side - Admin Panel: </a><a href="https://angular.io/">Angular(TypeScript)<a><br></li>
</ul>

## Demo
 * [SEATrades](http://seatrades.cs.colman.ac.il:3000/)    <br>
  
  Comments-<br>
  - SignUp: There is no mail validation at the moment . So you can signup with any mail address you want.<br> for example: test-user@gmail.com <br>
  - Checkout: There is no Checkout validation at all at the moment . when purchasing a ticket, At the checkout stage you can enter any credit card info. as you can see in the use-case video <br>
  
      
## Installation
 
1. Download the project.<br>
2. Open the project in code editor.(we used VScode)<br>
3. In "Server/config/.env.local" change the CONNECTION_STRING to your mongodb connection string<br>
4. Go to each directory ( server, client/client-angular , client/client-react ) and run "npm install".<br>
5. After npm install is done. Open a terminal for each directory and run:<br>
     <ul>
       <li>For windows users: "npm start"</li>
       <li>For linux users: "npm run-script startLinux"</li>
     </ul>
6. In your browser:
      <ul>
       <li>Server: "http://localhost:8081/"</li>
       <li>Client - User: "http://localhost:3000/"</li>
       <li>Client - Admin Panel: "http://localhost:4200/"</li>
     </ul>
7. Enjoy!<br>
     
     
## TO DO
 <ul>
   <li>Add responsive SeatMap with the option to choose seats by clicking the seat on the map</li>
   <li>Add Sell ticket option</li>
 </ul>  
  
     
