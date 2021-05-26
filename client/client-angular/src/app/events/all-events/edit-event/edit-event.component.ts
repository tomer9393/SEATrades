import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Event } from '../../../models/event';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';
import { Ticket } from '../../../models/ticket';
import { tick } from '@angular/core/testing';
import { min } from 'rxjs/operators';

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

  onUpdate(name: String, category: String, artist: String, imgUrl: String, date: Date, location: String, minPrice: Number, totalTickets: Number)
  {
    if(name === '' || category === '' || artist === '' || imgUrl === '' || location === '' || minPrice === null || totalTickets === null)
      window.alert('Please fill all fields');
    else{
      this.event.name = name;
      this.event.category = category;
      this.event.artist = artist;
      this.event.imgUrl = imgUrl;
      this.event.date = date;
      this.event.location = location;
      this.event.minPrice = minPrice;
      this.event.totalTickets = totalTickets;
      this.eventsService.updateEvent(this.event).subscribe(data => {
        this.event = data;
        this.router.navigate(['/events']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/events']);
      });
    }
  }
}
