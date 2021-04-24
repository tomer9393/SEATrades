import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';

import { TicketService } from '../../../services/tickets.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-details-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css']
})
export class DetailsTicketComponent implements OnInit 
{

  ticket: Ticket = null;

  constructor(private ticketsService : TicketService, private router:Router, private activatedRoute:ActivatedRoute) {
    //this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void 
  {
    this.ticket=history.state;
  }

  onEdit()
  {
    this.router.navigateByUrl('/EditTicket', { state: this.ticket });
  }
  onDelete()
  {
    this.ticketsService.deleteTicket(this.ticket._id).subscribe(data => {
      this.router.navigate(['/table-list']);
    }, err => {
      window.alert(err.error);
      this.router.navigate(['/table-list']);
    });
  }
}
