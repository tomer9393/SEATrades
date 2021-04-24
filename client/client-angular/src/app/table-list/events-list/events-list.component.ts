import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';
//import { CurrentArticleService } from 'src/app/services/current-article.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit 
{

  events : Event[] = [];  
  @Input() listFor: String = '';
  @Input() search: string = '';
  @Input() refresh: string = "false";

  constructor(private eventsService : EventsService, private router: Router){}
  
  ngOnInit() {
    if(this.listFor === '')
    this.loadAll();
    else if (this.listFor !== '')
    {
      this.loadForCategory(this.listFor);
    } 
  }
  
  ngOnChanges(changes: String) 
  {
    // changes.prop contains the old and the new value...
    if(this.refresh === "true")
      this.loadAll();
    if(this.listFor === "" || this.search === "")
    { 
      this.loadAll();
    }
    // else if(this.listFor === "search")
    // { 
    //   this.eventsService.filter(this.search).subscribe(data =>{
    //     this.events = data;
    //   }, err => {
    //     window.alert(err.error);
    //   })
    // }
  }

  loadAll(){
    this.eventsService.getEvents().subscribe(data => {
      this.events = data;
    }, err => {
      window.alert(err.error);
    });
  }

  loadForCategory(category: String)
  {
    this.eventsService.getEventesByCategory(category).subscribe(data => {
      this.events = data;
    }, err => {
      window.alert(err.error);
      this.router.navigate(['/table-list']);
    });
  }

  onCreate()
  {
    this.router.navigateByUrl('/CreateEvent', { state: {category: this.listFor}});
  }

  onEdit(event : Event)
  {
    this.router.navigateByUrl('/EditEvent', { state: event });
  }
  onDelete(event : Event)
  {
    this.eventsService.deleteEvent(event._id).subscribe(data => {
      this.events.splice(this.events.indexOf(event),1);
    }, err => {
      window.alert(err.error);
      this.events.splice(this.events.indexOf(event),1);
    });
  }
  onDetails(event : Event)
  {
    this.router.navigateByUrl('/DetailsEvent', { state: event });
  }

  handlePanel(action : string)
  {
    this.loadAll();
  }
}
