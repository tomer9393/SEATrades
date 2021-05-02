import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Event } from '../../../models/event';
import { TicketService } from '../../../services/tickets.service';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit 
{

  event: Event = null;
  listFor: String;
  constructor(private eventService : EventsService, private ticketService : TicketService  ,private router:Router, private activatedRoute:ActivatedRoute) {
    //this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void 
  {
    this.event=history.state;
    this.listFor = this.event._id;
  }

  onEdit()
  {
    this.router.navigateByUrl('/EditEvent', { state: this.event });

  }
  onDelete()
  {
    this.eventService.deleteEvent(this.event._id).subscribe(data => {
      this.router.navigate(['/events-list']);
    }, err => {
      window.alert(err.error);
      this.router.navigate(['/events-list']);
    });
  }
}
