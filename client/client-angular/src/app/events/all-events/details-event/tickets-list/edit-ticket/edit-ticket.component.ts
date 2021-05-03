import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../../models/ticket';

import { TicketService } from '../../../../../services/tickets.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Event } from '../../../../../models/event';
import { EventsService } from '../../../../../services/events.service';




@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  
    ticket: Ticket = null;
    events: Event[] = [];

    constructor(private ticketsService : TicketService, private eventService : EventsService,
      private router:Router, private activatedRoute:ActivatedRoute) {
      //this.router.getCurrentNavigation().extras.state;
    }
  
    ngOnInit(): void 
    {
      this.eventService.getEvents().subscribe(events => {
        this.events = events;
      });

      this.ticket=history.state;
    }
  
    onUpdate(user: String, eventId: String, code: String, QRcode: String, section: String, row: String, seat: String, forTrade: Boolean)
    {
      if(user === '' || eventId === undefined || code === '' || QRcode === '' || section === '' || row === '' || seat === '' || forTrade ===  undefined)
        window.alert('Please fill all fields');
      else{
        this.ticket.user = user;
        this.ticket.event = eventId;
        this.ticket.code = code;
        this.ticket.QRcode = QRcode;
        this.ticket.section = section;
        this.ticket.row = row;
        this.ticket.seat = seat;
        this.ticket.forTrade = forTrade;
        this.ticketsService.updateTicket(this.ticket).subscribe(data => {
          this.ticket = data;
          this.router.navigate(['/table-list']);
        }, err => {
          window.alert(err.error);
          this.router.navigate(['/table-list']);
        });
      }
    }

}
