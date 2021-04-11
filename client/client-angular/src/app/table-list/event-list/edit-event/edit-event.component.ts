import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Event } from '../../../models/event';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event: Event = null;
  categories: Category[] = [];

  constructor(private eventService : EventService, private router:Router, private activatedRoute:ActivatedRoute, private categoriesService : CategoriesService
    ) {
    //this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.event=history.state;
  }

  // add tickets:
  onUpdate(name: String, id: String, category: String, artist: String, imgUrl: String, date: Date, location: String){
    
    if(name === '' || id === '' || category === '' || artist === '' || imgUrl === '' || location === '')
      window.alert('Please fill all fields');
    else{
      this.event.name = name;
      this.event.id = id;
      this.event.category = category;
      this.event.artist = artist;
      this.event.imgUrl = imgUrl;
      this.event.date = date;
      this.event.location = location;
      this.eventService.updateEvent(this.event).subscribe(data => {
        this.event = data;
        this.router.navigate(['/table-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }
  }
}
