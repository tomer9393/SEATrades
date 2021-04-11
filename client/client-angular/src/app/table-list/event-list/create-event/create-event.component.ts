import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event.service';
import { Router } from '@angular/router';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: Event = null;
  category: String = '';
  categories: Category[] = [];
  isEditable = false;

  constructor(private eventService : EventService, private router: Router, private categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.category=history.state.category;
    if(this.category !== ''){
      this.isEditable = true;
    }
  }

  // add tickets:
  onCreate(name: String, id:String ,category: String, artist: String, imgUrl: String, date: Date, location: String){
    if(name === '' || id === '' || category === '' || artist === '' || imgUrl === '' || location === '')
      window.alert('Please fill all fields');
    else{
      this.eventService.addEvent(name, id,category, artist, imgUrl, date, location).subscribe(data => {
        this.event = data;
        this.router.navigate(['/table-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }
  }
}
