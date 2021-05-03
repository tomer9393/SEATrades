import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';

import { TicketService } from '../../../services/tickets.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Event } from '../../../models/event';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit 
{

    ticket: Ticket = null;
    event: String = '';
    events: Event[] = [];
    isEditable = false;

    constructor(private ticketsService : TicketService, private eventsService : EventsService, private router:Router, private activatedRoute:ActivatedRoute) { }
  
    ngOnInit(): void 
    {
      this.eventsService.getEvents().subscribe(events => {
        this.events = events;
      });
      this.event=history.state.event;
      if(this.event !== ''){
        this.isEditable = true;
      }
    }

    onCreate(user: String, eventId: String, code: String, QRcode: String, section: String, row: String, seat: String, forTrade: Boolean)
    {
      if(user === '' || eventId === undefined || code === '' || QRcode === '' || section === '' || row === '' || seat === '' || forTrade ===  undefined)
        window.alert('Please fill all fields');
      else{
        this.ticketsService.addTicket(user, eventId, code, QRcode, section, row, seat, forTrade).subscribe(data => {
          this.ticket = data;
          this.router.navigate(['/table-list']);
        }, err => {
          window.alert(err.error);
          this.router.navigate(['/table-list']);
        });
      }
    }
}
