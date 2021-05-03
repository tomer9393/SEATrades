import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../../../models/ticket';
import { TicketService } from '../../../../services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit 
{

  tickets :  Ticket[] = [];  
  @Input() listFor: String = '';
  @Input() search: string = '';
  @Input() refresh: string = "false";

  constructor(private ticketsService :  TicketService, private router: Router){}
  
  ngOnInit() {
    if(this.listFor === '')
      this.loadAll();
    else if (this.listFor !== '')
    {
      this.loadForEvent(this.listFor);
    }
  }
  
  ngOnChanges(changes: String) {
    // changes.prop contains the old and the new value...
    if(this.refresh === "true")
      this.loadAll();
    if(this.listFor === "" || this.search === "")
    { 
      this.loadAll();
    }
  
    else if (this.listFor !== '')
    {
      this.loadForEvent(this.listFor);
    }
  }

  loadAll()
  {
    this.ticketsService.getTickets().subscribe(data => {
      this.tickets = data;
    }, err => {
      window.alert(err.error);
    });
  }

  loadForEvent(eventId: String)
  {
    this.ticketsService.getTicketsByEventID(eventId).subscribe(data => {
      this.tickets = data;
    }, err => {
      window.alert(err.error);
      this.router.navigate(['/event-list']);
    });
  }

  onCreate()
  {
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/CreateTicket', { state: {event: this.listFor}});
  }

  onEdit(ticket : Ticket)
  {
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/EditTicket', { state: ticket });
  }
  onDelete(ticket : Ticket)
  {
    //this.currentArticleService.changeCurrentArticle(article);
    this.ticketsService.deleteTicket(ticket._id).subscribe(data => {
      this.tickets.splice(this.tickets.indexOf(ticket),1);
    }, err => {
      window.alert(err.error);
      this.tickets.splice(this.tickets.indexOf(ticket),1);
    });
  }
  onDetails(ticket : Ticket)
  {
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/DetailsTicket', { state: ticket });
  }

  handlePanel(action : string)
  {
    this.loadAll();
  }
}
