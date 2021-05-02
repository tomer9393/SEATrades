import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Event } from '../../../models/event';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';
import { Ticket } from '../../../models/ticket';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit 
{

  event: Event = null;
  categories: Category[] = [];

  constructor(private eventsService : EventsService, private router:Router, private activatedRoute:ActivatedRoute, private categoriesService : CategoriesService
    ) {
    //this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.event=history.state;
  }

  onUpdate(name: String, category: String, artist: String, img: String, date: Date, location: String, tickets: Ticket[])
  {
    if(name === '' || category === '' || artist === '' || img === '' || location === '')
      window.alert('Please fill all fields');
    else{
      this.event.name = name;
      this.event.category = category;
      this.event.artist = artist;
      this.event.img = img;
      this.event.date = date;
      this.event.location = location;
      this.event.tickets = tickets;
      this.eventsService.updateEvent(this.event).subscribe(data => {
        this.event = data;
        this.router.navigate(['/events-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/events-list']);
      });
    }
  }
}
