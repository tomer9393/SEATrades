import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event';
import { EventsService } from '../../../services/events.service';
import { Router } from '@angular/router';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';
import { Ticket } from '../../../models/ticket';



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit 
{

  event: Event = null;
  category: String = '';
  categories: Category[] = [];
  isEditable = false;

  constructor(private eventsService : EventsService, private router: Router, private categoriesService : CategoriesService) { }

  ngOnInit(): void 
  {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.category=history.state.category;
    if(this.category !== ''){
      this.isEditable = true;
    }
  }

  onCreate(name: String, category: String, artist: String, img: String, date: Date, location: String){
    if(name === '' || category === '' || artist === '' || img === ''||date == undefined || location === '')
      window.alert('Please fill all fields');
    else{
      this.eventsService.addEvent(name, category, artist, img, date, location).subscribe(data => {
        this.event = data;
        this.router.navigate(['/events-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/events-list']);
      });
    }
  }
}
